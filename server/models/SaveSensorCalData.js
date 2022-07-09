const pool = require('../../server/db.js');
const queries = require('../../server/queries.js');

const saveSensorCalData = (data) => {
  getFileNum()
    .then(res => saveFileName(res.rows?.[0]?.['id']))
    .then(res => saveSensors(res.rows[0].file_name, data))
    .catch(err => console.error(err));
};

const getFileNum = () => {
  return pool.query(queries.getSensorCalID)
};

const saveFileName = (fileNum = 0) => {
  return pool.query(queries.saveSensorID, [fileNum + 1, `SCF${fileNum + 1}`])
};

const saveSensors = (fileName, data) => {
  data.sensors.forEach(sensor => {
    const sensorData = JSON.stringify(sensor.sensor_data);

    const query = {
      text: queries.insertSensorCalDataQuery,
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