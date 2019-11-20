import React from 'react';
import {
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
import { Card, Typography } from 'antd';
import PropTypes from 'prop-types';
import styles from './styles.scss';
const { Text } = Typography;
const BarChartComponent = ({ data, dataBar, onClickLegend, legendPayload, title, isLineChart, onClick }) => (
  <Card className={styles['card-chart']}>
    <Text>{`${title}`}</Text>
    <ResponsiveContainer width="100%" height={350}>
      <ComposedChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend payload={legendPayload} onClick={onClickLegend} />
        {
          dataBar.map(item => {
            if(item.isEnabled) {
              return <Bar key={item.key} dataKey={item.key} stackId="a" fill={item.color} onClick={onClick} />
            }
          })
        }
        {
          isLineChart && (
            <Line type="monotone" dataKey="Error rate" stroke="#ff7300" />
          )
        }
      </ComposedChart>
    </ResponsiveContainer>
  </Card>
);
BarChartComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
  dataBar: PropTypes.arrayOf(PropTypes.shape({})),
  onClickLegend: PropTypes.func,
  legendPayload: PropTypes.arrayOf(PropTypes.shape({})),
  title: PropTypes.string,
  isLineChart: PropTypes.bool,
  onClick: PropTypes.func
};
export default BarChartComponent;
