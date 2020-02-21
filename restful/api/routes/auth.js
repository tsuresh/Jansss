const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const AuthController = require("../controllers/auth");
const bcrypt = require("bcrypt");

const user = require("../models/user");

router.post("/signup", AuthController.signup_user);

router.post("/signin", AuthController.signin_user);

module.exports = router;
