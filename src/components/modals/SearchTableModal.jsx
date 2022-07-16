import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import {createPortal} from 'react-dom';
import THeadCells from '../tables/search-sensor-table-cells/THeadCells.jsx';
import TBodyCells from '../tables/search-sensor-table-cells/TBodyCells.jsx';
import SearchDataModal from './SearchDataModal.jsx';
import LoadingModal from './LoadingModal.jsx';

const SearchTableModal = ({setShowModal, sensorData}) => {
  const root = document.getElementById('root');

  const [show, setShowDataModal] = useState(false);
  const [sensorFileData, setSensorFileData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleView = (e, cellData) => {
    setIsLoading(true);
    const index = e.target.attributes.data.value;
    const params = cellData[Number(index)];
    params['fileType'] = sensorData[0].fileType;
    params['file_name'] = sensorData[0].file_name;

    axios.get('http://13.57.235.108/search-sensor-data', {params: params})
      .then(res => {
        setIsLoading(false);
        setSensorFileData(res.data);
        setShowDataModal(true);
      })
      .catch(err => console.error(err));
  };

  return createPortal((
    <>
    <div className="modal" onClick={() => setShowModal(false)}>
     <div className="modal-ctr" onClick={(e) => e.stopPropagation()}>
      <table>
        <thead>
          <THeadCells sensorData={sensorData}/>
        </thead>
        <tbody>
          <TBodyCells sensorData={sensorData} handleView={handleView}/>
        </tbody>
      </table>
     </div>
    </div>
    {
      isLoading ? <LoadingModal /> : null
    }
    {
      !show ? null : <SearchDataModal
      setShowDataModal={setShowDataModal}
      sensorFileData={sensorFileData}
      />
    }
    </>
  ), root
)};

export default SearchTableModal;