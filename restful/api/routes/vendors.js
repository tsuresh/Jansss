const express = require("express");
const router = express.Router();
const VendorsController = require('../controllers/vendors');
const authorize = require("../middleware/check-auth");


router.get('/all', VendorsController.get_all_vendors);

router.get('/match/:id', authorize, VendorsController.get_matching_vendors);

router.get('/filter', VendorsController.get_vendor_filtered);

module.exports = router;