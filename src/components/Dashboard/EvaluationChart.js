import React from 'react';
import { Line } from '@reactchartjs/react-chart.js';

const EvaluationChart = () => {
  return (
    <Line
      data={{
        labels: ['1점', '2점', '3점', '4점', '5점'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
              '#6fa44c',
              '#6fa44c',
              '#6fa44c',
              '#6fa44c',
              '#6fa44c'
            ],
            borderWidth: 0
          }
        ]
      }}
      options={{
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              min: 0,
              stepSize: 1
            }
          }]
        },
        responsive: true,
        maintainAspectRatio: false
      }}

    />
  );
};

export default EvaluationChart;
