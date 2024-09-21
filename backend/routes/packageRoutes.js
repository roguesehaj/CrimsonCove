const express = require('express');
const router = express.Router();
const packageController = require('../controllers/packageController');

router.post('/subscribe', packageController.subscribePackage);

module.exports = router;
