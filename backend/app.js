const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config/config');
const authRoutes = require('./routes/authRoutes');
const pinRoutes = require('./routes/pinRoutes');
const mongoose = require('mongoose');

app.use(
  cors({
    origin: config.PORT,
    methods:['GET','POST'],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(bodyParser.urlencoded({
  extended: true,
}));

mongoose.connect(config.databaseURL)
  .then(() => console.log('Connected to database'));
  
app.use(express.json());

app.use('/', authRoutes);
app.use('/pin', pinRoutes);

module.exports = app;