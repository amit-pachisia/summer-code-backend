const express = require('express');
const router = express.Router();
const {
  postReferrerInfoDetails,
} = require('../controllers/referrerController');
const { validateBody } = require('../middlewares/referrerMiddleware');
const { getReferrerInfoDetails } = require('../controllers/referrerController');
const { tokenValidation } = require('../middlewares/authMiddleware');
console.log({ getReferrerInfoDetails, tokenValidation });

router.get('/getreferrer', tokenValidation, getReferrerInfoDetails);

router.post(
  '/refer',
  tokenValidation,
  (req, res, next) =>
    validateBody(req, res, next, {
      err: 'INCOMPLETE_DETAILS',
      errMessage: 'The fields provided are incomplete or incorrect',
    }),
  postReferrerInfoDetails
);


module.exports = router;
