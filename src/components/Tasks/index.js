import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Table, Progress, Input, Select, Icon, Row, Col } from 'antd';
import { connect } from 'react-redux';
import { func, string } from 'prop-types';
import { ON_CLICK_DETAIL } from '../../state/modules/sideBar';
import { selectCurrentRoutePayload } from 'state/modules/routing';
import { getInitialTaskIntance } from 'state/modules/sideBar';
import JobDetail from './TaskDetail';
import PerformanceChart from './PerformanceChart';
import PerformanceData from './PerformanceChart.json';
const { Option } = Select;
class Tasks extends Component {
  static propTypes = {
    onClickDetail: func,
    tabName: string,
    taskId: string
  };
  state = {
    chartData: PerformanceData.data,
    activeInstanceData: [],
    selectedLegend: 'all'
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

  handleSortChange = (value, options) => {
    const data = [...this.state.chartData];
    if (value === 'ascending') {
      this.setState({
        chartData: data.sort((a, b) => a.total - b.total)
      });
    } else {
      this.setState({
        chartData: data.sort((a, b) => b.total - a.total)
      });
    }
  };
  handleClickLegend = data => {
    const { id } = data;
    const activeItem = this.props.initialInstanceData.filter(
      item => item.task_type === id
    );
    console.log('aciveItem', activeItem);
    let activeInstanceData = this.props.initialInstanceData;
    if (activeItem.length) {
      activeInstanceData = PerformanceData.data.reduce((result, value) => {
        result[0].total += value[id];
        return result;
      }, activeItem);
    }
    this.setState({
      activeInstanceData,
      selectedLegend: id
    });
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
          pagination={false}
        />
        <Row>
          <Col span={16} />

          <Col span={8}>
            <Input.Group compact suffix={<Icon type="caret-up" />}>
              <Select
                style={{ width: '100%' }}
                defaultValue="Sort"
                onChange={this.handleSortChange}
              >
                <Option value="ascending">Ascending</Option>
                <Option value="descending">Descending</Option>
              </Select>
            </Input.Group>
          </Col>
        </Row>
        <PerformanceChart
          data={this.state.chartData}
          onClick={this.handleSelectBar}
          onClickLegend={this.handleClickLegend}
          selectedLegend={this.state.selectedLegend}
        />
        <Table
          rowSelection={rowSelection}
          columns={activeInstanceColumn}
          dataSource={
            this.state.activeInstanceData.length
              ? this.state.activeInstanceData
              : this.props.initialInstanceData
          }
        />
      </Fragment>
    );
  }
}
export default connect(
  state => ({
    tabName: selectCurrentRoutePayload(state).tabName,
    taskId: selectCurrentRoutePayload(state).id,
    initialInstanceData: getInitialTaskIntance(state)
  }),
  {
    onClickDetail: payload => ({
      type: ON_CLICK_DETAIL,
      payload
    })
  }
)(Tasks);
