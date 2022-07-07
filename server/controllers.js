const genSensorCalData = require('../generators/SensorCalibrationData.js');
const genBaseCalData = require('../generators/BaseStationCalibrationData.js');

const getSensorCalData = (req, res) => {
  let data = genSensorCalData();
  res.send(data);
};

const getSensorCalOutput = (req, res) => {
  let data = genBaseCalData();
  res.send(data);
};

const getBaseCalData = (req, res) => {
  //To-Do
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