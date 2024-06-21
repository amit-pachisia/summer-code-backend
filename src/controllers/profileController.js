const mongoose = require('mongoose');
const Profile = mongoose.model('Profile');

const getUserProfiles = async (_, res) => {
  try {
    const users = await Profile.find({ isDeleted: false });
    res.status(200).json(users);
  } catch ({ message }) {
    res.send({ error: true, message });
  }
};

const getUserProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await Profile.findById(userId, { isDeleted: false });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch ({ message }) {
    res.send({ error: true, message });
  }
};

const updateUserProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const updateData = req.body;
    const updatedUser = await Profile.findByIdAndUpdate(userId, updateData, {
      new: true,
      runValidators: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(updatedUser);
  } catch ({ message }) {
    res.status(500).send({ error: true, message });
  }
};

const deleteUserProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const deletedUser = await Profile.findByIdAndUpdate(userId, {
      isDeleted: true,
    });
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch ({ message }) {
    res.status(500).send({ error: true, message });
  }
};

module.exports = {
  getUserProfiles,
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
};
