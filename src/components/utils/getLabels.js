const sensorCalLabels = [
  '1000',
  '2000',
  '3000',
  '4000',
  '5000',
  '6000',
  '7000',
  '8000',
  '9000',
  '10000'
];

const baseCalLabels = [
  '10000',
  '20000',
  '30000',
  '40000',
  '50000',
  '60000',
  '70000',
  '80000',
  '90000',
  '100000'
];

const getLabels = (sensorData) => {
  return sensorData.length < 20 ? baseCalLabels : sensorCalLabels;
};

export default getLabels;