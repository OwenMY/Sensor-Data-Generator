const express = require('express');
const router = express.Router();
const controllers = require('./controllers.js');

router.get('/sensor-calibration-data', controllers.getSensorCalData);

router.get('/base-calibration-data', controllers.getBaseCalData);

router.post('/sensor-calibration-output', controllers.postSensorCalOutput);

router.get('/performance-evaluation-output', controllers.getPerformanceEvalOutput);

router.get('/search', controllers.getSearchQuery);

module.exports = router;
