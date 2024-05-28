const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  city: { type: String, required: true },
  country: { type: String, required: true }
});

const experienceSchema = new Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  description: { type: String, required: true }
});

const educationSchema = new Schema({
  degree: { type: String, required: true },
  fieldOfStudy: { type: String, required: true },
  school: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true }
});

const skillsSchema = new Schema({
  name: { type: String, required: true },
  endorsements: { type: Number, required: false }
});

const linksSchema = new Schema({
  type: { type: String, required: true },
  url: { type: String, required: true }
});

const profileSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  headline: { type: String, required: true },
  location: { type: locationSchema, required: true },
  industry: { type: String, required: true },
  summary: { type: String, required: true },
  experience: { type: [experienceSchema], required: false },
  education: { type: [educationSchema], required: true },
  skills: { type: [skillsSchema], required: true },
  languages: { type: [String], required: true },
  links: { type: [linksSchema], required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
  //ref to User for relating profile to paricular user
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;





