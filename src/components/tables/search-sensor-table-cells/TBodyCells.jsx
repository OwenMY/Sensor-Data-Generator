/* eslint-disable react/prop-types */
import React from 'react';

const TBodyCells = ({sensorData, handleView}) => {
  const fileType = sensorData[0].fileType;
  const cellData = sensorData.slice(1);

  cellData.sort((a, b) => a.sensor_unique_id - b.sensor_unique_id);

  switch(fileType) {
    case 'Sensor Calibration':
      return cellData.map((data, index) => (
        <tr key={`SCSBODY${data.sensor_type}`}>
          <td>{data.sensor_unique_id}</td>
          <td>{data.sensor_type}</td>
          <td className="td-view" data={index} onClick={(e) => handleView(e, cellData)}>View</td>
        </tr>
      ));
    case 'Sensor Calibration Output':
      return cellData.map((data, index) => (
        <tr key={`SOSBODY${data.sensor_unique_id}`}>
          <td>{data.sensor_unique_id}</td>
          <td className="td-view" data={index} onClick={(e) => handleView(e, cellData)}>View</td>
        </tr>
      ));
    case 'Base Calibration':
      return cellData.map((data, index) => (
        <tr key={`BCSBODY${data.sensor_type}`}>
          <td>{data.sensor_unique_id}</td>
          <td>{data.sensor_type}</td>
          <td className="td-view" data={index} onClick={(e) => handleView(e, cellData)}>View</td>
        </tr>
      ));
    case 'Performance Validation':
      return cellData.map((data) => (
        <tr key={`PVSBODY${data.accuracy + data.sensor_unique_id}`}>
          <td>{data.sensor_unique_id}</td>
          <td>{data.accuracy}</td>
          <td>{data.precision}</td>
        </tr>
      ));
    default:
      return null;
  }
};

export default TBodyCells;