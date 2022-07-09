const express = require('express');
const router = express.Router();
const controllers = require('./controllers.js');

router.get('/SensorCalibrationData', controllers.getSensorCalData);

router.get('/BaseCalibrationData', controllers.getBaseCalData);

router.get('/SensorCalibrationOutput', controllers.getSensorCalOutput);

router.get('/PerformanceEvalutionOutput', controllers.getPerformanceEvalOutput);

router.get('/Search', controllers.getSearchQuery);

module.exports = router;
