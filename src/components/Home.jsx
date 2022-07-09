import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Sensor Data Generator</h1>
      <div className="button-ctr">
        <button>
          <Link className="btn" to="/calibrate-sensor">Calibrate Sensors</Link>
        </button>
        <button>
          <Link className="btn" to="/calibrate-base">Calibrate Base</Link>
        </button>
        <button>
          <Link className="btn" to="/validate-system">Validate System</Link>
        </button>
        <button>
          <Link className="btn" to="/search">Search</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;