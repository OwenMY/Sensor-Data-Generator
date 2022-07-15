import React from 'react';
import {createPortal} from 'react-dom';
import Loading from './../Loading.jsx'

const LoadingModal = () => {
  const root = document.getElementById('root');

  return createPortal((
    <div className="modal">
     <div className="modal-ctr">
       <Loading />
     </div>
    </div>
  ), root
)};

export default LoadingModal;