import React from 'react';

const SensorOptions = () => {
  return (
    <>
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
    </>
  );
};

export default SensorOptions;