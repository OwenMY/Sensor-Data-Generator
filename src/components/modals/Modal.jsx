import React from 'react';
import {createPortal} from 'react-dom';

const Modal = ({setShowModal, sensorData}) => {
  const root = document.getElementById('root');

  return createPortal((
    <div className="modal" onClick={() => setShowModal(false)}>
     <div className="modal-ctr">
       <canvas id="myChart"></canvas>
     </div>
    </div>
  ), root
)};

export default Modal;