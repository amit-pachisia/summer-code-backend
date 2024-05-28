const { emailValidation } = require('../utils/validations');

const isValidEmail = (req, res, next, data) => {
  const { email } = req.body;
  try {
    emailValidation.parse(email);
    next();
  } catch (error) {
    res.status(422).json({ data });
  }
};

module.exports = { isValidEmail };
