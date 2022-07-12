/* eslint-disable react/prop-types */
import React from 'react';
import {useState} from 'react';
import Modal from './modals/Modal.jsx';

const Table = ({data}) => {
  const [show, setShowModal] = useState(false);
  const [sensorData, setSensorData] = useState([]);
  data.sensors.sort((a, b) => a.sensor_unique_id - b.sensor_unique_id);

  const showModal = (e) => {
    e.persist();
    const index = e.target.attributes[0].value;
    setSensorData(data.sensors?.[index]?.sensor_data);
    setShowModal(true);
  };

  return (
    <div>
    <table>
      <thead>
        <tr>
          <th>{data.file_name}</th>
          <th>Date: {data.calibration_date}</th>
        </tr>
        <tr>
          <th>Sensor ID</th>
          <th>Sensor Type</th>
          <th>Sensor Data</th>
        </tr>
      </thead>
      <tbody>
        {data.sensors.map((sensor, index) => (
          <tr key={sensor.sensor_unique_id}>
            <td>{sensor.sensor_unique_id}</td>
            <td>{sensor.sensor_type}</td>
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
          dataType={'Data'}
         />}
      </div>
    </div>
  );
};

export default Table;