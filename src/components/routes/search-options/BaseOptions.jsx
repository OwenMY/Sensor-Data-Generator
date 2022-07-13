import React from 'react';

const BaseOptions = () => {
  return (
    <>
      <label htmlFor="Base Station">Base Station</label>
      <select className="base-station" name="Base Station">
        <option value="Choose Base Station" selected>Base Station</option>
        <option value="BK001">BK001</option>
        <option value="BK002">BK002</option>
        <option value="BK003">BK003</option>
        <option value="BK004">BK004</option>
      </select>
    </>
  );
};

export default BaseOptions;