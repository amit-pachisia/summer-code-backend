const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const hashUtils = require('../utils/hashUtils');

const register = async (req,res) =>{
     const {firstname, lastname,email, password} = req.body;
     try{
        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).json({message: 'User already exists'});
        }
        let hashedPassword = await hashUtils.hashPassword(password);
        const user = new User({firstname,lastname, email, password: hashedPassword});
        await user.save();
        const token = jwt.sign({id: user.id, email:user.email},process.env.JWT_SECRET,{
            expiresIn: '30d'
        });
        res.status(200).json({message: 'User registered successfully',token,firstname,lastname,email});

     }
     catch(err){
        res.status(500).json({message: 'Server Error'});
     }
}


module.exports = {
    register,
};
