const router = require('express').Router();
const authController = require('../controller/authController');
const validateServices = require('../utils/validate');

router.post('/login', validateServices.loginCredentials, authController.login);
router.post('/signup', validateServices.signUpCredentials, authController.signUp);
router.post('/logout', authController.logout);
router.get('/', authController.home);

module.exports = router;