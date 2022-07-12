/* eslint-disable react/prop-types */
import React from 'react';
import {useState} from 'react';
import Modal from './../modals/Modal.jsx';

const CalOutputTable = ({output}) => {
  const [show, setShowModal] = useState(false);
  const [sensorData, setSensorData] = useState([]);

  if (output.length) {
    output[0].sensors.sort((a, b) => a.sensor_unique_id - b.sensor_unique_id);
  }

  const showModal = (e) => {
    const index = e.target.attributes[0].value;
    setSensorData(output[0].sensors?.[index].calibration_parameters);
    setShowModal(true);
  };

  return !output.length ? null : (
    <div>
    <table>
      <thead>
        <tr>
          <th>{output[0].calibration_file}</th>
          <th>{output[0].algorithm_version}</th>
        </tr>
        <tr>
          <th>Sensor ID</th>
          <th>Parameters</th>
        </tr>
      </thead>
      <tbody>
        {output[0].sensors.map((sensor, index) => (
          <tr key={sensor.sensor_unique_id}>
            <td>{sensor.sensor_unique_id}</td>
            <td>
              <span onClick={showModal} value={index}className="td-view">View</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
      <div>
        {!show ? null : <Modal
          setShowModal={setShowModal}
          sensorData={sensorData}
          dataType={'Parameters'}
         />}
      </div>
    </div>
  )
};


export default CalOutputTable;