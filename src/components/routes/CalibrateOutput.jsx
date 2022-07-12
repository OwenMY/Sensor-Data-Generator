import React from 'react';
import {useState} from 'react';
import {useLocation, Link} from 'react-router-dom';
import axios from 'axios';

const CalibrateOutput = () => {
  const [algorithm, setAlgorithm] = useState('');
  const location = useLocation();
  const data = location.state;

  const handleInput = (e) => {
    //
  };

  return (
    <div>
      <div className="alg-ctr">
        <label htmlFor="algorithms">Choose Algorithm</label>
        <select name="algorithms" id="algorithms">
          <option value="v1.2.1">v1.2.1</option>
          <option value="v1.2.2">v1.2.2</option>
          <option value="v1.2.3">v1.2.3</option>
          <option value="v1.2.4">v1.2.4</option>
          <option value="v1.2.5">v1.2.5</option>
        </select>
        <button type="submit">Create</button>
        <Link to="/">
          <button>Return</button>
        </Link>
      </div>
      <div className="output-ctr"></div>
    </div>
  );
};

export default CalibrateOutput;