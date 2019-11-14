import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const legend = [
  { value: 'Translation', id: 'translation', type: 'rect', color: '#6666ff' },
  {
    value: 'Face Detection',
    id: 'faceDetection',
    type: 'rect',
    color: '#7fbf7f'
  },
  {
    value: 'Transcription',
    id: 'transcription',
    type: 'rect',
    color: '#ff7f7f'
  },
  { value: 'All', id: 'all', type: 'rect', color: 'gray' }
];

const PerformantChart = ({
  data = [],
  onClick,
  onClickLegend,
  selectedLegend
}) => {
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
      <YAxis dataKey={selectedLegend === 'all' ? 'total' : selectedLegend} />
      <Tooltip />
      <Legend
        style={{ marginTop: '10px' }}
        payload={legend}
        onClick={onClickLegend}
      />
      {['translation', 'all'].includes(selectedLegend) && (
        <Bar
          onClick={onClick}
          dataKey="translation"
          stackId="a"
          fill="#6666ff"
        />
      )}
      {['faceDetection', 'all'].includes(selectedLegend) && (
        <Bar
          onClick={onClick}
          dataKey="faceDetection"
          stackId="a"
          fill="#7fbf7f"
        />
      )}
      {['transcription', 'all'].includes(selectedLegend) && (
        <Bar
          onClick={onClick}
          dataKey="transcription"
          stackId="a"
          fill="#ff7f7f"
        />
      )}
    </BarChart>
  );
};

export default PerformantChart;
