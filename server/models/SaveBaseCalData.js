const pool = require('../../server/db.js');

const saveBaseCalData = (data) => {
  getBaseFileNum()
    .then(res => saveBaseFileName(res.rows?.[0]?.['id']))
    .then(res => saveBaseCal(res.rows[0].file_name, data))
    .catch(err => console.error(err));
};

const getBaseFileNum = () => {
  const query =  `
    SELECT id FROM base_filenames ORDER BY id DESC LIMIT 1
  `;

  return pool.query(query)
};

const saveBaseFileName = (fileNum = 0) => {
  const nextFileNum = fileNum + 1;
  const query = `
    INSERT INTO base_filenames (id, file_name) VALUES($1, $2)
    RETURNING *
  `;

  return pool.query(query, [nextFileNum, `BCF${nextFileNum}`])
};

const saveBaseCal = (fileName, data) => {
  const insertQuery = `
    INSERT INTO base_cal_data(
      file_name,
      calibration_date,
      base_station_unique_id,
      sensor_unique_id,
      sensor_type,
      sensor_data
    ) VALUES($1, $2, $3, $4, $5, $6)
  `;

  data.sensors.forEach(sensor => {
    const sensorData = JSON.stringify(sensor.sensor_data);

    const query = {
      text: insertQuery,
      values: [
        fileName,
        data.calibration_date,
        data.base_station_unique_id,
        sensor.sensor_unique_id,
        sensor.sensor_type,
        sensorData
      ]
    };

    pool.query(query);
  });
};

module.exports = saveBaseCalData;