import React from 'react';
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip
} from 'recharts';
import { Card, Typography } from 'antd';
const { Text } = Typography;
import PropTypes from 'prop-types';
import styles from './styles.scss';
const Chart = ({ data, colors, title, onClick }) => (
    <Card className={styles['card-chart']}>
        <Text>{title}</Text>
        <ResponsiveContainer width="100%" height={350} >
            <PieChart >
                <Pie data={data} fill="#8884d8" startAngle={90} endAngle={-270} label={({
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
                            textAnchor={x > cx ? "start" : "end"}
                            dominantBaseline="central"
                        >
                            {data[index].name}
                        </text>
                    );
                }}
                onClick={onClick}
                >
                    {
                        data.map((entry, index) => <Cell key fill={colors[index % colors.length]} />)
                    }
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    </Card>

)

Chart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({

        })
    ),
    colors: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    onClick: PropTypes.func
}
export default Chart;