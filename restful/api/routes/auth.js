const express = require("express");
const router = express.Router();
const AuthController = require('../controllers/auth');

router.post('/signup', AuthController.signup_user);

router.post('/signin', AuthController.signin_user);

module.exports = router;