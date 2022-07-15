const pool = require('../../server/db.js');

const saveValidationOutput = (data) => {
  getFileNum()
    .then(res => saveFileName(res.rows?.[0]?.['id']))
    .then(res => saveOutput(res.rows[0].file_name, data))
    .catch(err => console.error(err));
};

const getFileNum = () => {
  const query =  `
    SELECT id FROM validate_filenames ORDER BY id DESC LIMIT 1
  `;

  return pool.query(query)
};

const saveFileName = (fileNum = 0) => {
  const query = `
    INSERT INTO validate_filenames (id, file_name) VALUES($1, $2)
    RETURNING *
  `;

  return pool.query(query, [fileNum + 1, `VCF${fileNum + 1}`])
};

const saveOutput = (fileName, data) => {
  const insertQuery = `
    INSERT INTO validate_system_data(
      file_name,
      base_station_unique_id,
      algorithm_version,
      validation_date,
      sensor_unique_id,
      accuracy,
      precision
    ) VALUES($1, $2, $3, $4, $5, $6, $7)
  `;

  data.sensors.forEach(sensor => {
    const query = {
      text: insertQuery,
      values: [
        fileName,
        data.base_station_unique_id,
        data.algorithm_version,
        data.validation_date,
        sensor.sensor_unique_id,
        sensor.accuracy,
        sensor.precision
      ]
    };

    pool.query(query);
  });
};

module.exports = saveValidationOutput;