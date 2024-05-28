// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { createUser, createProfile, getUserProfile } = require('../controllers/userController');

// Route to create a new user
router.post('/users', createUser);

// Route to create a profile for an existing user
router.post('/users/:userId/profile', createProfile);

// Route to fetch the profile of a user
router.get('/users/:userId/profile', getUserProfile);

module.exports = router;