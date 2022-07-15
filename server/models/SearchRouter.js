const querySensorCalFiles = require('./search-routes/GetSensorCalFiles.js');
const queryBaseCalFiles = require('./search-routes/GetBaseCalFiles.js');

const searchRoutes = (data) => {
  let results = [];

  switch (data.fileType) {
    case 'Sensor Calibration':
      return querySensorCalFiles(data);
    case 'Sensor Calibration Output':
      break;
    case 'Base Calibration':
      return queryBaseCalFiles(data);
    case 'Validation Output':
      break;
    default:
      return 'Invalid File Type';
  }

  return results;
};

module.exports = searchRoutes;