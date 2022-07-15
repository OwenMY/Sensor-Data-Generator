const sensorTable = {
  MK001: 1,
  MK002: 2,
  MK003: 3,
  MK004: 4,
  MK005: 5,
  MK006: 6,
  MK007: 7,
  MK008: 8,
  MK009: 9,
  MK010: 10,
  MK011: 11,
  MK012: 12,
};

const convertSensors = (property) => {
  return sensorTable[property];
};

const dollars = ['$1', '$2', '$3', '$4', '$5', '$6'];

module.exports = {
  convertSensors,
  dollars
};