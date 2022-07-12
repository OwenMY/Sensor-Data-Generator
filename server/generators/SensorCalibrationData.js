const {sensors, generateNumber} = require('./Shared.js');

const generateSensorData = () => {
  let sampleSize = Math.floor(generateNumber(10000, 15000));
  let timeSeries = [];

  for (let i = 0; i < sampleSize + 1; i++) {
    let g = generateNumber;

    let coord = {
      time: ('' + i).padStart(5, '0'),
      x: Number(g(0, 25).toFixed(5)),
      y: Number(g(0, 25).toFixed(5)),
      z: Number(g(0, 25).toFixed(5))
    };

    timeSeries.push(coord);
  }

  return timeSeries;
};

const getSensors = (qty) => {
  let sensorsCopy = sensors.slice();
  sensorsCopy.sort(() => 0.5 - Math.random());

  let randomSensors = sensorsCopy.slice(0, qty + 1);
  randomSensors.forEach(sensor => {
    sensor['sensor_data'] = generateSensorData();
  });

  return randomSensors;
};

const genSensorCalData = () => {
  const sensorQTY = generateNumber(4, 12);
  let newDate = new Date();
  let stringDate = newDate.toISOString();
  let regexp = /(\d{4}-\d{2}-\d{2})/g;
  let date = stringDate.match(regexp);

  const newData = {
    calibration_date: date[0],
    sensors: getSensors(sensorQTY)
  };

  return newData;
};

module.exports = genSensorCalData;