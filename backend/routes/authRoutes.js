const router = require('express').Router();
const authController = require('../controller/authController');
const validateServices = require('../utils/validate');

router.post('/login', validateServices.validateLoginCredentials, authController.login);
router.post('/signup', validateServices.validateSignUpCredentials, authController.signUp);
router.post('/logout', authController.logout);

module.exports = router;