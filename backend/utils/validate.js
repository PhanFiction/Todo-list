const { check } = require('express-validator');

exports.signUpCredentials = [
  check('username')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('Username can not be empty!')
    .bail()
    .isLength({min: 3})
    .withMessage('Minimum 3 characters required!')
    .bail(),
  check('password')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('Password cannot be empty!')
    .bail()
    .isLength({min: 3})
    .withMessage('Minimum 3 characters required!')
    .bail(),
];

exports.loginCredentials = [
  check('username')
  .trim()
  .escape()
  .not()
  .isEmpty()
  .withMessage('User name can not be empty!')
  .bail()
  .isLength({min: 3})
  .withMessage('Minimum 3 characters required!')
  .bail(),
check('password')
  .trim()
  .escape()
  .not()
  .isEmpty()
  .withMessage('Password cannot be empty!')
  .bail()
  .isLength({min: 3})
  .withMessage('Minimum 3 characters required!')
  .bail(),
]