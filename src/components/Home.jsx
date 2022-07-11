import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Sensor Data Generator</h1>
      <div className="button-ctr">
        <Link to="/calibrate-sensor">
          <button className="btn" >Calibrate Sensors</button>
        </Link>
        <Link to="/calibrate-base">
          <button  className="btn">Calibrate Base</button>
        </Link>
        <Link to="/validate-system">
          <button className="btn">Validate System</button>
        </Link>
        <Link to="/search">
          <button className="btn">Search</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;