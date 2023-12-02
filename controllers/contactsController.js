const Contact = require('./../models/contact');

module.exports.createContact = async (req, res) => {
  const { body } = req;

  const createdContact = Contact.createContact(body);

  res.status(201).send(createdContact);
};

module.exports.getContacts = (req, res) => {
  const { page = 1, results = 10 } = req.query;

  const foundContacts = Contact.getContacts(page, results);

  res.status(200).send(foundContacts);
};

module.exports.getContactById = (req, res) => {
  const { id } = req.params;

  const foundContact = Contact.getContactById(id);

  if (!foundContact) {
    return res.status(404).send('Contacts Not Found');
  }

  res.status(200).send(foundContact);
};

module.exports.updateContactById = (req, res) => {
  const {
    body,
    params: { id },
  } = req;

  const updatedContact = Contact.updateContact(id, body);

  if (!updatedContact) {
    return res.send(404).send('Contact Not Found');
  }

  res.status(200).send(updatedContact);
};

module.exports.deleteContactById = (req, res) => {
  const { id } = req.params;

  const deletedContact = Contact.deleteContact(id);

  if (!deletedContact) {
    return res.status(404).send('Contact Not Found');
  }

  res.status(204).send();
};
