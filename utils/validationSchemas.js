const yup = require('yup');

module.exports.CONTACTS_CREATION_VALIDATION_SCHEMA = yup.object({
  name: yup.string().trim().min(2).max(32).required(),
  telNumber: yup
    .string()
    .length(13)
    .matches(
      /^\+\d{12}$/,
      'Tel number must correspond format +XX XXX XXX XX XX'
    )
    .required(),
  birthday: yup.date().max(new Date()),
});
