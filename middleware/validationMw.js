const {
  CONTACTS_CREATION_VALIDATION_SCHEMA,
} = require('../utils/validationSchemas');

module.exports.validateContactOnCreate = async (req, res, next) => {
  const { body } = req;
  try {
    validatedContact = await CONTACTS_CREATION_VALIDATION_SCHEMA.validate(body);
  } catch (err) {
    return res.status(422).send('Validation Error');
  }
  req.body = validatedContact;
  next();
};
