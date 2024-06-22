const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  city: { type: String },
  country: { type: String },
});

const experienceSchema = new Schema({
  title: { type: String },
  company: { type: String },
  location: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  description: { type: String },
});

const educationSchema = new Schema({
  degree: { type: String },
  fieldOfStudy: { type: String },
  school: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
});

const skillsSchema = new Schema({
  name: { type: String },
  endorsements: { type: Number },
});

const linksSchema = new Schema({
  type: { type: String },
  url: { type: String },
});

const profileSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  headline: { type: String },
  location: { type: locationSchema },
  industry: { type: String },
  summary: { type: String },
  experience: { type: [experienceSchema] },
  education: { type: [educationSchema] },
  skills: { type: [skillsSchema] },
  languages: { type: [String] },
  links: { type: [linksSchema] },
  isDeleted: { type: Boolean, default: false },
  referralsRequested: [{ type: Schema.Types.ObjectId, ref: "Referral" }],
  referralsGiven: [{ type: Schema.Types.ObjectId, ref: "Referral" }],
  //ref to User for relating profile to paricular user
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
