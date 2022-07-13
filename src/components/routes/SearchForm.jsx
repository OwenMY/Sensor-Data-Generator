import React from 'react';

const SearchForm = () => {
  return (
    <div className="search-ctr">
     <label htmlFor="File Type">File Type</label>
      <select className="file-type" name="File Type">
        <option value="Type" selected>Choose Type</option>
        <option value="Sensor Calibration"> Sensor Calibration</option>
        <option value="Sensor Calibration Output">Sensor Calibration Output</option>
        <option value="Base Calibration">Base Calibration</option>
        <option value="Performance Validation">Performance Validation</option>
      </select>
      <label htmlFor="Base Station">Base Station</label>
      <select className="base-station" name="Base Station">
        <option value="Choose Base Station" selected>Base Station</option>
        <option value="BK001">BK001</option>
        <option value="BK002">BK002</option>
        <option value="BK003">BK003</option>
        <option value="BK004">BK004</option>
      </select>
      <label htmlFor="Sensor(s)">Sensor</label>
      <select className="sensors" name="Sensor(s)">
        <option value="Choose Sensors" selected>Choose Sensors</option>
        <option value="MK001">MK001</option>
        <option value="MK002">MK002</option>
        <option value="MK003">MK003</option>
        <option value="MK004">MK004</option>
        <option value="MK005">MK005</option>
        <option value="MK006">MK006</option>
        <option value="MK007">MK007</option>
        <option value="MK008">MK008</option>
        <option value="MK009">MK009</option>
        <option value="MK010">MK010</option>
        <option value="MK011">MK011</option>
        <option value="MK012">MK012</option>
      </select>
      <label htmlFor="Algorithm">Algorithm</label>
      <select className="algorithm" name="Algorithm">
        <option value="Choose Algorithm" selected>Choose Algorithm</option>
        <option value="v1.2.1">v1.2.1</option>
        <option value="v1.2.2">v1.2.2</option>
        <option value="v1.2.3">v1.2.3</option>
        <option value="v1.2.4">v1.2.4</option>
        <option value="v1.2.5">v1.2.5</option>
      </select>
      <label htmlFor="start date">Start Date</label>
      <input type="date" name="start date" min="2022-01-01" max="2023-12-31"></input>
      <label htmlFor="end date">End Date</label>
      <input type="date" name="end date" min="2022-01-01" max="2023-12-31"></input>
    </div>
  );
};

export default SearchForm;