/* eslint-disable react/prop-types */
import React from 'react';

const CalSettingsTable = ({sensorData}) => {
  return (
    <div>
    <table>
      <thead>
        <tr>
          <th>Param 1</th>
          <th>Param 2</th>
          <th>Param 3</th>
        </tr>
      </thead>
      <tbody>
        {sensorData.map(([p1, p2, p3], index) => (
          <tr key={index}>
            <td>{p1}</td>
            <td>{p2}</td>
            <td>{p3}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default CalSettingsTable;