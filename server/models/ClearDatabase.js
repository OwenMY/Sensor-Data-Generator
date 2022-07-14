const pool = require('../../server/db.js');

const clearDatabase = () => {
  const queries = {
    baseData: 'DELETE FROM base_cal_data WHERE  sensor_unique_id >= 1;',
    baseFiles: 'DELETE FROM base_filenames WHERE id >= 1;',
    sensorData: 'DELETE FROM sensor_cal_data WHERE sensor_unique_id >= 1;',
    sensorFiles: 'DELETE FROM sensor_filenames WHERE id >=1;',
    sensorOutput: 'DELETE FROM sensor_output_data WHERE sensor_unique_id >= 1;',
    outputFiles: 'DELETE FROM output_filenames WHERE id >= 1;',
    valData: 'DELETE FROM validate_system_data WHERE sensor_unique_id >= 1;',
    valFiles: 'DELETE FROM validate_filenames WHERE id >= 1;'
  };

  pool.query(queries.baseData)
    .then(() => pool.query(queries.baseFiles))
    .then(() => pool.query(queries.sensorData))
    .then(() => pool.query(queries.sensorFiles))
    .then(() => pool.query(queries.sensorOutput))
    .then(() => pool.query(queries.outputFiles))
    .then(() => pool.query(queries.valData))
    .then(() => pool.query(queries.valFiles))
    .then(() => {
      const date = new Date();
      console.log(`Database successfully cleared on ${date}`);
    })
    .catch(err => console.error(`Database Failed to Clear`, err));
};

module.exports = clearDatabase;