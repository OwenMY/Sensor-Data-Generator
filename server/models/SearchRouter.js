const querySensorCalFiles = require('./search-routes/GetSensorCalFiles.js');
const queryBaseCalFiles = require('./search-routes/GetBaseCalFiles.js');
const queryCalOutputFiles = require('./search-routes/GetCalOutputFiles.js');
const queryValidationFiles = require('./search-routes/GetValidationFiles.js');

const searchRoutes = (data) => {
  switch (data.fileType) {
    case 'Sensor Calibration':
      return querySensorCalFiles(data);
    case 'Sensor Calibration Output':
      return queryCalOutputFiles(data);
    case 'Base Calibration':
      return queryBaseCalFiles(data);
    case 'Performance Validation':
      return queryValidationFiles(data);
    default:
      return querySensorCalFiles(data);
  }
};

module.exports = searchRoutes;