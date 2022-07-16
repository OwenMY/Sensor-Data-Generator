const {sensors, baseStationIDs, generateNumber, generateDate} = require('./Shared.js');

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

  for (let i = 10000; i < sampleSize + 1; i+=10000) {
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

  let newData = {
    calibration_date: generateDate(),
    base_station_unique_id: baseStationIDs[randomIndex],
    sensors: getSensors()
  };

  return newData;
};

module.exports = genBaseCalData;