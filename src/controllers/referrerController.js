const jwt = require('jsonwebtoken');
const { Referrer } = require('../models/referrerModel');

const postReferrerInfoDetails = async (req, res) => {
  const { firstName, email, referralCode, jobTitle, companyName } = req.body;
  const token = req.headers.authorization.split(' ')[1];

  try {
    const referralExists = await Referrer.findOne({
      'referrerInfo.referralCode': referralCode,
    });

    if (referralExists && !referralExists?.isSuccessful)
      return res.status(400).json({
        err: 'REFERRAL_ALREADY_EXISTS',
        message: `You already have a referral in pending state for the given job title ${jobTitle} and referral code ${referralCode}`,
      });

    const { userInfo } = jwt.decode(token);

    const referrerInfo = {
      firstName,
      email,
      referralCode,
      jobTitle,
      companyName,
    };

    const referrer = new Referrer({ referrerInfo, userInfo });
    referrer.save();

    res.status(200).json({
      message: 'Referral is created successfully',
      referralCode,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { postReferrerInfoDetails };
