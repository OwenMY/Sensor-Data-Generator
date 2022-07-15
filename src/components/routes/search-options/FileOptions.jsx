/* eslint-disable react/prop-types */
import React from 'react';

const FileOptions = ({dispatch}) => {
  return (
    <>
     <label htmlFor="File Type">File Type</label>
      <select
        onChange={(e) => dispatch({type: 'file type', payload: e.target.value})}
        className="dropdown"
        name="File Type"
      >
        <option value="Choose Type" defaultValue>Choose Type</option>
        <option value="Sensor Calibration"> Sensor Calibration</option>
        <option value="Sensor Calibration Output">Sensor Calibration Output</option>
        <option value="Base Calibration">Base Calibration</option>
        <option value="Performance Validation">Performance Validation</option>
      </select>
    </>
  );
};

export default FileOptions;