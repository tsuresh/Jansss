const express = require("express");
const router = express.Router();
const GeneratorController = require('../controllers/generator');
const authorize = require("../middleware/check-auth");

router.post('/competitors', authorize, GeneratorController.get_competitors);

router.post('/plan', authorize, GeneratorController.get_plan);

router.post('/getVendors', authorize, GeneratorController.get_vendors);

router.post('/geocode/:address', authorize, GeneratorController.get_geocode);

router.post('/user-subscription/:id', GeneratorController.get_subscription);

module.exports = router;