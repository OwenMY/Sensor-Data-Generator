import React from 'react';

const BaseOptions = ({dispatch}) => {
  return (
    <>
      <label htmlFor="Base Station">Base Station</label>
      <select
      className="dropdown"
      name="Base Station"
      onChange={(e) => dispatch({type: 'base', payload: e.target.value})}
      >
        <option value="Choose Base Station" defaultValue>Base Station</option>
        <option value="BK001">BK001</option>
        <option value="BK002">BK002</option>
        <option value="BK003">BK003</option>
        <option value="BK004">BK004</option>
      </select>
    </>
  );
};

export default BaseOptions;