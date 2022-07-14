/* eslint-disable no-case-declarations */
import React from 'react';
import {useReducer} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import SearchForm from './SearchForm.jsx';

const initialState = {
  fileType: null,
  sensor: [],
  dates: [],
  algorithm: null,
  base: null,
  options: [],
  precision: null,
  accuracy: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'file type':
      return {...state, fileType: action.payload};
    case 'algorithm':
      return {...state, algorithm: action.payload};
    case 'base':
      return {...state, base: action.payload};
    case 'sensor':
      return {...state, sensor: action.payload};
    case 'date':
      let dateSet = action.payload.map(date => date.format());
      return {...state, dates: dateSet };
    case 'precision':
      return {...state, precision: action.payload};
    case 'accuracy':
      return {...state, accuracy: action.payload};
    default:
      return {...state}
  }
};

const Search = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state)
  return (
    <div className="search">
      <div className="search-header">
        <h2>Search</h2>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
        <SearchForm dispatch={dispatch} state={state} />
        <button className="search-btn" type="submit">Search</button>
      <div className="results"></div>
    </div>
  );
};

export default Search;