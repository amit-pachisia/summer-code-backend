// routes/profileRoute.js
const express = require('express');
const router = express.Router();
const {
  getUserProfiles,
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
} = require('../controllers/profileController');

router.get('/', getUserProfiles);
// Route to fetch the profile of a user
router.get('/:userId', getUserProfile);
router.put('/:userId', updateUserProfile);
router.delete('/:userId', deleteUserProfile);

module.exports = router;
