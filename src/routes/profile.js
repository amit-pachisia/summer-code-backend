// routes/profileRoute.js
const express = require('express');
const router = express.Router();
const { getUserProfiles,getUserProfile } = require('../controllers/profileController');

router.get('/',getUserProfiles);
// Route to fetch the profile of a user
router.get('/:userId', getUserProfile);

module.exports = router;