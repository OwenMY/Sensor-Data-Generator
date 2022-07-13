import React from 'react';

const BaseOptions = () => {
  return (
    <>
      <label htmlFor="start date">Start Date</label>
      <input type="date" name="start date" min="2022-01-01" max="2023-12-31"></input>
      <label htmlFor="end date">End Date</label>
      <input type="date" name="end date" min="2022-01-01" max="2023-12-31"></input>
    </>
  );
};

export default BaseOptions;