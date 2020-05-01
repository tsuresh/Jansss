const express = require("express");
const router = express.Router();
const MailerController = require("../controllers/mailer");

router.post('/sendticket', MailerController.send_ticket);

module.exports = router;