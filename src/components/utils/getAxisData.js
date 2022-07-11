const getAxisData = (sensorData) => {
  let result = {
    x: [],
    y: [],
    z: []
  };

  for (let i = 1000; i < 10001; i+= 1000) {
    result.x.push(sensorData[i].x);
    result.y.push(sensorData[i].y);
    result.z.push(sensorData[i].z);
  }
  console.log(result)
  return result;
};

export default getAxisData;