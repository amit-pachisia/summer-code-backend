const { emailValidation } = require('../utils/validations');
const jwt = require('jsonwebtoken');

const isValidEmail = (req, res, next, data) => {
  const { email } = req.body;
  try {
    emailValidation.parse(email);
    next();
  } catch (error) {
    res.status(422).json({ data });
  }
};

const tokenValidation = (req,res,next) => {
   const token = req.headers.authorization.split(' ')[1];
   if(!token){
      return res.status(401).json({message: 'Access Denied. No token provided'});
   }
   try{
      const decoded = jwt.verify(token,process.env.JWT_SECRET);
      req.user = decoded;
      next();
    }
    catch(error){
       res.status(400).json({message: 'Invalid token.'});
    }
};

module.exports = { isValidEmail,tokenValidation };
