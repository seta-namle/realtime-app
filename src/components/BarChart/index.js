import React, { Component } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, ComposedChart
} from 'recharts';
import { Card } from 'antd';
import styles from './styles.scss';
class BarChartComponent extends Component {

    render() {
        const data = [
            { name: 'Page A', uv: 4000, pv: 2400, amt: 2400, categoryId: 10 },
            { name: 'Page B', uv: 3000, pv: 1398, amt: 2210, categoryId: 10 },
            { name: 'Page C', uv: 2000, pv: 9800, amt: 2290, categoryId: 10 },
            { name: 'Page D', uv: 2780, pv: 3908, amt: 2000, categoryId: 10 },
            { name: 'Page E', uv: 1890, pv: 4800, amt: 2181, categoryId: 10 },
            { name: 'Page F', uv: 2390, pv: 3800, amt: 2500, categoryId: 10 },
            { name: 'Page G', uv: 3490, pv: 4300, amt: 2100, categoryId: 10 },
        ];
        return (
            <Card className={styles['card-chart']}>
             <ResponsiveContainer width="100%" height={350} >
                <ComposedChart  data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                    <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
                    <Bar dataKey="amt" stackId="a" fill="#ef7c4d" />

                    <Line type='monotone' dataKey='uv' stroke='#ff7300' />
                </ComposedChart>
                </ResponsiveContainer>
            </Card>

        )
    }
}

export default BarChartComponent;