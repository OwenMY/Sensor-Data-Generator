import React from 'react';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Loading from './../Loading.jsx';
import CalTable from './../tables/CalTable.jsx';

const CalibrateBase = () => {
  const [data, setBaseCalData] = useState([]);

  useEffect(() => {
    axios.get('http://13.57.235.108/base-calibration-data')
      .then(res => setBaseCalData([res.data]))
      .catch(err => console.error(err))
  }, []);

  return !data.length ? <Loading /> : (
    <div>
      <h1>Base Statistics</h1>
      <CalTable data={data[0]}/>
      <div className="cal-btn-ctr">
        <Link to="/">
          <button className="sc-btn">Return Home</button>
        </Link>
      </div>
    </div>
  );
};

export default CalibrateBase;