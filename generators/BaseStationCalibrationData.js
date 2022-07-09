const sensors = [
  {sensor_unique_id: 1, sensor_type: 'mk001'},
  {sensor_unique_id: 2, sensor_type: 'mk002'},
  {sensor_unique_id: 3, sensor_type: 'mk003'},
  {sensor_unique_id: 4, sensor_type: 'mk004'},
  {sensor_unique_id: 5, sensor_type: 'mk005'},
  {sensor_unique_id: 6, sensor_type: 'mk006'},
  {sensor_unique_id: 7, sensor_type: 'mk007'},
  {sensor_unique_id: 8, sensor_type: 'mk008'},
  {sensor_unique_id: 9, sensor_type: 'mk009'},
  {sensor_unique_id: 10, sensor_type: 'mk010'},
  {sensor_unique_id: 11, sensor_type: 'mk011'},
  {sensor_unique_id: 12, sensor_type: 'mk012'}
];

const baseStationIDs = ['b1', 'b2', 'b3', 'b4'];

const generateNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

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

  let newData = {
    calibration_date: new Date(),
    base_station_unique_id: baseStationIDs[randomIndex],
    sensors: getSensors()
  };

  return newData;
};

module.exports = genBaseCalData;