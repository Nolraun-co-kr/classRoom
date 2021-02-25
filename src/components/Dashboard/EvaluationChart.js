import React from 'react';
import { Bar } from 'react-chartjs-2';

const EvaluationChart = () => {
  return (
    <div>
      <Bar
        data={{
          labels: ['1점', '2점', '3점', '4점', '5점'],
          datasets: [
            {
              label: '# of Votes',
              backgroundColor: '#6fa44c',
              borderColor: '#6fa44c',
              borderWidth: 1,
              data: [12, 19, 3, 5, 2]
            }
          ]
        }}
        options={{
          legend: {
            display: false
          },
          scales: {
          },
          responsive: true,
          maintainAspectRatio: false
        }}
      />
    </div>
  );
};

export default EvaluationChart;
