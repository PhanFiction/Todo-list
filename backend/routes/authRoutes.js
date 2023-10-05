const router = require('express').Router();
const authController = require('../controller/authController');
const userController = require('../controller/userController');
const validateServices = require('../utils/validate');

router.post('/login', validateServices.validateLoginCredentials, authController.login);
router.post('/signup', validateServices.validateSignUpCredentials, authController.signUp);
router.get('/users', userController.getUsers);

module.exports = router;