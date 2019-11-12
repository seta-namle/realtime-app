import React, { Component } from 'react';
import { Card, Row, Col, Typography, Progress } from 'antd';
const { Title, Text } = Typography;
import styles from './styles.scss';

const JobImageComponent = ({ imageUrl }) => {
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={styles['job-image-component']}
    />
  );
};

const JobStatusComponent = ({ percent = 20 }) => {
  return (
    <div>
      <Row gutter={10} style={{height: '80px'}}>
        <Col span={16}>69% completed</Col>
        <Col span={8}>69% completed</Col>
      </Row>
      <Row>
        <Progress percent={percent} />
      </Row>
    </div>
  );
};

class JobDetail extends Component {
  render() {
    return (
      <Card style={{height: 150}}>
        <Row gutter={20}>
          <Col span={2}>
            <JobImageComponent
              imageUrl={
                'https://lh3.googleusercontent.com/coMv1dl31PCfEs6essJoEUwVryaqKHKQvENdZ_WYpN-PXa8Qfitkg3grQxIVN22W5A'
              }
            />
          </Col>
          <Col span={16}>
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
