const express = require('express');

var app = express();

app.get('/', (req, res) => {
  // res.status(404).send('Hello World');
  res.status(404).send({
    error: 'Page not found.',
    name: 'To do app v1.0'
  });
});
app.get('/users', (req, res) => {
  // res.status(404).send('Hello World');
  res.send([
    {
      name: 'Shovan',
      age: 23
    },
    {
      name: 'Sushil',
      age: 24
    },
    {
      name: 'Sajan',
      age: 23
    },
    {
      name: 'Swain',
      age: 40
    }
  ]);
});

app.listen(3000);

module.exports.app = app;
