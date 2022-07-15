/* eslint-disable no-prototype-builtins */
const pool = require('../../../server/db.js');
const {dollars, convertSensors} = require('./Common.js');

const getDollarSigns = (data) => {
  let result = '';
  let dollarSigns = dollars.slice();

  if (data.hasOwnProperty('dates')) {
    let dateQuery = '';

    if (data.dates.length === 2) {
      dateQuery = `
      sod.generation_date >= ${dollarSigns.shift()}
      AND sod.generation_date <= ${dollarSigns.shift()}
      `;
    } else {
      dateQuery = `sod.generation_date = ${dollarSigns.shift()}`;
    }

    result+= dateQuery;
  }

  if (data.hasOwnProperty('sensor')) {
    if (dollarSigns[0] !== '$1') result+= 'AND '
    result+= `sod.sensor_unique_id = ${dollarSigns.shift()}`
  }

  if (data.hasOwnProperty('algorithm')) {
    if (dollarSigns[0] !== '$1') result+= 'AND '
    result+= `sod.algorithm_version = ${dollarSigns.shift()}`
  }

  return result;
};

const fileNamesOnlyQuery = `
  SELECT
   ARRAY_AGG(
      DISTINCT JSONB_BUILD_OBJECT(
        'calibration_file', calibration_file,
        'generation_date', generation_date,
        'algorithm_version', algorithm_version
      )
    )
  FROM sensor_output_data;
`;

const queryCalOutputFiles = (data) => {
  let dollarSignQuery = getDollarSigns(data);

  let query = !dollarSignQuery.length ? fileNamesOnlyQuery : `
    SELECT DISTINCT
      ARRAY_AGG(
        DISTINCT JSONB_BUILD_OBJECT(
          'calibration_file', sod.calibration_file,
          'generation_date', sod.generation_date,
          'algorithm_version', algorithm_version
        )
      )
    FROM output_filenames AS Out FULL JOIN sensor_output_data AS sod ON out.file_name = sod.calibration_file
    WHERE
      ${dollarSignQuery}
  `;

  let params = [];

  if (data.hasOwnProperty('dates')) params.push(...data.dates);
  if (data.hasOwnProperty('sensor')) params.push(convertSensors(data.sensor));
  if (data.hasOwnProperty('algorithm')) params.push(data.algorithm);
  return !dollarSignQuery.length ? pool.query(query) : pool.query(query, params)
};

module.exports = queryCalOutputFiles;