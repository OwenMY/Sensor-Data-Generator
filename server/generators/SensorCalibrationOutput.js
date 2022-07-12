const {generateNumber} = require('./Shared.js');

const genSensorOutput = (calFile) => {
  let newDate = new Date();
  let stringDate = newDate.toISOString();
  let regexp = /(\d{4}-\d{2}-\d{2})/g;
  let date = stringDate.match(regexp);

  let output = {
    calibration_file: calFile.calibration_file,
    generation_date: date[0],
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