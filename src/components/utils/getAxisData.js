const getAxisData = (sensorData) => {
  let start = sensorData['100000'] ? 10000 : 1000;
  let inc = sensorData['100000'] ? 10000 : 1000;
  let end = sensorData['100000'] ? 100001 : 10001;

  let result = {
    x: [],
    y: [],
    z: []
  };

  for (let i = start; i < end; i+= inc) {
    result.x.push(sensorData[i].x);
    result.y.push(sensorData[i].y);
    result.z.push(sensorData[i].z);
  }

  return result;
};

export default getAxisData;