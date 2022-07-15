import React from 'react';
import TheadCells from './search-table-cells/TheadCells.jsx';
import TBodyCells from './search-table-cells/TBodyCells.jsx';

const SearchResults = ({searchResults}) => {
  console.log(searchResults)
  return (
    <>
      <table>
        <thead>
          <TheadCells searchResults={searchResults} />
        </thead>
        <tbody>
          <TBodyCells searchResults={searchResults} />
        </tbody>
      </table>
    </>
  )
};

export default SearchResults;