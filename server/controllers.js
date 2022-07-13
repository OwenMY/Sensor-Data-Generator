const genSensorCalData = require('./generators/SensorCalibrationData.js');
const genBaseCalData = require('./generators/BaseStationCalibrationData.js');
const genSensorOutput = require('./generators/SensorCalibrationOutput.js');
const genValOutput = require('./generators/ValidateOutput.js');
const saveSensorCalData = require('./models/SaveSensorCalData.js');
const saveBaseCalData = require('./models/SaveBaseCalData.js');
const saveSensorOutput = require('./models/SaveSensorOutput.js');
const saveValidationOutput = require('./models/SaveValidationOutput.js');

const getSensorCalData = (req, res) => {
  let data = genSensorCalData();
  saveSensorCalData(res, data);
};

const postSensorCalOutput = (req, res) => {
  let data = genSensorOutput(req.body);
  saveSensorOutput(data);
  res.send(data);
};

const getBaseCalData = (req, res) => {
  let data = genBaseCalData();
  saveBaseCalData(data);
  res.send(data);
};

const getPerformanceEvalOutput = (req, res) => {
  let data = genValOutput();
  saveValidationOutput(data);
  res.send(data);
};

const getSearchQuery = (req, res) => {
  //To-Do
};

module.exports = {
  getBaseCalData,
  getPerformanceEvalOutput,
  getSensorCalData,
  postSensorCalOutput,
  getSearchQuery
};