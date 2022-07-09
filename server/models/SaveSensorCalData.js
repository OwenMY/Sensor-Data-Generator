const pool = require('../../server/db.js');

const saveSensorCalData = (data) => {
  getFileNum()
    .then(res => saveFileName(res.rows?.[0]?.['id']))
    .then(res => saveSensors(res.rows[0].file_name, data))
    .catch(err => console.error(err));
};

const getFileNum = () => {
  const query =  `
    SELECT id FROM sensor_filenames ORDER BY id DESC LIMIT 1
  `;

  return pool.query(query)
};

const saveFileName = (fileNum = 0) => {
  const query = `
    INSERT INTO sensor_filenames (id, file_name) VALUES($1, $2)
    RETURNING *
  `;

  return pool.query(query, [fileNum + 1, `SCF${fileNum + 1}`])
};

const saveSensors = (fileName, data) => {
  const insertQuery = `
    INSERT INTO sensor_cal_data(
      file_name,
      calibration_date,
      sensor_unique_id,
      sensor_type,
      sensor_data
    ) VALUES($1, $2, $3, $4, $5)
  `;

  data.sensors.forEach(sensor => {
    const sensorData = JSON.stringify(sensor.sensor_data);

    const query = {
      text: insertQuery,
      values: [
        fileName,
        data.calibration_date,
        sensor.sensor_unique_id,
        sensor.sensor_type,
        sensorData
      ]
    };

    pool.query(query);
  });
};

module.exports = saveSensorCalData;