const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const referralSchema = new Schema({
  applicant: { type: Schema.Types.ObjectId, ref: "Profile", required: true },
  referredBy: { type: Schema.Types.ObjectId, ref: "Profile", required: true },
  /*
  * Commented for Later Use - After Company Models are Defined  
  applicantsCompany: { type: Schema.Types.ObjectId, ref: "Company" },
  referredTo: { type: Schema.Types.ObjectId, ref: "Company" },
  */
  applicantsCompany: { type: String, required: true },
  referredTo: { type: String, required: true },
  yearsOfExperience: { type: Number, required: true },
  status: { type: String, default: "Pending" },
  date: { type: Date, default: Date.now },
});

const Referral = mongoose.model("Referral", referralSchema);

module.exports = Referral;
