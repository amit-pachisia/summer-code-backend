const jwt = require('jsonwebtoken');
const hashUtils = require('../utils/hashUtils');
const User = require('../models/profileModel');

const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }
    let hashedPassword = await hashUtils.hashPassword(password);
    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    await user.save();
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '30d' }
    );
    res.status(200).json({
      message: 'User registered successfully',
      token,
      firstName,
      lastName,
      email,
    });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Look up in the db to check if the provided email exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Checking the password provided is same as the password provided during registering
    const isPasswordValid = await hashUtils.comparePassword(
      password,
      user.password
    );

    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, email }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });
    res.json({ token, data: { email }, message: 'User found' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { register, login };
