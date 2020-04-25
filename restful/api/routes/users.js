const express = require("express");
const router = express.Router();
const UserController = require('../controllers/users');
const authorize = require("../middleware/check-auth");


router.get('/match/:email', authorize, UserController.get_matching_user);

module.exports = router;