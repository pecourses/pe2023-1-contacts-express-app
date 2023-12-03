const express = require('express');
const {
  createContact,
  getContacts,
  getContactById,
  updateContactById,
  deleteContactById,
} = require('./controllers/contactsController');

const {
  validateContactOnCreate,
  validateContactOnUpdate,
} = require('./middleware/validationMw');

const {
  errorHandler,
  validationErrorHandler,
} = require('./middleware/errorHandlers');

const app = express();

app.use(express.json());

app.post('/contacts', validateContactOnCreate, createContact);
app.get('/contacts', getContacts);
app.get('/contacts/:id', getContactById);
app.patch('/contacts/:id', validateContactOnUpdate, updateContactById);
app.delete('/contacts/:id', deleteContactById);

app.use(validationErrorHandler, errorHandler);

module.exports = app;
