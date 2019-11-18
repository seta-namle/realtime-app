import React, { Component } from 'react';
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
        category: 'transcription'
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
        category: 'transcription'
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
        category: 'transcription'
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
        category: 'translation'
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
        category: 'faceDetection'
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
        category: 'faceDetection'
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
        category: 'faceDetection'
      }
    ]
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
