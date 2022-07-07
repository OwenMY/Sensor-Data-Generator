const genSensorCalData = require('../generators/SensorCalibrationData.js');

const getSensorCalData = (req, res) => {
  let data = genSensorCalData();
  res.send(data);
};

const getSensorCalOutput = (req, res) => {
  //To-Do
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