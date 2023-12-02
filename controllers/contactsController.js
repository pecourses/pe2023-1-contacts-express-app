const Contact = require('./../models/contact');

module.exports.createContact = (req, res) => {
  const { body } = req;

  const createdContact = Contact.createContact(body);

  res.status(201).send(createdContact);
};

module.exports.getContacts = (req, res) => {
  res.status(200).send('result');
};

module.exports.getContactById = (req, res) => {};

module.exports.updateContactById = (req, res) => {};

module.exports.deleteContactById = (req, res) => {};
