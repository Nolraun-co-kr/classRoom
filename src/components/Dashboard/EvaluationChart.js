import React, { useRef, useEffect } from 'react';

const EvaluationChart = () => {
  const canvasRef = useRef(null);

  const data = {
    labels: ['1점', '2점', '3점', '4점', '5점'],
    datasets: [
      {
        label: '# of Votes',
        backgroundColor: '#6fa44c',
        borderColor: '#6fa44c',
        borderWidth: 1,
        data: [6, 5, 4, 3, 2]
      }
    ]
  };

  const options = {
    legend: {
      display: false
    },
    scales: {},
    responsive: true,
    maintainAspectRatio: false
  };

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    // eslint-disable-next-line no-unused-vars,no-undef
    const chart = new Chart(ctx, {
      type: 'bar',
      data,
      options
    });
  }, []);

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default EvaluationChart;
