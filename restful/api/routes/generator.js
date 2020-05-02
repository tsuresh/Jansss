const express = require("express");
const router = express.Router();
const GeneratorController = require('../controllers/generator');
const authorize = require("../middleware/check-auth");

router.post('/competitors', authorize, GeneratorController.get_competitors);

router.post('/plan', authorize, GeneratorController.get_plan);

router.post('/geocode/:address', GeneratorController.get_geocode);

module.exports = router;