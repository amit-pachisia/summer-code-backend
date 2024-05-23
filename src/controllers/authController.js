const jwt = require('jsonwebtoken');
// const hashUtils = require('../utils/hashUtils');
const { JWT_SECRET, SAMPLE_USER_DATA } = require('../utils/constants');

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Look up in the db to check if the provided email exists
    // const user = await User.findOne({ email });
    // if (!user) {
    //   return res.status(400).json({ message: 'Invalid credentials' });
    // }

    // Checking the password provided is same as the password provided during registering
    // const isPasswordValid = await hashUtils.comparePassword(
    //   password,
    //   user.password
    // );
    // if (!isPasswordValid) {
    //   return res.status(400).json({ message: 'Invalid credentials' });
    // }

    const accessToken = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });
    res.json({
      accessToken,
      userinfo: SAMPLE_USER_DATA,
      msg: 'User credentials matched',
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { login };
