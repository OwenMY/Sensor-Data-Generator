const genSensorCalData = require('../generators/SensorCalibrationData.js');
const genBaseCalData = require('../generators/BaseStationCalibrationData.js');
const saveSensorCalData = require('./models/SaveSensorCalData.js');
const saveBaseCalData = require('./models/SaveBaseCalData.js');

const getSensorCalData = (req, res) => {
  let data = genSensorCalData();
  saveSensorCalData(data);
  res.send(data);
};

const getSensorCalOutput = (req, res) => {
  //To-Do
};

const getBaseCalData = (req, res) => {
  let data = genBaseCalData();
  saveBaseCalData(data);
  res.send(data);
};

const getPerformanceEvalOutput = (req, res) => {
  //To-Do
};

module.exports = {
  getBaseCalData,
  getPerformanceEvalOutput,
  getSensorCalData,
  getSensorCalOutput
};