const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config/config');
const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes');
const mongoose = require('mongoose');
const path = require('path');

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(cookieParser());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(express.static(path.join(__dirname, 'build')));

mongoose.connect(config.databaseURL)
  .then(() => console.log('Connected to database')).catch(error => console.log(error));
  
app.use(express.json());

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use('/auth', authRoutes);
app.use('/project', projectRoutes);
app.use('/task', taskRoutes);

module.exports = app;