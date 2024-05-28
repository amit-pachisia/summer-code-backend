const mongoose = require('mongoose');
const Profile = mongoose.model('Profile');


/**
 * Create the profile json
 * @param {Object} req
 * @param {Object} res
 * @returns {Object}
 */
const createProfile = async (req, res) => {
    try {
        const payload = req.body;
        const instance = new Profile(payload);
        await instance.save();
        res.json({ success: true });
    } catch ({ message }) {
        res.send({ error: true, message });
    }
};

module.exports = { createProfile }