/* eslint-disable no-case-declarations */
const pool = require('../../server/db.js');

const searchSensorData = (data) => {
  switch (data.fileType) {
    case 'Sensor Calibration':
      let sensorCalDataQuery = `
        SELECT
          ARRAY_AGG(
            JSONB_BUILD_OBJECT(
              'sensor_data', scd.sensor_data
            )
          ) FROM
          sensor_cal_data AS scd
          WHERE
            scd.file_name = $1
            AND scd.sensor_unique_id = $2;
      `;

      return pool.query(sensorCalDataQuery, [data.file_name, data.sensor_unique_id])
    case 'Sensor Calibration Output':
      let sensorOutputDataQuery = `
      SELECT
        ARRAY_AGG(
          JSONB_BUILD_OBJECT(
            'calibration_parameters', sod.calibration_parameters
          )
        ) FROM
        sensor_output_data AS sod
        WHERE sod.file_name = $1
        AND sod.sensor_unique_id = $2;
     `;

      return pool.query(sensorOutputDataQuery, [data.file_name, data.sensor_unique_id])
    case 'Base Calibration':
      let baseSensorDataQuery = `
      SELECT
        ARRAY_AGG(
          JSONB_BUILD_OBJECT(
            'sensor_data', bcd.sensor_data
          )
        ) FROM
        base_cal_data AS bcd
        WHERE
          bcd.file_name = $1
          AND bcd.sensor_unique_id = $2;
      `;

      return pool.query(baseSensorDataQuery, [data.file_name, data.sensor_unique_id])
    default:
      return 'Invalid File Type';
  }
};

module.exports = searchSensorData;