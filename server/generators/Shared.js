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

const baseStationIDs = ['bk001', 'bk002', 'bk003', 'bk004'];

const algorithms = ['v1.2.1', 'v1.2.2', 'v1.2.3', 'v1.2.4', 'v1.2.5'];

const generateNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

const generateDate = () => {
  let newDate = new Date();
  let stringDate = newDate.toISOString();
  let regexp = /(\d{4}-\d{2}-\d{2})/g;
  let date = stringDate.match(regexp);

  return date[0];
};

module.exports = {
  sensors,
  baseStationIDs,
  algorithms,
  generateNumber,
  generateDate
};