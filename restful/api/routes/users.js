const express = require("express");
const router = express.Router();
const UserController = require('../controllers/users');
const authorize = require("../middleware/check-auth");

router.get('/match/:id', authorize, UserController.get_matching_user);

router.put('/match/update/:id', authorize, UserController.update_matching_user);

module.exports = router;