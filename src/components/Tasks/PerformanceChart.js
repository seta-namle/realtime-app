import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const PerformantChart = ({ data = [], onClick }) => {
  return (
    <BarChart
      width={900}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <XAxis dataKey="name" />
      <YAxis dataKey="total" />
      <Tooltip />
      <Legend />
      <Bar onClick={onClick} dataKey="translation" stackId="a" fill="#6666ff" />
      <Bar
        onClick={onClick}
        dataKey="faceDetection"
        stackId="a"
        fill="#7fbf7f"
      />
      <Bar
        onClick={onClick}
        dataKey="transcription"
        stackId="a"
        fill="#ff7f7f"
      />
    </BarChart>
  );
};

export default PerformantChart;
