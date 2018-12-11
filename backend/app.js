const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const postRoutes = require('./routes/posts');

const app = express();

mongoose.connect('mongodb+srv://max:agHOsFuTHWzV01qb@mean-project-qkco1.mongodb.net/node-angular?retryWrites=true')
  .then(() => {
    console.log('Connected to the Database!!');
  })
  .catch(() => {
    console.log('Connection to the database failed.');
  });

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
  next();
})

app.use('/api/posts', postRoutes);

module.exports = app;
