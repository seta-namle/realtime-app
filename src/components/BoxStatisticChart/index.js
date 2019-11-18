import React from 'react';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';
import { Card, Typography, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const { Text, Title } = Typography;
const BoxStatisticChart = ({ title, subTitle, data, dataKey, color }) => (
  <Card bordered={false}>
    <Row>
      <Col span={24} lg={12}>
        <Title className={styles['title-box-statistic']} level={3}>
          {title}
        </Title>
        <Text>{subTitle}</Text>
      </Col>
      <Col span={24} lg={12}>
        <ResponsiveContainer width="100%" height={50}>
          <BarChart width={150} height={40} data={data}>
            <Bar yAxisId="right" dataKey={dataKey} fill={color} />
          </BarChart>
        </ResponsiveContainer>
      </Col>
    </Row>
  </Card>
);

BoxStatisticChart.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({})),
  dataKey: PropTypes.string,
  color: PropTypes.string
};

export default BoxStatisticChart;
