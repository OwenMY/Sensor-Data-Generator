/* eslint-disable react/prop-types */
import React from 'react';
import 'chart.js/auto';
import {Chart} from 'react-chartjs-2';
import getAxisData from '../utils/getAxisData.js';
import getLabels from '../utils/getLabels.js';

const SensorChart = ({sensorData}) => {
  const data = getAxisData(sensorData);
  const labels = getLabels(sensorData);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'X Axis',
        backgroundColor: '#7a5195',
        borderColor: '#7a5195',
        data: data.x,
      },
      {
        label: 'Y Axis',
        backgroundColor: '#58508d',
        borderColor: '#58508d',
        data: data.y,
      },
      {
        label: 'Z Axis',
        backgroundColor: '#003f5c',
        borderColor: '#003f5c',
        data: data.z,
      }
    ]
  };

  return (
    <div>
      <Chart type="line" data={chartData}/>
    </div>
  )
};

export default SensorChart;