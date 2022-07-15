/* eslint-disable no-prototype-builtins */
import React from 'react';
import {createPortal} from 'react-dom';
import SensorChart from '../charts/SensorChart.jsx';
import CalSettingsTable from '../tables/CalSettingsTable.jsx';

const SearchDataModal = ({setShowDataModal, sensorFileData}) => {
  const root = document.getElementById('root');
  let sensorData = null;

  if (sensorFileData[0].hasOwnProperty('sensor_data')) {
    sensorData = JSON.parse(sensorFileData[0].sensor_data);
  } else {
    sensorData = JSON.parse(sensorFileData[0].calibration_parameters);
  }

  return createPortal((
    <div className="modal" onClick={() => setShowDataModal(false)}>
     <div className="modal-ctr">
       {sensorFileData[0].hasOwnProperty('sensor_data') ? <SensorChart sensorData={sensorData}/> : <CalSettingsTable sensorData={sensorData} />}
     </div>
    </div>
  ), root
)};

export default SearchDataModal;