const querySensorCalSensors = require('./search-sensor-routes/GetSensorCalSensors.js');
const queryCalOutputSensors = require('./search-sensor-routes/GetBaseCalSensors.js');
const queryBaseCalSensors = require('./search-sensor-routes/GetCalOutputSensors.js');
const queryValidationSensors = require('./search-sensor-routes/GetValidationSensors.js');

const searchSensorRoutes = (data) => {
  switch (data.fileType) {
    case 'Sensor Calibration':
      return querySensorCalSensors(data);
    case 'Sensor Calibration Output':
      return queryCalOutputSensors(data);
    case 'Base Calibration':
      return queryBaseCalSensors(data);
    case 'Performance Validation':
      return queryValidationSensors(data);
    default:
      return 'Invalid File Type';
  }
};

module.exports = searchSensorRoutes;