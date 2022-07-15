/* eslint-disable react/prop-types */
import React from 'react';

const TBodyCells = ({searchResults}) => {
  const fileType = searchResults[0].fileType;
  const cellData = searchResults.slice(1);

  switch(fileType) {
    case 'Sensor Calibration':
      return cellData.map((data) => (
        <tr key={`SCBODY${data.file_name}`}>
          <td>{data.file_name}</td>
          <td>{data.calibration_date}</td>
          <td>View</td>
        </tr>
      ));
    case 'Sensor Calibration Output':
      return cellData.map((data) => (
        <tr key={`SOBODY${data.file_name}`}>
          <td>{data.file_name}</td>
          <td>{data.calibration_file}</td>
          <td>{data.generation_date}</td>
          <td>{data.algorithm_version}</td>
          <td>View</td>
        </tr>
      ));
    case 'Base Calibration':
      return cellData.map((data) => (
        <tr key={`BCBODY${data.file_name}`}>
          <td>{data.file_name}</td>
          <td>{data.calibration_date}</td>
          <td>View</td>
        </tr>
      ));
    case 'Performance Validation':
      return cellData.map((data) => (
        <tr key={`PVBODY${data.file_name}`}>
          <td>{data.file_name}</td>
          <td>{data.validation_date}</td>
          <td>{data.algorithm_version}</td>
          <td>{data.base_station_unique_id}</td>
          <td>View</td>
        </tr>
      ));
    default:
      return null;
  }
};

export default TBodyCells;