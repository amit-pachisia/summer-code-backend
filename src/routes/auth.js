const express = require('express');
const {register, login} = require('../controllers/authController');
const { isValidEmail } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/register', (req, res, next) =>
  isValidEmail(req, res, next, {
    err: 'INVALID_FORMAT_EMAIL',
    errMessage: 'The email address provided is Invalid.',
  }),
  register);

router.post(
  '/login',
  (req, res, next) =>
    isValidEmail(req, res, next, {
      err: 'INVALID_FORMAT_EMAIL',
      errMessage: 'The email address provided is Invalid.',
    }),
  login
);

module.exports = router;
