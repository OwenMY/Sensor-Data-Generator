import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Loading from './Loading.jsx';

const CalibrateSensors = () => {
  const [sensorCalData, setSensorCalData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/SensorCalibrationData')
      .then(res => setSensorCalData([res.data]))
      .catch(err => console.error(err))
  }, []);
  console.log(sensorCalData)
  return !sensorCalData.length ? <Loading /> : (
    <div>
      <div>{sensorCalData[0].file_name}</div>
    </div>
  )
};

export default CalibrateSensors;