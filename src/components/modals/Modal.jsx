import React from 'react';
import {createPortal} from 'react-dom';
import SensorChart from '../charts/SensorChart.jsx';

const Modal = ({setShowModal, sensorData}) => {
  const root = document.getElementById('root');

  return createPortal((
    <div className="modal" onClick={() => setShowModal(false)}>
     <div className="modal-ctr">
       <SensorChart sensorData={sensorData}/>
     </div>
    </div>
  ), root
)};

export default Modal;