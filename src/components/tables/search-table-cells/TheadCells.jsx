/* eslint-disable react/prop-types */
import React from 'react';

const TheadCells = ({searchResults}) => {
  const fileType = searchResults[0].fileType;
  searchResults['poop'] = 1

  switch(fileType) {
    case 'Sensor Calibration':
      return [(
        <tr key="SCHEADER" className="tr-th-row">
          <th>File Name</th>
          <th>Calibration Date</th>
          <th>Sensors</th>
        </tr>
      )];
    case 'Sensor Calibration Output':
      return [(
        <tr key="SOHEADER" className="tr-th-row">
          <th>File Name</th>
          <th>Calibration File</th>
          <th>Generation Date</th>
          <th>Algorithm Version</th>
          <th>Calibration Settings</th>
        </tr>
      )];
    case 'Base Calibration':
      return [(
        <tr key="BCHEADER" className="tr-th-row">
          <th>File Name</th>
          <th>Calibration Date</th>
          <th>Sensors</th>
        </tr>
      )];
    case 'Performance Validation':
      return [(
        <tr key="VFHEADER" className="tr-th-row">
          <th>File Name</th>
          <th>Validation Date</th>
          <th>Algorithm Version</th>
          <th>Base Station</th>
          <th>Sensors</th>
        </tr>
      )];
    default:
      return null;
  }
};

export default TheadCells;