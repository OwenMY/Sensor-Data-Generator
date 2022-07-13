const {generateNumber, generateDate} = require('./Shared.js');

const genSensorOutput = (calFile) => {
  let output = {
    calibration_file: calFile.calibration_file,
    generation_date: generateDate(),
    algorithm_version: calFile.algorithm_version,
    sensors: formatSensors(calFile.sensors)
  };

  return output;
};

const formatSensors = (sensors) => {
  sensors.forEach(sensor => sensor['calibration_parameters'] = genParameters());
  return sensors;
};

const genParameters = () => {
  const g = generateNumber;
  return [
    [g(1, 20).toFixed(2), g(1, 20).toFixed(2), g(1, 20).toFixed(2)],
    [g(1, 20).toFixed(2), g(1, 20).toFixed(2), g(1, 20).toFixed(2)],
    [g(1, 20).toFixed(2), g(1, 20).toFixed(2), g(1, 20).toFixed(2)]
  ];
};

module.exports = genSensorOutput;