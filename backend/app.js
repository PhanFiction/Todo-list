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

app.use(
  cors({
    origin: `http://localhost:${config.CLIENT_PORT}`,
    methods: ['Get', 'Post', 'Put', 'Delete'],
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
app.use('/project', projectRoutes);
app.use('/task', taskRoutes);

module.exports = app;