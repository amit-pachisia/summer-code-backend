const { model, Schema } = require('mongoose');

const referrerSchema = new Schema({
  userInfo: { email: String, firstName: String, lastName: String },
  referrerInfo: {
    firstName: String,
    email: String,
    referralCode: Number,
    jobTitle: String,
    companyName: String,
    isSuccessful: { type: Boolean, default: false },
  },
});

const Referrer = model('Referrer', referrerSchema);

module.exports = { Referrer };
