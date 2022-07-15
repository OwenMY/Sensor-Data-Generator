/* eslint-disable react/prop-types */
import React from 'react';

const THeadCells = ({sensorData}) => {
  const fileType = sensorData[0].fileType;

  switch(fileType) {
    case 'Sensor Calibration':
      return [(
        <tr key="SCSHEADER" className="tr-th-row">
          <th>Sensor ID</th>
          <th>Sensor Type</th>
          <th>Sensor Data</th>
        </tr>
      )];
    case 'Sensor Calibration Output':
      return [(
        <tr key="SOSHEADER" className="tr-th-row">
          <th>Sensor ID</th>
          <th>Parameters</th>
        </tr>
      )];
    case 'Base Calibration':
      return [(
        <tr key="BCSHEADER" className="tr-th-row">
          <th>Sensor ID</th>
          <th>Sensor Type</th>
          <th>Sensor Data</th>
        </tr>
      )];
    case 'Performance Validation':
      return [(
        <tr key="PVHEADER" className="tr-th-row">
          <th>Sensor ID</th>
          <th>Accuracy</th>
          <th>Precision</th>
        </tr>
      )];
    default:
      return null;
  }
};

export default THeadCells;