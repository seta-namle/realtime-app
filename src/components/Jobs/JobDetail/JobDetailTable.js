import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Card, Descriptions, Col, Row, Button } from 'antd';
import { string } from 'prop-types';
import styles from './styles.scss';
class JobDetailTable extends Component {
  render() {
    const dataJobDetail = [
      {
        name: 'Job Id',
        value: '19114508_pCJAAcUsmK'
      },
      {
        name: 'Org Id',
        value: 7862
      },
      {
        name: 'Priority',
        value: 'Medium'
      },
      {
        name: 'Job Template Id',
        value: '10'
      },
      {
        name: 'Schedule Id',
        value: '10'
      },
      {
        name: '# Tasks',
        value: 3
      },
      {
        name: 'Start Time',
        value: 'Fri Nov 8 3039 30:39:48'
      },
      {
        name: '# Tasks Complete',
        value: 0
      },
      {
        name: '# Active Tasks',
        value: 3
      },
      {
        name: '# Errors',
        value: 0
      }
    ];
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
