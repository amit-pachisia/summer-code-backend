const express = require('express');
const router = express.Router();
const {
  postReferrerInfoDetails,
} = require('../controllers/referrerController');
const { validateBody } = require('../middlewares/referrerMiddleware');

router.post(
  '/refer',
  (req, res, next) =>
    validateBody(req, res, next, {
      err: 'INCOMPLETE_DETAILS',
      errMessage: 'The fields provided are incomplete or incorrect',
    }),
  postReferrerInfoDetails
);

module.exports = router;
