/* eslint-disable no-case-declarations */
const pool = require('../../server/db.js');

const searchSensorLists = (data) => {
  switch (data.fileType) {
    case 'Sensor Calibration':
      let sensorCalListQuery = `
        SELECT
          ARRAY_AGG(
            JSONB_BUILD_OBJECT(
              'sensor_unique_id', scd.sensor_unique_id,
              'sensor_type', scd.sensor_type
            )
          ) FROM
          sensor_cal_data AS scd WHERE file_name = $1;
      `;

      return pool.query(sensorCalListQuery, [data.file_name])
    case 'Sensor Calibration Output':
      let sensorOutputListQuery = `
      SELECT
        ARRAY_AGG(
          JSONB_BUILD_OBJECT(
            'sensor_unique_id', sod.sensor_unique_id
          )
        ) FROM
        sensor_output_data AS sod WHERE file_name = $1;
    `;

    return pool.query(sensorOutputListQuery, [data.file_name])
    case 'Base Calibration':
      let baseSensorListQuery = `
      SELECT
        ARRAY_AGG(
          JSONB_BUILD_OBJECT(
            'sensor_unique_id', bcd.sensor_unique_id,
            'sensor_type', bcd.sensor_type
          )
        ) FROM
        base_cal_data AS bcd WHERE file_name = $1;
    `;

    return pool.query(baseSensorListQuery, [data.file_name])
    case 'Performance Validation':
      let validationSensorsQuery = `
      SELECT
        ARRAY_AGG(
          JSONB_BUILD_OBJECT(
            'sensor_unique_id', vsd.sensor_unique_id,
            'accuracy', vsd.accuracy,
            'precision', vsd.precision
          )
        ) FROM
        validate_system_data AS vsd WHERE file_name = $1;
    `;

    return pool.query(validationSensorsQuery, [data.file_name])
    default:
      return 'Invalid File Type';
  }
};

module.exports = searchSensorLists;