/* eslint-disable no-case-declarations */
import React from 'react';
import {useReducer, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import SearchForm from './SearchForm.jsx';

const initialState = {
  fileType: null,
  sensor: null,
  dates: [],
  algorithm: null,
  base: null,
  precision: null,
  accuracy: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'file type':
      return {...state, fileType: action.payload};
    case 'algorithm':
      if (action?.payload?.includes('Choose')) return {...state, algorithm: null};
      return {...state, algorithm: action.payload};
    case 'base':
      if (action?.payload?.includes('Choose')) return {...state, base: null};
      return {...state, base: action.payload};
    case 'sensor':
      if (action?.payload?.includes('Choose')) return {...state, sensor: null};
      return {...state, sensor: action.payload};
    case 'date':
      if (action?.payload?.includes('Choose')) return {...state, dates: []};
      let dateSet = action.payload.map(date => date.format());
      return {...state, dates: dateSet };
    case 'precision':
      if (action?.payload?.includes('Choose')) return {...state, precision: null};
      return {...state, precision: action.payload};
    case 'accuracy':
      if (action?.payload?.includes('Choose')) return {...state, accuracy: null};
      return action.payload === 'Outliers' ? {...state, accuracy: 5.0} : {...state, accuracy: action.payload};
    default:
      return {...state}
  }
};

const Search = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = () => {
    if (!state.fileType) return;

    axios.get('http://localhost:3000/search', {params: state})
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  };

  return (
    <div className="search">
      <div className="search-header">
        <h2>Search Files</h2>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
        <SearchForm dispatch={dispatch} state={state} />
        <button onClick={handleSubmit} className="search-btn">Search</button>
      <div className="results"></div>
    </div>
  );
};

export default Search;