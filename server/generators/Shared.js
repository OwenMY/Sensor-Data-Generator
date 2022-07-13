const sensors = [
  {sensor_unique_id: 1, sensor_type: 'MK001'},
  {sensor_unique_id: 2, sensor_type: 'MK002'},
  {sensor_unique_id: 3, sensor_type: 'MK003'},
  {sensor_unique_id: 4, sensor_type: 'MK004'},
  {sensor_unique_id: 5, sensor_type: 'MK005'},
  {sensor_unique_id: 6, sensor_type: 'MK006'},
  {sensor_unique_id: 7, sensor_type: 'MK007'},
  {sensor_unique_id: 8, sensor_type: 'MK008'},
  {sensor_unique_id: 9, sensor_type: 'MK009'},
  {sensor_unique_id: 10, sensor_type: 'MK010'},
  {sensor_unique_id: 11, sensor_type: 'MK011'},
  {sensor_unique_id: 12, sensor_type: 'MK012'}
];

const baseStationIDs = ['BK001', 'BK002', 'BK003', 'BK004'];

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