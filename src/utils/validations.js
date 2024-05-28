const z = require('zod');

const emailValidation = z.string().email({
  required_error: 'Email is required.',
  invalid_type_error: 'Email is invalid.',
});

module.exports = { emailValidation };
