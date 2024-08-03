const { referrerBodyValidation } = require('../utils/validations');

const validateBody = (req, res, next, data) => {
  const body = req.body;

  try {
    referrerBodyValidation.parse(body);
    next();
  } catch (error) {
    res.status(422).json({ data });
  }
};

module.exports = { validateBody };
