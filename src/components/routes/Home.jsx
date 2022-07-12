import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Sensor Data Generator</h1>
      <div className="button-ctr">
        <Link to="/calibrate-sensor">
          <button>
            <img src={require("./../../../src/assets/sensor_sideways.svg")} alt="sensor image"></img>
            <span>Calibrate Sensors</span>
          </button>
        </Link>
        <Link to="/calibrate-base">
          <button>
            <img src={require("./../../../src/assets/base.png")} alt="base Image"></img>
            <span>Calibrate Base</span>
          </button>
        </Link>
        <Link to="/validate-system">
          <button>
            <img src={require("./../../../src/assets/system.png")} alt="system image"></img>
            <span>Validate System</span>
          </button>
        </Link>
        <Link to="/search">
          <button>
            <img src={require("./../../../src/assets/search.png")} alt="search image"></img>
            <span>Search</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;