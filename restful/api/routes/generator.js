const express = require("express");
const router = express.Router();
const GeneratorController = require('../controllers/generator');

router.post('/analytics', GeneratorController.get_analytics);

router.post('/competitors', GeneratorController.get_competitors);

router.post('/plan', GeneratorController.get_plan);

module.exports = router;