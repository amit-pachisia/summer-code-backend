const { EMAIL_REGEX } = require('../utils/constants');

function isValidEmail(req, res, next, data) {
  const { email } = req.body;
  if (EMAIL_REGEX.test(email)) next();
  else return res.status(422).json({ data });
}

module.exports = { isValidEmail };
