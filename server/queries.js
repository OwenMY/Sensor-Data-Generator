const insertSensorCalDataQuery = `
  INSERT INTO sensor_cal_data(
    file_name,
    calibration_date,
    sensor_unique_id,
    sensor_type,
    sensor_data
  ) VALUES($1, $2, $3, $4, $5)
`;

const getSensorCalID =  `
  SELECT id FROM sensor_filename ORDER BY id DESC LIMIT 1
`;

const saveSensorID = `
  INSERT INTO sensor_filename (id, file_name) VALUES($1, $2)
  RETURNING *
`;

module.exports = {
  insertSensorCalDataQuery,
  getSensorCalID,
  saveSensorID
};