import React, { Component } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
  ComposedChart
} from 'recharts';
import { Card } from 'antd';
import PropTypes from 'prop-types';
import styles from './styles.scss';
const BarChartComponent = ({ data }) => (
  <Card className={styles['card-chart']}>
    <ResponsiveContainer width="100%" height={350}>
      <ComposedChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Running" stackId="a" fill="#8884d8" />
        <Bar dataKey="Started" stackId="a" fill="#82ca9d" />
        <Bar dataKey="Paused" stackId="a" fill="#ef7c4d" />

        <Line type="monotone" dataKey="Error rate" stroke="#ff7300" />
      </ComposedChart>
    </ResponsiveContainer>
  </Card>
);
BarChartComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({}))
};
export default BarChartComponent;
