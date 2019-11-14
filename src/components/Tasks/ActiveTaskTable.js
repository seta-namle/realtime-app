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
    let activeTaskListData = []
    for (let i = 1; i < 15; i++) {
      activeTaskListData.push({
        key: i,
        taskId: i,
        jobId: i,
        orgId: 7862,
        engineName: "Speech M",
        engineBuild: "123456789",
        status: "complete",
        errors: i,
        taskInstances: "12345",
        linkToListOfTaskInstances: "link"
      });
    }
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
      data: activeTaskListData
    }
    return (
      < Card title={activeTaskListTable.title} bordered={false} style={{ marginTop: "10px" }}>
        <Table
          pagination={{ pageSize: 10 }}
          columns={activeTaskListTable.columns}
          dataSource={activeTaskListTable.data}
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
