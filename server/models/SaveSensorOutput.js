const pool = require('../../server/db.js');

const saveSensorOutput = (output) => {
  getFileNum()
    .then(res => saveFileName(res.rows?.[0]?.['id']))
    .then(res => saveOutput(res.rows[0].file_name, output))
    .catch(err => console.error(err));
};

const getFileNum = () => {
  const query =  `
    SELECT id FROM output_filenames ORDER BY id DESC LIMIT 1
  `;

  return pool.query(query)
};

const saveFileName = (fileNum = 0) => {
  const query = `
    INSERT INTO output_filenames (id, file_name) VALUES($1, $2)
    RETURNING *
  `;

  return pool.query(query, [fileNum + 1, `OCF${fileNum + 1}`])
};

const saveOutput = (fileName, output) => {
  const insertQuery = `
    INSERT INTO sensor_output_data(
      calibration_file,
      algorithm_version,
      generation_date,
      sensor_unique_id,
      calibration_parameters
    ) VALUES($1, $2, $3, $4, $5)
  `;

  output.sensors.forEach(sensor => {
    const sensorData = JSON.stringify(sensor.calibration_parameters);

    const query = {
      text: insertQuery,
      values: [
        fileName,
        output.algorithm_version,
        output.generation_date,
        sensor.sensor_unique_id,
        sensorData
      ]
    };

    pool.query(query);
  });
};

module.exports = saveSensorOutput;