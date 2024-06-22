const express = require("express");
const router = express.Router();

const {
  createReferral,
  listReferrals,
} = require("../controllers/referralController");

router.post("/create-referral", createReferral);
router.get("/list-referrals", listReferrals);

module.exports = router;
