const express = require('express');
const authController = require('../controllers/authController');
const { isValidEmail } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post(
  '/login',
  (req, res, next) =>
    isValidEmail(req, res, next, {
      err: 'INVALID_FORMAT_EMAIL',
      errMessage: 'The email address provided is Invalid.',
    }),
  authController.login
);

module.exports = router;
