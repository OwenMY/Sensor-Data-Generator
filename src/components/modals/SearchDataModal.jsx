import React from 'react';
import {createPortal} from 'react-dom';
import SensorChart from '../charts/SensorChart.jsx';
import CalSettingsTable from '../tables/CalSettingsTable.jsx';

const SearchDataModal = ({setShowDataModal, sensorData, dataType}) => {
  const root = document.getElementById('root');

  return createPortal((
    <div className="modal" onClick={() => setShowDataModal(false)}>
     <div className="modal-ctr">
       {dataType === 'Data' ? <SensorChart sensorData={sensorData}/> : <CalSettingsTable sensorData={sensorData} />}
     </div>
    </div>
  ), root
)};

export default SearchDataModal;