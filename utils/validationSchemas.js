const yup = require('yup');

const NAME_VALIDATION_SCHEMA = yup.string().trim().min(2).max(32);
const TEL_NUMBER_VALIDATION_SCHEMA = yup
  .string()
  .length(13)
  .matches(/^\+\d{12}$/, 'Tel number must correspond format +XX XXX XXX XX XX');
const BIRTHDAY_VALIDATION_SCHEMA = yup.date().max(new Date());

module.exports.CONTACT_CREATION_VALIDATION_SCHEMA = yup.object({
  name: NAME_VALIDATION_SCHEMA.required(),
  telNumber: TEL_NUMBER_VALIDATION_SCHEMA.required(),
  birthday: BIRTHDAY_VALIDATION_SCHEMA,
});

module.exports.CONTACT_UPDATING_VALIDATION_SCHEMA = yup.object({
  name: NAME_VALIDATION_SCHEMA,
  telNumber: TEL_NUMBER_VALIDATION_SCHEMA,
  birthday: BIRTHDAY_VALIDATION_SCHEMA,
  isFavourite: yup.boolean(),
});
