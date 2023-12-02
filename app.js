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

const app = express();

app.use(express.json());

app.post('/contacts', validateContactOnCreate, createContact);
app.get('/contacts', getContacts);
app.get('/contacts/:id', getContactById);
app.patch('/contacts/:id', validateContactOnUpdate, updateContactById);
app.delete('/contacts/:id', deleteContactById);

module.exports = app;

app.get(
  '/',
  (req, res, next) => {
    console.log('step 1 :>> ');
    next();
  },
  (req, res) => {
    console.log('step 2 :>> ');
    res.status(200).send('result');
  }
);

// // GET http://localhost:5000/users/5?results=10&page=2

// // :id - параметр маршрут
// // results=10&page=2 - параметри рядка запиту

// app.get('/users/:id', (req, res) => {
//   console.log(req.params.id);
//   console.log(req.query);
// });
// GET http://localhost:5000/notebooks?brand=apple&color=gold
// // отримати з запиту: назву сутності, колір і назву бренду

// app.get('/:entity', (req, res) => {
//   console.log(req.params.entity);
//   console.log(req.query.color);
//   console.log(req.query.brand);
// });
