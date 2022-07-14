/* eslint-disable react/prop-types */
import React from 'react';

const PrecisionOptions = ({dispatch}) => {
  return (
    <>
      <label htmlFor="Precision">Precision Limits</label>
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
        <option value="< 0.6">{'< 0.6'}</option>
        <option value="< 0.7">{'< 0.7'}</option>
        <option value="< 0.8">{'< 0.8'}</option>
        <option value="< 0.9">{'< 0.9'}</option>
        <option value="< 1.0">{'< 1.0'}</option>
        <option value="< 1.1">{'< 1.1'}</option>
        <option value="< 1.2">{'< 1.2'}</option>
      </select>
    </>
  );
};

export default PrecisionOptions;