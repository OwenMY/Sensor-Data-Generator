import React from 'react';
import {Link} from 'react-router-dom';
import SearchForm from './SearchForm.jsx';

const Search = () => {

  return (
    <div className="search">
      <div className="search-header">
        <h2>Search</h2>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
        <SearchForm />
        <button className="search-btn" type="submit">Search</button>
      <div className="results"></div>
    </div>
  );
};

export default Search;