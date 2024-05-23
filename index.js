const express = require('express');
const cors = require('cors');
const app = express();
const authRoutes = require('./src/routes/authRoute');

const port = 3000;

app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes);

app.get('/', (_, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
