const express = require('express');
const router = express.Router();
const cycleController = require('../controllers/cycleController');

router.post('/log', cycleController.logCycle);

module.exports = router;
