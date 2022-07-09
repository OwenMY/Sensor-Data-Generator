const genSensorOutput = (calFile) => {
  let output = {
    calibration_file: calFile.name,
    generation_date: new Date(),
    sensors: formatSensors(calFile.sensors)
  };

  return output;
};

const formatSensors = (sensors) => {
  //
};

module.exports = genSensorOutput;