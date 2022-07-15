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
    const params = searchResults[index + 1];

    axios.get('http://localhost:3000/all-sensors', params)
      .then(res => console.log(res.data))
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