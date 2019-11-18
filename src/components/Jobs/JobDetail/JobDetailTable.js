import React, { Component } from 'react';

import { Card, Descriptions, Col, Row, Button } from 'antd';
import { string } from 'prop-types';
import styles from './styles.scss';
import { dataJobDetail } from './mockData';

class JobDetailTable extends Component {
  render() {
    return (
      <Card title="Job detail" className={styles['task-detail']}>
        <Row>
          <Col span={24} className={styles['task-detail-left']}>
            <Descriptions
              bordered
              column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
            >
              {dataJobDetail.map(item => {
                return (
                  <Descriptions.Item key={item.name} label={item.name}>
                    {item.value}
                  </Descriptions.Item>
                );
              })}
            </Descriptions>
          </Col>
          <Col span={24} className={styles['task-detail-action']}>
            <Button type="primary">Export</Button>
            <Button>Watch</Button>
          </Col>
        </Row>
      </Card>
    );
  }
}
export default JobDetailTable;
