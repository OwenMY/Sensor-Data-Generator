/* eslint-disable react/prop-types */
import React from 'react';

const ValidationTable = ({data}) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>{data.base_station_unique_id}</th>
            <th>{data.validation_date}</th>
            <th>{data.algorithm_version}</th>
          </tr>
          <tr>
            <th>Sensor ID</th>
            <th>Accuracy</th>
            <th>Precision</th>
          </tr>
        </thead>
        <tbody>
          {data.sensors.map((sensor) => (
            <tr key={sensor.sensor_unique_id}>
              <td>{sensor.sensor_unique_id}</td>
              <td>{sensor.accuracy}</td>
              <td>{sensor.precision}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};


export default ValidationTable;