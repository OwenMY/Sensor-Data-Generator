/* eslint-disable react/prop-types */
import React from 'react';
import DatePicker from 'react-multi-date-picker';

// const DateOptions = ({dispatch, state}) => {
//   console.log(state)
//   return (
//     <>
//       <label htmlFor="start date">Start Date</label>
//       <input
//         onChange={(e) => dispatch({type: 'start date', payload: e.target.value})}
//         type="date"
//         name="start date"
//         min="2022-01-01"
//         max="2023-12-31"
//       />
//       <label htmlFor="end date">End Date</label>
//       <input
//         onChange={(e) => dispatch({type: 'end date', payload: e.target.value})}
//         type="date"
//         name="end date"
//         min={state.dateMin}
//         max="2023-12-31"
//       />
//     </>
//   );
// };

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