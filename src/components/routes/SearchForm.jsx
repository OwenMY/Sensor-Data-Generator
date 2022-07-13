/* eslint-disable react/prop-types */
import React from 'react';
import {useEffect, useState} from 'react';
import AlgorithmsOptions from './search-options/AlgorithmsOptions.jsx';
import BaseOptions from './search-options/BaseOptions.jsx';
import DateOptions from './search-options/DateOptions.jsx';
import FileOptions from './search-options/FileOptions.jsx';
import SensorOptions from './search-options/SensorOptions.jsx';

const SearchForm = ({dispatch, state}) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    switch(state.fileType) {
      case 'Sensor Calibration':
        setOptions([
          (<SensorOptions key="SC1" dispatch={dispatch}/>),
          (<DateOptions key="SC2" dispatch={dispatch} state={state}/>)
        ]);
        break;
      case 'Sensor Calibration Output':
        setOptions([
          (<SensorOptions key="SCO1" dispatch={dispatch}/>),
          (<DateOptions key="SCO2" dispatch={dispatch} state={state}/>),
          (<AlgorithmsOptions key="SCO3" dispatch={dispatch}/>)
        ]);
        break;
      case 'Base Calibration':
        setOptions([
          (<BaseOptions key="BCO1" dispatch={dispatch}/>),
          (<DateOptions key="BCO2" dispatch={dispatch} state={state}/>),
        ]);
        break;
      case 'Performance Validation':
        setOptions([
          (<SensorOptions key="PVO1" dispatch={dispatch}/>),
          (<BaseOptions key="PVO2" dispatch={dispatch}/>),
          (<AlgorithmsOptions key="PV03" dispatch={dispatch}/>),
          (<DateOptions key="PVO4" dispatch={dispatch} state={state}/>)
        ]);
        break;
      default:
        setOptions([]);
        break;
    }
  }, [state.fileType]);

  return (
    <div className="search-ctr">
      <FileOptions dispatch={dispatch}/>
      {!options.length ? null : options}
    </div>
  );
};

export default SearchForm;