const mongoose = require('mongoose');
const Profile = mongoose.model('Profile');

const getUserProfiles = async(req,res) => {
  try{
    const users = await Profile.find({});
    res.status(200).json(users);
  } catch ({message}) {
    res.send({error : true, message})
  }
};

const getUserProfile = async(req,res) => {
    try{
        const { userId } = req.params;
        const user = await Profile.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
          }
          
          res.status(200).json(user);
    }
    catch({message}) {
        res.send({error : true, message})
    }
}

module.exports = { getUserProfiles, getUserProfile }