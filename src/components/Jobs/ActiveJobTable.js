import React, { Component } from 'react';
import { Card, Table } from 'antd';
import { connect } from 'react-redux';
import { func, string } from 'prop-types';
import { ON_CLICK_DETAIL } from '../../state/modules/sideBar';
import { selectCurrentRoutePayload } from 'state/modules/routing';
import { dataActiveJob } from './mockData';

class ActiveTaskTable extends Component {
  static propTypes = {
    onClickDetail: func,
    tabName: string,
    taskId: string
  };
  state = {
    data: dataActiveJob
  };

  onClickTaskDetail = event => {
    const { onClickDetail, tabName } = this.props;
    const payload = {
      tabName,
      id: event.target.text
    };
    onClickDetail(payload);
  };
  onClickJobDetail = event => {
    const { onClickDetail } = this.props;
    const payload = {
      tabName: 'jobs',
      id: event.target.text
    };
    onClickDetail(payload);
  };

  render() {
    const activeTaskListTable = {
      title: 'active (running and paused) job list',
      columns: [
        {
          title: 'Job ID',
          dataIndex: 'jobId',
          render: text => <a onClick={this.onClickTaskDetail}>{text}</a>
        },
        {
          title: 'Task ID',
          dataIndex: 'taskId'
        },
        {
          title: 'Org ID',
          dataIndex: 'orgId'
        },
        {
          title: 'Engine Name',
          dataIndex: 'engineName'
        },
        {
          title: 'Engine Build',
          dataIndex: 'engineBuild'
        },
        {
          title: 'status',
          dataIndex: 'status'
        },
        {
          title: '# errors',
          dataIndex: 'errors'
        },
        {
          title: '# task instances',
          dataIndex: 'taskInstances'
        },
        {
          title: 'link to list of task instances',
          dataIndex: 'linkToListOfTaskInstances',
          render: text => <a>{text}</a>
        }
      ],
      data: this.state.data
    };
    const { type } = this.props;

    let dataRow = this.state.data;
    if (type !== 'all') {
      dataRow = dataRow.filter(item => item.category === type);
    }
    return (
      <Card
        title={activeTaskListTable.title}
        bordered={false}
        style={{ marginTop: '10px' }}
      >
        <Table
          pagination={{ pageSize: 10 }}
          columns={activeTaskListTable.columns}
          dataSource={dataRow}
        />
      </Card>
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
