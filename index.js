require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const authRoutes = require('./src/routes/authRoute');
const userSignupRoutes = require('./src/routes/userSignupRoute');
const connectToDB = require('./src/configs/db');

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes);
app.use('/signup', userSignupRoutes);

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
