import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Card, Descriptions, Col, Row, Button } from 'antd';
import { string } from 'prop-types';
import styles from './styles.scss';
class TaskDetailTable extends Component {
  static propTypes = {
    taskId: string
  };
  state = {
    data: [
      {
        key: '19114508_pCJAAcUsmKkHwNA',
        taskId: '19114508_pCJAAcUsmKkHwNA',
        jobId: '19114508_pCJAAcUsmK',
        orgId: 7862,
        engineName: 'Webstream Adapter',
        engineBuild: '444eff94-1bdd-4788-87f2-e5e32c29f7f3',
        status: 'running',
        errors: 0,
        taskInstances: '12345',
        linkToListOfTaskInstances: 'link',
        category: 'transcription',
        scheduleStartTime: 'Fri Nov 8 3039 30:39:48',
        parentTaskId: '19114508_pCJAAcU3mK2Hw10',
        childTaskId: '19113408_pCJAAcU3mK2H345'
      },
      {
        key: '19114611_7hQPac339weJIIX',
        taskId: '19114611_7hQPac339weJIIX',
        jobId: '19114508_pCJAAcUsmK',
        orgId: 7862,
        engineName: 'Stream Ingestion',
        engineBuild: '15758787-2542-43ab-ac8a-dc322dd41e77',
        status: 'running',
        errors: 0,
        taskInstances: '12345',
        linkToListOfTaskInstances: 'link',
        category: 'transcription',
        scheduleStartTime: 'Fri Nov 8 3039 30:39:48',
        parentTaskId: '19114508_pCJAAcU3mK2Hw10',
        childTaskId: '19113408_pCJAAcU3mK2H323'
      },
      {
        key: '19114611_JXZKztSMGmorIrG',
        taskId: '19114611_JXZKztSMGmorIrG',
        jobId: '19114508_pCJAAcUsmK',
        orgId: 7862,
        engineName: 'Speech M',
        engineBuild: '345fbf93-095e-4923-879c-041694567b34',
        status: 'running',
        errors: 0,
        taskInstances: '12345',
        linkToListOfTaskInstances: 'link',
        category: 'transcription',
        scheduleStartTime: 'Fri Nov 8 3039 30:39:48',
        parentTaskId: '19114508_pCJAAcU3mK2Hw10',
        childTaskId: '19113408_pCJAAcU3mK2H334'
      },
      {
        key: '19104324_5O1HkLY3ueRrOce',
        taskId: '19104324_5O1HkLY3ueRrOce',
        jobId: '19104324_5O1HkLY3ue',
        orgId: 7862,
        engineName: 'Speech M',
        engineBuild: 'd62fbf93-095e-4923-879c-0416964c7b53',
        status: 'paused',
        errors: 2,
        taskInstances: '12345',
        linkToListOfTaskInstances: 'link',
        category: 'translation',
        scheduleStartTime: 'Fri Nov 8 3039 30:39:48',
        parentTaskId: '19114508_pCJAAcU3mK2Hw10',
        childTaskId: '19113408_pCJAAcU3mK2H345'
      },
      {
        key: '19104216_cjhoUa7SvlHAvj7',
        taskId: '19104216_cjhoUa7SvlHAvj7',
        jobId: '19104216_cjhoUa7Svl',
        orgId: 7862,
        engineName: 'Face Detection',
        engineBuild: '5bcbb69c-48d6-442a-b2d5-7106c7cf097c',
        status: 'paused',
        errors: 1,
        taskInstances: '12345',
        linkToListOfTaskInstances: 'link',
        category: 'faceDetection',
        scheduleStartTime: 'Fri Nov 8 3039 30:39:48',
        parentTaskId: '19114508_pCJAAcU3mK2Hw10',
        childTaskId: '19113408_pCJAAcU3mK2H345'
      },
      {
        key: '19104215_LVx9IShCPLdXqli',
        taskId: '19104215_LVx9IShCPLdXqli',
        jobId: '19104215_LVx9IShCPL',
        orgId: 7862,
        engineName: 'Face Detection',
        engineBuild: '5bcbb69c-48d6-442a-b2d5-7106c7cf097c',
        status: 'paused',
        errors: 3,
        taskInstances: '12345',
        linkToListOfTaskInstances: 'link',
        category: 'faceDetection',
        scheduleStartTime: 'Fri Nov 8 3039 30:39:48',
        parentTaskId: '19114508_pCJAAcU3mK2Hw10',
        childTaskId: '19113408_pCJAAcU3mK2H345'
      },
      {
        key: '19104215_ix3Vn8jstsF8T6e',
        taskId: '19104215_ix3Vn8jstsF8T6e',
        jobId: '19104215_ix3Vn8jsts',
        orgId: 7862,
        engineName: 'Face Detection',
        engineBuild: '5bcbb69c-48d6-442a-b2d5-7106c7cf097c',
        status: 'running',
        errors: 0,
        taskInstances: '12345',
        linkToListOfTaskInstances: 'link',
        category: 'faceDetection',
        scheduleStartTime: 'Fri Nov 8 3039 30:39:48',
        parentTaskId: '19114508_pCJAAcU3mK2Hw10',
        childTaskId: '19113408_pCJAAcU3mK2H345'
      }
    ]
  };


  render() {
    const { taskId } = this.props
    const dataTask = this.state.data.filter(item => item.taskId === taskId)[0];
    let dataTaskDetail = [];
    if(dataTask){
      dataTaskDetail = [
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
    }
 
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
