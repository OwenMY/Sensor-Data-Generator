/* eslint-disable react/prop-types */
import React from 'react';
import DatePicker from 'react-multi-date-picker';

const DateOptions = ({dispatch}) => {
  return (
    <>
      <label htmlFor="Date">Date</label>
      <DatePicker
        inputClass="custom-input"
        name="Date"
        range
        placeholder="Choose Date(s)"
        onChange={e => dispatch({type: 'date', payload: e})}
      />
    </>
  )
};

export default DateOptions;