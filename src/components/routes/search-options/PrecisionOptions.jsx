/* eslint-disable react/prop-types */
import React from 'react';

const PrecisionOptions = ({dispatch}) => {
  return (
    <>
      <label htmlFor="Precision">Precision</label>
      <select
        onChange={(e) => dispatch({type: 'precision', payload: e.target.value})}
        className="dropdown"
        name="Precision"
      >
        <option value="Choose Limit" defaultValue>Choose Limit</option>
        <option value="< 0.1">{'< 0.1'}</option>
        <option value="< 0.2">{'< 0.2'}</option>
        <option value="< 0.3">{'< 0.3'}</option>
        <option value="< 0.4">{'< 0.4'}</option>
        <option value="< 0.5">{'< 0.5'}</option>
      </select>
    </>
  );
};

export default PrecisionOptions;