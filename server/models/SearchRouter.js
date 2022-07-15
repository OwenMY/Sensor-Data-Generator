const querySensorCalFiles = require('./search-routes/GetSensorCalFiles.js');
const queryBaseCalFiles = require('./search-routes/GetBaseCalFiles.js');
const queryCalOutputFiles = require('./search-routes/GetCalOutputFiles.js');

const searchRoutes = (data) => {
  switch (data.fileType) {
    case 'Sensor Calibration':
      return querySensorCalFiles(data);
    case 'Sensor Calibration Output':
      return queryCalOutputFiles(data);
    case 'Base Calibration':
      return queryBaseCalFiles(data);
    case 'Validation Output':
      break;
    default:
      return 'Invalid File Type';
  }
};

module.exports = searchRoutes;