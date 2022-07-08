const genSensorCalData = require('../generators/SensorCalibrationData.js');
const genBaseCalData = require('../generators/BaseStationCalibrationData.js');

const getSensorCalData = (req, res) => {
  let data = genSensorCalData();
  res.send(data);
};

const getSensorCalOutput = (req, res) => {
  //
};

const getBaseCalData = (req, res) => {
  let data = genBaseCalData();
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