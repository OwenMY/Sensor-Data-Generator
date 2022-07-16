const getAxisData = (sensorData) => {
  let start = sensorData.length < 20 ? 0 : 1000;
  let inc = sensorData.length < 20 ? 1 : 1000;
  let end = sensorData.length < 20 ? 10 : 10001;

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