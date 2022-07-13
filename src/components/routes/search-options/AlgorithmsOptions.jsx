import React from 'react';

const AlgorithmOptions = ({dispatch}) => {
  return (
    <>
      <label htmlFor="Algorithm">Algorithm</label>
      <select
        className="dropdown"
        onChange={(e) => dispatch({type: 'algorithm', payload: e.target.value})}
        name="Algorithm"
      >
        <option value="Choose Algorithm" defaultValue>Choose Algorithm</option>
        <option value="v1.2.1">v1.2.1</option>
        <option value="v1.2.2">v1.2.2</option>
        <option value="v1.2.3">v1.2.3</option>
        <option value="v1.2.4">v1.2.4</option>
        <option value="v1.2.5">v1.2.5</option>
      </select>
    </>
  );
};

export default AlgorithmOptions;