const mongoose = require('mongoose');

const connectDB = async (DB_URI) => {
  try {
    await mongoose.connect(DB_URI); // Database connection 🥳
    console.log('[database] Connection to Database Established');
  } catch (err) {
    console.log('Could not connect to MongoDB');
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
