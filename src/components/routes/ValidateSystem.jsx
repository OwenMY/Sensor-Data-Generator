import React from 'react';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Loading from './../Loading.jsx';
import ValidationTable from './../tables/ValidationTable.jsx';

const ValidateSystem = () => {
  const [data, setValidationData] = useState([]);

  useEffect(() => {
    axios.get('http://13.57.235.108:3000/performance-evaluation-output')
      .then(res => setValidationData([res.data]))
      .catch(err => console.error(err))
  }, []);

  return !data.length ? <Loading /> : (
    <div>
      <h1>Validation Data</h1>
      <ValidationTable data={data[0]}/>
      <div className="cal-btn-ctr">
        <Link to="/">
          <button className="sc-btn">Return Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ValidateSystem;