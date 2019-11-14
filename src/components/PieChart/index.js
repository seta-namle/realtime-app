import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Sector
} from 'recharts';
import { Card, Typography } from 'antd';
const { Text } = Typography;
import PropTypes from 'prop-types';
import styles from './styles.scss';
const renderActiveShape = props => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      {/* <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text> */}
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      {/* <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text> */}
    </g>
  );
};

const Chart = ({ data, colors, title, onClick, onPieEnter, activeIndex }) => (
  <Card className={styles['card-chart']}>
    <Text>{title}</Text>
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
          data={data}
          fill="#8884d8"
          startAngle={90}
          endAngle={-270}
          label={({
            cx,
            cy,
            midAngle,
            innerRadius,
            outerRadius,
            value,
            index
          }) => {
            const RADIAN = Math.PI / 180;
            const radius = 25 + innerRadius + (outerRadius - innerRadius);
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);
            return (
              <text
                x={x}
                y={y}
                fill="#8884d8"
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
              >
                {data[index].name}
              </text>
            );
          }}
          onClick={onClick}
          activeShape={renderActiveShape}
          onMouseEnter={onPieEnter}
          activeIndex={activeIndex}
        >
          {data.map((entry, index) => (
            <Cell key fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </Card>
);

Chart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
  colors: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  onClick: PropTypes.func
};
export default Chart;
