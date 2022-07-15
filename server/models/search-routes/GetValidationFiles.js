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
      vsd.validation_date >= ${dollarSigns.shift()}
      AND vsd.validation_date <= ${dollarSigns.shift()}
      `;
    } else {
      dateQuery = `vsd.validation_date = ${dollarSigns.shift()}`;
    }

    result+= dateQuery;
  }

  if (data.hasOwnProperty('sensor')) {
    if (dollarSigns[0] !== '$1') result+= 'AND '
    result+= `vsd.sensor_unique_id = ${dollarSigns.shift()}`
  }

  if (data.hasOwnProperty('algorithm')) {
    if (dollarSigns[0] !== '$1') result+= 'AND '
    result+= `vsd.algorithm_version = ${dollarSigns.shift()}`
  }

  if (data.hasOwnProperty('base')) {
    if (dollarSigns[0] !== '$1') result+= 'AND '
    result+= `vsd.base_station_unique_id = ${dollarSigns.shift()}`
  }

  if (data.hasOwnProperty('precision')) {
    if (dollarSigns[0] !== '$1') result+= 'AND '
    result+= `vsd.precision <= ${dollarSigns.shift()}`
  }

  if (data.hasOwnProperty('accuracy')) {
    if (dollarSigns[0] !== '$1') result+= 'AND '
    result+= `vsd.accuracy <= ${dollarSigns.shift()}`
  }

  return result;
};

const fileNamesOnlyQuery = `
  SELECT
   ARRAY_AGG(
      DISTINCT JSONB_BUILD_OBJECT(
        'file_name', file_name,
        'validation_date', validation_date,
        'algorithm_version', algorithm_version,
        'base_station_unique_id', base_station_unique_id
      )
    )
  FROM validate_filenames;
`;

const queryValidationFiles = (data) => {
  let dollarSignQuery = getDollarSigns(data);

  let query = !dollarSignQuery.length ? fileNamesOnlyQuery : `
    SELECT DISTINCT
      ARRAY_AGG(
        DISTINCT JSONB_BUILD_OBJECT(
          'file_name', vsd.file_name,
          'validation_date', vsd.validation_date,
          'algorithm_version', vsd.algorithm_version,
          'base_station_unique_id', vsd.base_station_unique_id
        )
      )
    FROM validate_filenames AS vf FULL JOIN validate_system_data AS vsd USING (file_name)
    WHERE
      ${dollarSignQuery}
  `;

  let params = [];

  if (data.hasOwnProperty('dates')) params.push(...data.dates);
  if (data.hasOwnProperty('sensor')) params.push(convertSensors(data.sensor));
  if (data.hasOwnProperty('algorithm')) params.push(data.algorithm);
  if (data.hasOwnProperty('base')) params.push(data.base);
  if (data.hasOwnProperty('precision')) params.push(Number(data.precision.slice(-3)));
  if (data.hasOwnProperty('accuracy')) params.push(Number(data.accuracy.slice(-3)));
  return !dollarSignQuery.length ? pool.query(query) : pool.query(query, params)
};

module.exports = queryValidationFiles;