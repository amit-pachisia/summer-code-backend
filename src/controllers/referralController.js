const mongoose = require("mongoose");
const Referral = require("../models/referralModel");
const User = require("../models/profileModel");

const createReferral = async (req, res) => {
  try {
    const { applicant, referredBy, referredTo } = req.body;
    const existingReferral = await Referral.findOne({
      applicant,
      referredBy,
      referredTo,
    });

    console.log(req.body, existingReferral);

    if (existingReferral) {
      return res.status(400).json({
        message: "Referral already exists",
      });
    }

    const applicantUser = await User.findById({ _id: applicant });

    if (!applicantUser) {
      return res.status(400).json({
        message: "Applicant does not exist",
      });
    }

    const referredByUser = await User.findById({ _id: referredBy });

    if (!referredByUser) {
      return res.status(400).json({
        message: "Referrer does not exist",
      });
    }

    console.log(applicantUser, referredByUser);

    applicantUser.referralsRequested.push(applicant);
    referredByUser.referralsGiven.push(referredBy);

    const referral = new Referral(req.body);
    await referral.save();
    await applicantUser.save();
    await referredByUser.save();

    res.status(201).json(referral);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const listReferrals = async (_req, res) => {
  try {
    const referrals = await Referral.find();

    res.status(200).json(referrals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createReferral, listReferrals };
