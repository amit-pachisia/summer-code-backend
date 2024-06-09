require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectToDB = require('./src/configs/db');
const path = require('path');
const fs = require('fs');

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Dynamically import and use routes
const routesPath = path.join(__dirname, 'src', 'routes');
fs.readdirSync(routesPath).forEach(file => {
  const route = require(path.join(routesPath, file));
  const routePath = `/${file.replace('.js', '')}`;
  app.use(routePath, route);
});

app.get('/', (_, res) => {
  res.send('Hello World!');
});

// Restrict all miscellaneous routes
app.get('*', (_, res) => res.status(404).send('Not found'));

app.listen(port, () => {
  console.log(`[server] app listening at http://localhost:${port}`);
  // Connecting to the db once the server is up and running
  connectToDB(process.env.MONGO_URI);
});
