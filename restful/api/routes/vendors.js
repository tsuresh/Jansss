const express = require("express");
const router = express.Router();
const VendorsController = require('../controllers/vendors');

router.post('/all', VendorsController.get_all_vendors);

router.post('/matching', VendorsController.get_matching_vendors);

module.exports = router;