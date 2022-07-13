import React from 'react';

const FileOptions = () => {
  return (
    <>
     <label htmlFor="File Type">File Type</label>
      <select className="file-type" name="File Type">
        <option value="Type" selected>Choose Type</option>
        <option value="Sensor Calibration"> Sensor Calibration</option>
        <option value="Sensor Calibration Output">Sensor Calibration Output</option>
        <option value="Base Calibration">Base Calibration</option>
        <option value="Performance Validation">Performance Validation</option>
      </select>
    </>
  );
};

export default FileOptions;