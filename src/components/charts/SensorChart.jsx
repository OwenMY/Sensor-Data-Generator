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
        backgroundColor: '#00FF00',
        borderColor: '#00FF00',
        data: data.x,
      },
      {
        label: 'Y Axis',
        backgroundColor: '#FFFF00',
        borderColor: '#FFFF00',
        data: data.y,
      },
      {
        label: 'Z Axis',
        backgroundColor: '#ff0000',
        borderColor: '#ff0000',
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