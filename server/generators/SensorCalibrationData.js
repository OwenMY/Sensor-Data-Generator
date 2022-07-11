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

const generateNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

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

  const newData = {
    calibration_date: new Date(),
    sensors: getSensors(sensorQTY)
  };

  return newData;
};

module.exports = genSensorCalData;