const getTableHeaders = (data) => {
  let headers = ['Sensor ID'];

  if (data.sensors[0].sensor_type) headers.push('Sensor Type');
  if (data.sensors[0].sensor_data) headers.push('Sensor Data');
  if (data.sensors[0].calibration_parameters) headers.push('Calibration Parameters');
  if (data.sensors[0].accuracy) headers.push('Accuracy');
  if (data.sensors[0].precision) headers.push('Precision');
}

export default getTableHeaders;