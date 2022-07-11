import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Loading from './Loading.jsx';

const CalibrateSensors = () => {
  const [sensorCalData, setSensorCalData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/SensorCalibrationData')
      .then(res => setSensorCalData([]))
      .catch(err => console.error(err))
  }, []);

  return !sensorCalData.length ? <Loading /> : (
    <>
      <div>Cal</div>
    </>
  )
};

export default CalibrateSensors;