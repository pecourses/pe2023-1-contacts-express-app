const express = require('express');

const app = express();

module.exports = app;

// GET http://localhost:5000/users/5?results=10&page=2

// :id - параметр маршрут
// results=10&page=2 - параметри рядка запиту

app.get('/users/:id', (req, res) => {
  console.log(req.params.id);
  console.log(req.query);
});
// GET http://localhost:5000/notebooks?brand=apple&color=gold
// отримати з запиту: назву сутності, колір і назву бренду

app.get('/:entity', (req, res) => {
  console.log(req.params.entity);
  console.log(req.query.color);
  console.log(req.query.brand);
});
