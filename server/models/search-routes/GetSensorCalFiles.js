/* eslint-disable no-prototype-builtins */
const pool = require('../../../server/db.js');
const {dollars} = require('./Common.js');

const getDollarSigns = (data) => {
  let result = '';
  let dollarSigns = dollars.slice();

  if (data.hasOwnProperty('dates')) {
    let dateQuery = '';

    if (data.dates.length === 2) {
      dateQuery = `
      scd.calibration_date >= ${dollarSigns.shift()}
      AND scd.calibration_date <= ${dollarSigns.shift()}
      `;
    } else {
      dateQuery = `scd.calibration_date = ${dollarSigns.shift()}`;
    }

    result+= dateQuery;
  }

  if (data.hasOwnProperty('sensor')) {
    if (dollarSigns[0] !== '$1') result+= 'AND '
    result+= `scd.sensor_type = ${dollarSigns.shift()}`
  }

  return result;
};

const fileNamesOnlyQuery = `
  SELECT
   ARRAY_AGG(
      DISTINCT JSONB_BUILD_OBJECT(
        'file_name', scd.file_name,
        'calibration_date', scd.calibration_date
      )
    )
  FROM sensor_cal_data AS scd;
`;

const querySensorCalFiles = (data) => {
  let dollarSignQuery = getDollarSigns(data);

  let query = !dollarSignQuery.length ? fileNamesOnlyQuery : `
    SELECT DISTINCT
      ARRAY_AGG(
        DISTINCT JSONB_BUILD_OBJECT(
          'file_name', SF.file_name,
          'calibration_date', scd.calibration_date
        )
      )
    FROM sensor_filenames AS sf FULL JOIN sensor_cal_data AS scd USING (file_name)
    WHERE
      ${dollarSignQuery}
  `;

  let params = [];

  if (data.hasOwnProperty('dates')) params.push(...data.dates);
  if (data.hasOwnProperty('sensor')) params.push(data.sensor);
  return !dollarSignQuery.length ? pool.query(query) : pool.query(query, params)
};

module.exports = querySensorCalFiles;