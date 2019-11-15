import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Card, Table, Button, Row, Col } from 'antd';
import styles from './styles.scss'
class ListOfWorkRequestsTable extends Component {
  render() {
    let listOfWorkRequestsData = [{
        key: '12345',
        engineInstanceId: '12345',
        taskId: '19114611_JXZKztSMGmorIrG',
        engineName: 'Speech M',
        taskEngineType: 'transcription',
        engineBuild: '345fbf93-095e-4923-879c-041694567b34',
        startTime: 'Fri Nov 8 3039 30:39:48',
        endTime: '',
        parentTaskId: '19114508_pCJAAcU3mK2Hw10',
        childTaskId: '19113408_pCJAAcU3mK2H334',
        status: 'running',
        errorCount: 0
    }, {
        key: '34567',
        engineInstanceId: '34567',
        taskId: '19114611_7hQPac339weJIIX',
        engineName: 'Stream Ingestion',
        taskEngineType: 'transcription',
        engineBuild: '15758787-2542-43ab-ac8a-dc322dd41e77',
        startTime: 'Fri Nov 8 3039 30:39:48',
        endTime: '',
        parentTaskId: '19114508_pCJAAcU3mK2Hw10',
        childTaskId: '19113408_pCJAAcU3mK2H323',
        status: 'running',
        errorCount: 0
    }, {
        key: '23567',
        engineInstanceId: '23567',
        taskId: '19114508_pCJAAcUsmKkHwNA',
        engineName: 'Webstream Adapter',
        taskEngineType: 'transcription',
        engineBuild: '444eff94-1bdd-4788-87f2-e5e32c29f7f3',
        startTime: 'Fri Nov 8 3039 30:39:48',
        endTime: '',
        parentTaskId: '19114508_pCJAAcU3mK2Hw10',
        childTaskId: '19113408_pCJAAcU3mK2H345',
        status: 'running',
        errorCount: 0
    }]

    const listOfWorkRequests = {
      title: "List of work requests",
      columns: [{
        title: 'Engine Instance Id',
        dataIndex: 'engineInstanceId'
      }, {
        title: 'Task Id',
        dataIndex: 'taskId'
      }, {
        title: 'Engine Name',
        dataIndex: 'engineName'
      }, {
        title: 'Task Engine Type',
        dataIndex: 'taskEngineType'
      }, {
        title: 'Engine Build',
        dataIndex: 'engineBuild'
      }, {
        title: 'Start Time',
        dataIndex: 'startTime'
      }, {
        title: 'End Time',
        dataIndex: 'endTime'
      }, {
        title: 'Parent Task Id',
        dataIndex: 'parentTaskId'
      }, {
        title: 'Child Task Id',
        dataIndex: 'childTaskId'
      }, {
        title: 'Status',
        dataIndex: 'status'
      }, {
        title: 'Error Count',
        dataIndex: 'errorCount'
      }],
      data: listOfWorkRequestsData
    }
    return (
      <div>
      <Card title={listOfWorkRequests.title} bordered={false} style={{ marginTop: "10px" }} >
        <Table
          pagination={{ pageSize: 10 }}
          columns={listOfWorkRequests.columns}
          dataSource={listOfWorkRequests.data}
        />
        {listOfWorkRequests.data.length && <Button type="primary">Export</Button>}
      </Card >
      </div>
    );
  }
}
export default ListOfWorkRequestsTable;
