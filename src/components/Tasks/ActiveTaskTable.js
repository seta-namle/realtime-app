import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Card, Table } from 'antd';
import { connect } from 'react-redux';
import { func, string } from 'prop-types';
import { ON_CLICK_DETAIL } from '../../state/modules/sideBar';
import { selectCurrentRoutePayload } from 'state/modules/routing';
class ActiveTaskTable extends Component {
  static propTypes = {
    onClickDetail: func,
    tabName: string,
    taskId: string
  };
  state = {
    data: [
      {
        key: 1,
        taskId: 1,
        jobId: 1,
        orgId: 7862,
        engineName: "Speech M",
        engineBuild: "123456789",
        status: "complete",
        errors: 1,
        taskInstances: "12345",
        linkToListOfTaskInstances: "link",
        category: 'translation'
      },
      {
        key: 2,
        taskId: 2,
        jobId: 2,
        orgId: 7862,
        engineName: "Speech M",
        engineBuild: "123456789",
        status: "complete",
        errors: 2,
        taskInstances: "12345",
        linkToListOfTaskInstances: "link",
        category: 'faceDetection'
      },
      {
        key: 3,
        taskId: 3,
        jobId: 3,
        orgId: 7862,
        engineName: "Speech M",
        engineBuild: "123456789",
        status: "complete",
        errors: 3,
        taskInstances: "12345",
        linkToListOfTaskInstances: "link",
        category: 'transcription'
      },
      {
        key: 4,
        taskId: 4,
        jobId: 4,
        orgId: 7862,
        engineName: "Speech M",
        engineBuild: "123456789",
        status: "complete",
        errors: 4,
        taskInstances: "12345",
        linkToListOfTaskInstances: "link",
        category: 'logoRecognition'
      },
      {
        key: 5,
        taskId: 5,
        jobId: 5,
        orgId: 7862,
        engineName: "Speech M",
        engineBuild: "123456789",
        status: "complete",
        errors: 5,
        taskInstances: "12345",
        linkToListOfTaskInstances: "link",
        category: 'licensePlate'
      },
      {
        key: 6,
        taskId: 6,
        jobId: 6,
        orgId: 7862,
        engineName: "Speech M",
        engineBuild: "123466789",
        status: "complete",
        errors: 6,
        taskInstances: "12345",
        linkToListOfTaskInstances: "link",
        category: 'licensePlate'
      },
      {
        key: 7,
        taskId: 7,
        jobId: 7,
        orgId: 7862,
        engineName: "Speech M",
        engineBuild: "123476789",
        status: "complete",
        errors: 7,
        taskInstances: "12345",
        linkToListOfTaskInstances: "link",
        category: 'licensePlate'
      },
    ]
  };
 
  onClickTaskDetail = (event) => {
    const { onClickDetail, tabName } = this.props;
    const payload = {
      tabName,
      id: event.target.text
    };
    onClickDetail(payload);
  }
  onClickJobDetail = (event) => {
    const { onClickDetail } = this.props;
    const payload = {
      tabName: "jobs",
      id: event.target.text
    };
    onClickDetail(payload);
  }
  
  render() {
    const activeTaskListTable = {
      title: "active (running and paused) task list",
      columns: [{
        title: 'Task ID',
        dataIndex: 'taskId',
        render: text => <a onClick={this.onClickTaskDetail}>{text}</a>
      }, {
        title: 'Job ID',
        dataIndex: 'jobId'
      }, {
        title: 'Org ID',
        dataIndex: 'orgId'
      }, {
        title: 'Engine Name',
        dataIndex: 'engineName'
      }, {
        title: 'Engine Build',
        dataIndex: 'engineBuild'
      }, {
        title: 'status',
        dataIndex: 'status'
      }, {
        title: '# errors',
        dataIndex: 'errors'
      }, {
        title: '# task instances',
        dataIndex: 'taskInstances'
      }, {
        title: 'link to list of task instances',
        dataIndex: 'linkToListOfTaskInstances',
        render: text => <a>{text}</a>
      }],
      data: this.state.data
    }
    const { type } = this.props;
   
    let dataRow = this.state.data;
    if(type !== 'all'){
      dataRow = dataRow.filter(item=>item.category === type);
    }
    return (
      < Card title={activeTaskListTable.title} bordered={false} style={{ marginTop: "10px" }}>
        <Table
          pagination={{ pageSize: 10 }}
          columns={activeTaskListTable.columns}
          dataSource={dataRow}
        />
      </Card >
    );
  }
}
export default connect(
  state => ({
    tabName: selectCurrentRoutePayload(state).tabName,
    taskId: selectCurrentRoutePayload(state).id
  }),
  {
    onClickDetail: payload => ({
      type: ON_CLICK_DETAIL,
      payload
    })
  }
)(ActiveTaskTable);
