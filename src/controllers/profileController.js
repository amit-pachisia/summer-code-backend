const mongoose = require('mongoose');
const Profile = mongoose.model('Profile');
const Users = mongoose.model('Users'); // importing User Model


/**
 * Create the profile json
 * @param {Object} req
 * @param {Object} res
 * @returns {Object}
 */
const createProfile = async (req, res) => {
    try {
        const {userId} = req.params;
        const payload = req.body;
        const instance = new Profile(payload);
        await instance.save();

        //update user model on creating new profile for associating it with profile
        // const user = await findByIdAndUpdate(
        //     userId,
        //     {profile :  instance._id },
        //     { new : true }
        // )

        // if(!user){
        //     return res.status(404).json({message : 'User not found'});
        // }

        // commenting above to use it when user Model is in sync
        res.json({ success: true });
    } catch ({ message }) {
        res.send({ error: true, message });
    }
};

const getUserProfile = async(req,res) => {
    try{
        const { userId } = req.params;
        const user = await Users.findById(userId).populate('profile').exec;

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
          }
          
          res.status(200).json(user.profile);
    }
    catch({message}) {
        res.send({error : true, message})
    }
}

module.exports = { createProfile }