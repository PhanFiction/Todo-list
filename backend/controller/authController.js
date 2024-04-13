const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const Project = require('../models/Project');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

exports.login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(error => error.msg);
    return res.status(401).json({
      errors: errorMessages
    });
  };
  
  const { username, password } = req.body;
  const user = await User.findOne({username});
  // compare password from body and db
  const passwordCorrect = (user) === null ? false : await bcrypt.compare(password, user.passwordHash); 

  // if user not found, return error of 401 
  if(!(user && passwordCorrect)) return res.status(401).send({error: "incorrect information"});

  const userForToken = {
    username: user.username,
    id: user._id,
  };
  const oneDay = 24 * 60 * 60 * 1000;
  
  try {
    const token = jwt.sign(userForToken, config.SECRET_KEY);
    res
      .cookie('authToken', token, { oneDay, httpOnly: false })
      .status(201)
      .send({success: 'logged in successfully', redirectURL: '/', token});
  } catch(error) {
    res.send({'error': error})
  }
};

exports.signUp = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(error => error.msg);
    return res.status(401).json({
      errors: errorMessages
    });
  }

  const { username, password } = req.body;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

   // create new user and store password hash
  const user = new User({
    username,
    passwordHash,
    tasks: [],
  });

  const project = new Project({
    title: 'Inbox',
    creator: user._id,
    tasks: [],
  });

  try {
    user.projects.push(project._id);
    await user.save();
    await project.save();
    res.status(201).send({success: 'created account successfully', redirectURL: '/login'});
  } catch(error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
};

exports.logout = async (req, res) => {
  try {
    res.clearCookie('authToken').send({success: 'successly logged out', redirectURL: '/login'});
  } catch(error) {
    res.send({error: 'unable to logout'});
  }
};