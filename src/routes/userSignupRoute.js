const express = require('express');

const userSignupController = require('../controllers/userSignupController');

const router = express.Router();

router.post('/register', userSignupController.register);

module.exports = router;