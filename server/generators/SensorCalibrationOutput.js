const generateNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

const genSensorOutput = (calFile) => {
  let newDate = new Date();
  let regexp = /(\d{4}-\d{2}-\d{2})/g;
  let date = newDate.matchAll(regexp);

  let output = {
    calibration_file: calFile.name,
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