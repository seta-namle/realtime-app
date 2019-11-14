import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Table, Progress } from 'antd';
import { connect } from 'react-redux';
import { func, string } from 'prop-types';
import { ON_CLICK_DETAIL } from '../../state/modules/sideBar';
import { selectCurrentRoutePayload } from 'state/modules/routing';
import JobDetail from './TaskDetail';
import PerformanceChart from './PerformanceChart';
import PerformanceData from './PerformanceChart.json';
class Tasks extends Component {
  static propTypes = {
    onClickDetail: func,
    tabName: string,
    taskId: string
  };
  state = {
    activeInstanceData: [
      {
        key: '123-466-789',
        task_type: 'All',
        color: '',
        total: 120000,
        percentage_total: 100,
        unique_build: 78
      },
      {
        key: '123-466-123',
        task_type: 'transcription',
        color: <Progress strokeColor="#ff7f7f" percent={54} showInfo={false} />,
        total: 12000,
        percentage_total: 54,
        unique_build: 3
      },
      {
        key: '123-466-536',
        task_type: 'faceDetection',
        color: <Progress strokeColor="#7fbf7f" percent={12} showInfo={false} />,
        total: 3100,
        percentage_total: 12,
        unique_build: 1
      },
      {
        key: '123-466-878',
        task_type: 'translation',
        color: <Progress strokeColor="#6666ff" percent={42} showInfo={false} />,
        total: 26000,
        percentage_total: 42,
        unique_build: 12
      }
    ]
  };

  onClickRow = value => {
    const { onClickDetail, tabName } = this.props;
    const payload = {
      tabName,
      id: value.key
    };
    onClickDetail(payload);
  };

  handleSelectBar = (data, index) => {
    const { transcription, faceDetection, translation } = data.payload;
    const totalNum = transcription + faceDetection + translation;
    const holder = [...this.state.activeInstanceData];
    const tableData = holder.reduce((acc, value, index) => {
      if (value.task_type === 'All') {
        const all = {
          ...value,
          total: totalNum,
          percentage_total: (totalNum / totalNum) * 100,
          unique_build: 30
        };
        acc.push(all);
        return acc;
      }
      const taskTypes = ['transcription', 'faceDetection', 'translation'];
      const colorsByType = ['#ff7f7f', '#7fbf7f', '#6666ff'];
      if (taskTypes.includes(value.task_type)) {
        const percentage_total = (
          (data.payload[value.task_type] / data.payload.total) *
          100
        ).toFixed(0);
        const holder = {
          ...value,
          total: data.payload[value.task_type],
          percentage_total,
          color: (
            <Progress
              strokeColor={colorsByType[index - 1]}
              percent={percentage_total}
              showInfo={false}
            />
          )
        };
        acc.push(holder);
        return acc;
      }
    }, []);
    this.setState({ activeInstanceData: tableData });
  };

  render() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        render: text => <a>{text}</a>
      },
      {
        title: 'Status',
        dataIndex: 'status'
      },
      {
        title: 'Date',
        dataIndex: 'date'
      }
    ];

    const activeInstanceColumn = [
      {
        title: 'Task type',
        dataIndex: 'task_type'
      },
      {
        title: 'Color',
        dataIndex: 'color'
      },
      {
        title: 'Total',
        dataIndex: 'total'
      },
      {
        title: '% Total',
        dataIndex: 'percentage_total'
      },
      {
        title: 'Unique build',
        dataIndex: 'unique_build'
      },
      {
        title: 'Error running',
        dataIndex: 'error_running'
      },
      {
        title: 'Paused',
        dataIndex: 'paused'
      },
      {
        title: 'Expand Row Link',
        dataIndex: 'expand_row_link'
      }
    ];
    const data = [
      {
        key: '123456789-897-789',
        name: 'Tasks demo 1',
        status: 'Complete',
        date: 'Fri Nov 8 2019 10:19:48'
      },
      {
        key: '123456789-897-787',
        name: 'Tasks demo 2',
        status: 'Complete',
        date: 'Fri Nov 8 2019 10:19:48'
      },
      {
        key: '123456789-897-987',
        name: 'Tasks demo 3',
        status: 'Complete',
        date: 'Fri Nov 8 2019 10:19:48'
      },
      {
        key: '123456789-897-888',
        name: 'Tasks demo 4',
        status: 'Complete',
        date: 'Fri Nov 8 2019 10:19:48'
      }
    ];

    // rowSelection object indicates the need for row selection
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(
          `selectedRowKeys: ${selectedRowKeys}`,
          'selectedRows: ',
          selectedRows
        );
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name
      })
    };
    const { taskId } = this.props;
    if (taskId) {
      return <JobDetail taskId={taskId} />;
    }
    return (
      <Fragment>
        TASKS
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          onRow={(record, rowIndex) => {
            return {
              onClick: event => {
                this.onClickRow(record);
              }
            };
          }}
        />
        <PerformanceChart
          data={PerformanceData.data}
          onClick={this.handleSelectBar}
        />
        <Table
          rowSelection={rowSelection}
          columns={activeInstanceColumn}
          dataSource={this.state.activeInstanceData}
        />
      </Fragment>
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
)(Tasks);
