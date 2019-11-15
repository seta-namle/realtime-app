import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Card, Descriptions, Col, Row, Button } from 'antd';
import { string } from 'prop-types';
import styles from './styles.scss';
import data from '../data_mock';
class TaskDetailTable extends Component {
  static propTypes = {
    taskId: string
  };

  render() {
    const { taskId } = this.props
    const dataTask = data.filter(item => item.taskId === taskId)[0]
    const dataTaskDetail = [
      {
        name: 'Task Id',
        value: taskId
      },
      {
        name: 'Task Name',
        value: `Task Demo ${taskId}`
      },
      {
        name: 'Job Id',
        value: dataTask.jobId
      },
      {
        name: 'Task Engine Type',
        value: dataTask.category
      },
      {
        name: 'Engine Build',
        value: dataTask.engineBuild
      },
      {
        name: 'Schedule Start Time',
        value: dataTask.scheduleStartTime
      },
      {
        name: 'Parent Task Id',
        value: dataTask.parentTaskId
      },
      {
        name: 'Child Task Id',
        value: dataTask.childTaskId
      },
      {
        name: 'Status',
        value: dataTask.status
      },
      {
        name: 'Error Count',
        value: dataTask.errors
      }
    ]
    return (
      <Card title="task detail" className={styles['task-detail']}>
        <Row>
          <Col span={24} className={styles['task-detail-left']}>
            <Descriptions
              bordered
              column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
            >
              {dataTaskDetail.map(item => {
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
export default TaskDetailTable;
