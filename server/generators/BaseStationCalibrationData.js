const {sensors, baseStationIDs, generateNumber} = require('./Shared.js');

const getSensors = () => {
  let sensorsCopy = sensors.slice();
  sensorsCopy.sort(() => 0.5 - Math.random());

  let randomSensors = sensorsCopy.slice(0, 3);
  randomSensors.forEach(sensor => {
    sensor['sensor_data'] = generateSensorData();
  });

  return randomSensors;
};

const generateSensorData = () => {
  let sampleSize = Math.round(generateNumber(100000, 120000));
  let timeSeries = [];

  for (let i = 0; i < sampleSize + 1; i++) {
    let g = generateNumber;

    let coord = {
      time: ('' + i).padStart(6, '0'),
      x: Number(g(0, 25).toFixed(5)),
      y: Number(g(0, 25).toFixed(5)),
      z: Number(g(0, 25).toFixed(5))
    };

    timeSeries.push(coord);
  }

  return timeSeries;
};

const genBaseCalData = () => {
  let randomIndex = Math.floor(generateNumber(1, 4));
  let newDate = new Date();
  let stringDate = newDate.toISOString();
  let regexp = /(\d{4}-\d{2}-\d{2})/g;
  let date = stringDate.match(regexp);

  let newData = {
    calibration_date: date[0],
    base_station_unique_id: baseStationIDs[randomIndex],
    sensors: getSensors()
  };

  return newData;
};

module.exports = genBaseCalData;