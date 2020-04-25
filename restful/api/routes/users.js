const express = require("express");
const router = express.Router();
const UserController = require('../controllers/users');

router.get('/match/:email', UserController.get_matching_user);

module.exports = router;