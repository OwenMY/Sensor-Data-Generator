/* eslint-disable react/prop-types */
import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import TheadCells from './search-table-cells/TheadCells.jsx';
import TBodyCells from './search-table-cells/TBodyCells.jsx';

const SearchResults = ({searchResults}) => {
  const [show, setShowModal] = useState(false);
  const [sensorData, setSensorData] = useState([]);

  const handleView = (e) => {
    const index = e.target.attributes.data.value;
    const params = searchResults[Number(index) + 1];
    params['fileType'] = searchResults[0].fileType;

    axios.get('http://localhost:3000/search-sensors', {params: params})
      .then(res => {
        console.log(res.data);
        setSensorData(res.data);
        setShowModal(true);
      })
      .catch(err => console.error(err));
  };

  return (
    <>
      <table>
        <thead>
          <TheadCells searchResults={searchResults} />
        </thead>
        <tbody>
          <TBodyCells searchResults={searchResults} handleView={handleView}/>
        </tbody>
      </table>
    </>
  )
};

export default SearchResults;