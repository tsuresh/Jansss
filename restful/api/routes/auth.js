const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth");

router.post("/user/signup", AuthController.signup_user);

router.post("/user/signin", AuthController.signin_user);

router.post("/vendor/signup", AuthController.signup_vendor);

router.post("/vendor/signin", AuthController.signin_vendor);

module.exports = router;
