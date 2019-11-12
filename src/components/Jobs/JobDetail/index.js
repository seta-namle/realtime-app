import React, { Component } from 'react';
import { Card, Row, Col, Typography, Progress } from 'antd';
const { Title, Text } = Typography;
import styles from './styles.scss';


const JobStatusComponent = ({ percent = 20 }) => {
  return (
    <div>
      <Row gutter={10} style={{ paddingLeft: 3 }}>
        <div style={{ fontSize: 25, color: '#52c41a' }}>{percent}%</div>
        <div style={{ fontSize: 15 }}>completed</div>
      </Row>
      <Row>
        <Progress percent={percent} showInfo={false} strokeColor="#52c41a"/>
      </Row>
    </div>
  );
};

class JobDetail extends Component {
  render() {
    return (
      <Card>
        <Row gutter={20}>
          <Col span={18}>
            <Title level={3}>123456789-897-789</Title>
            <Text>JobId</Text>
          </Col>
          <Col span={6}>
            <JobStatusComponent />
          </Col>
        </Row>
      </Card>
    );
  }
}
export default JobDetail;
