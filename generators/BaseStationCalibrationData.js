const baseSensors = [
  {sensor_unique_id: 100, sensor_type: 'bk100'},
  {sensor_unique_id: 200, sensor_type: 'bk200'},
  {sensor_unique_id: 300, sensor_type: 'bk300'}
];

const baseStationIDs = [1, 2, 3, 4];

const generateNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

const genSensorData = (sensors) => {
  let sensorsCopy = sensors.slice();

  sensors.forEach(sensor => {
    let sampleSize = generateNumber(100000, 120000);
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

    sensor['sensor_data'] = timeSeries;
  });

  return sensorsCopy;
};

const genBaseCalData = () => {
  let randomID = generateNumber(1, 4);

  let newData = {
    calibration_date: new Date(),
    base_station_unique_id: baseStationIDs[randomID],
    sensors: genSensorData(baseSensors)
  };

  return newData;
};

console.log(genBaseCalData());

module.exports = genBaseCalData;