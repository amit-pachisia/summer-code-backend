const z = require('zod');

const emailValidation = z.string().email({
  required_error: 'Email is required.',
  invalid_type_error: 'Email is invalid.',
});

const referrerBodyValidation = z.object({
  firstName: z.string(),
  email: z.string().email(),
  referralCode: z.number(),
  jobTitle: z.string(),
  companyName: z.string(),
});

module.exports = { emailValidation, referrerBodyValidation };
