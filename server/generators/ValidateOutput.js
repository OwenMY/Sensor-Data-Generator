const {sensors, baseStationIDs, algorithms, generateNumber, generateDate} = require('./Shared.js');

const genValOutput = () => {
  let output = {
    validation_date: generateDate(),
    algorithm_version: genAlgorithm(),
    base_station_unique_id: genBaseStationId(),
    sensors: genSensorData()
  };

  output.sensors.sort((a, b) => a.sensor_unique_id - b.sensor_unique_id);
  return output;
};

const genAlgorithm = () => {
  const randomIndex = generateNumber(0, 4);
  return algorithms[randomIndex];
};

const genBaseStationId = () => {
  const randomIndex = generateNumber(0, 3);
  return baseStationIDs[randomIndex];
}

const genSensorData = () => {
  const sensorCount = generateNumber(1, 12);
  let sensorsCopy = sensors.slice();
  sensorsCopy.sort(() => 0.5 - Math.random());

  let randomSensors = sensorsCopy.slice(0, sensorCount + 1);

  let result = [];

  randomSensors.forEach(sensor => {
    let newSensor = {
      sensor_unique_id: sensor.sensor_unique_id,
      accuracy: genAccuracy(),
      precision: genPrecision()
    };
    result.push(newSensor);
  });

  return result;
};

 const genAccuracy = () => {
  const float = generateNumber(.2, 1.1).toFixed(1);
  return float == 1.1 ? 5 : float;
 };

 const genPrecision = () => {
  return generateNumber(.2, .5).toFixed(1);
 };

module.exports = genValOutput;