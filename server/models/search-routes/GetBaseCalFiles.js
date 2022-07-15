/* eslint-disable no-prototype-builtins */
const pool = require('../../../server/db.js');

const dollars = ['$1', '$2', '$3'];

const getDollarSigns = (data) => {
  let result = '';
  let dollarSigns = dollars.slice();

  if (data.hasOwnProperty('dates')) {
    let dateQuery = '';

    if (data.dates.length === 2) {
      dateQuery = `
      bcd.calibration_date >= ${dollarSigns.shift()}
      AND bcd.calibration_date <= ${dollarSigns.shift()}
      `;
    } else {
      dateQuery = `bcd.calibration_date = ${dollarSigns.shift()}`;
    }

    result+= dateQuery;
  }

  if (data.hasOwnProperty('base')) {
    if (dollarSigns[0] !== '$1') result+= 'AND '
    result+= `bcd.base_station_unique_id = ${dollarSigns.shift()}`
  }

  return result;
};

const fileNamesOnlyQuery = `
  SELECT
   ARRAY_AGG(
      DISTINCT JSONB_BUILD_OBJECT(
        'file_name', bcd.file_name,
        'calibration_date', bcd.calibration_date
      )
    )
  FROM base_cal_data AS bcd;
`;

const queryBaseCalFiles = (data) => {
  let dollarSignQuery = getDollarSigns(data);

  let query = !dollarSignQuery.length ? fileNamesOnlyQuery : `
    SELECT DISTINCT
      ARRAY_AGG(
        DISTINCT JSONB_BUILD_OBJECT(
          'file_name', bf.file_name,
          'calibration_date', bcd.calibration_date
        )
      )
    FROM base_filenames AS bf FULL JOIN base_cal_data AS bcd USING (file_name)
    WHERE
      ${dollarSignQuery}
  `;

  let params = [];

  if (data.hasOwnProperty('dates')) params.push(...data.dates);
  if (data.hasOwnProperty('base')) params.push(data.sensor);
  return !dollarSignQuery.length ? pool.query(query) : pool.query(query, params)
};

module.exports = queryBaseCalFiles;