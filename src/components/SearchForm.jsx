import React from 'react';

const SearchForm = () => {
  return (
    <div className="form-ctr">
     <label htmlFor="File Type">Choose File Type :</label>
      <select className="file-type" name="File Type">
        <option value="Type" selected>Choose Type</option>
        <option value="Sensor Calibration"> Sensor Calibration</option>
        <option value="Sensor Calibration Output">Sensor Calibration Output</option>
        <option value="Base Calibration">Base Calibration</option>
        <option value="Performance Validation">Performance Validation</option>
      </select>
      <label htmlFor="Base Station">Choose Base Station :</label>
      <select className="base-station" name="Base Station">
        <option value="Choose Base Station" selected>Base Station</option>
        <option value="b1">b1</option>
        <option value="b2">b2</option>
        <option value="b3">b3</option>
        <option value="b4">b4</option>
      </select>
      <label htmlFor="Sensor">Choose Sensor:</label>
      <select className="sensors" name="Sensor(s)">
        <option value="Choose Sensors" selected>Choose Sensors</option>
        <option value="b1">123</option>
        <option value="b2">123</option>
        <option value="b3">1234</option>
        <option value="b4">12112</option>
      </select>
      <input type="date" name="poop start" min="2022-01-01" max="2023-12-31"></input>
      <button type="submit">Search</button>
    </div>
  );
};

export default SearchForm;