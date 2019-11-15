import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Table, Progress, Input, Select, Icon, Row, Col, Card } from 'antd';
import { connect } from 'react-redux';
import { func, string } from 'prop-types';
import { ON_CLICK_DETAIL } from '../../state/modules/sideBar';
import { selectCurrentRoutePayload } from 'state/modules/routing';
import { getInitialTaskIntance } from 'state/modules/sideBar';
import JobDetail from './TaskDetail';
import DashBoardCard from '../Cards';
import PieChart from '../PieChart';
import BarChart from '../BarChart';

import styles from './styles.scss';
import ActiveTaskTable from './ActiveTaskTable';
import ErrorTable from './ErrorTable';
import PerformanceChart from './PerformanceChart';
import PerformanceData from './PerformanceChart.json';
import { random } from 'node-forge';
const { Option } = Select;
const TOTAL_HOURS = 12;
const _all = [];
for (let j = 1; j <= 6; j++) {
  let _key = 'all';
  switch (j) {
    case 1:
      _key = 'all';
      break;
    case 2:
      _key = 'translation';
      break;
    case 3:
      _key = 'faceDetection';
      break;
    case 4:
      _key = 'transcription';
      break;
    case 5:
      _key = 'logoRecognition';
      break;
    case 6:
      _key = 'licensePlate';
  }
  for (let i = 1; i <= TOTAL_HOURS; i++) {
    const tmp = {
      name: `${i}:00 AM`,
      Running: Math.round(Math.random() * 10000),
      Started: Math.round(Math.random() * 5000),
      Paused: Math.round(Math.random() * 2000),
      'Error rate': Math.round(Math.random() * 1000),
      key: _key
    };
    _all.push(tmp);
  }
}

class Tasks extends Component {
  static propTypes = {
    onClickDetail: func,
    tabName: string,
    taskId: string
  };

  state = {
    filterBarChart: 'all',
    dataBarChart: [..._all],
    activeIndex: null,
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
  onClickPieChart = (data, index) => {
    const { activeIndex } = this.state;
    const filterBarChart = data.payload.payload.key;
    if (activeIndex || activeIndex === 0) {
      this.setState({
        filterBarChart: 'all',
        activeIndex: null
      });
    } else {
      this.setState({
        filterBarChart,
        activeIndex: index
      });
    }
  };
  // onPieEnter = (data, index) => {
  //   console.log(index)
  //   this.setState({
  //     activeIndex: index
  //   })
  // }

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

    const dataChart = [
      { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
      { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
      { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
      { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
      { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
      { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
      { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 }
    ];
    const dataPieChart = [
      { name: 'Translation', value: 5231, key: 'translation' },
      { name: 'Face Detection', value: 4236, key: 'faceDetection' },
      { name: 'Transcription', value: 25380, key: 'transcription' },
      { name: 'Logo Recognition ', value: 4274, key: 'logoRecognition' },
      { name: 'License Plate (ALPR)', value: 3200, key: 'licensePlate' }
    ];
    const colors = ['#48a5a8', '#616d82', '#ef7c4d', '#ec4258', '#57d094'];

    const { taskId } = this.props;
    if (taskId) {
      return <JobDetail taskId={taskId} />;
    }

    // const data = {
    //   active: 40000,
    //   running: 2
    // }

    const { dataBarChart, filterBarChart } = this.state;
    return (
      <Fragment>
        <Row gutter={[10, 10]}>
          <Col span={8}>
            <DashBoardCard
              cardTitle="42321"
              cardDes="active tasks"
              type="activeTasks"
            />
          </Col>
          <Col span={8}>
            <DashBoardCard
              dataChart={dataChart}
              chartColor="#57d094"
              cardTitle="100200"
              cardDes="completed tasks (12 hrs)"
              cardValue="70%"
              cardIcon="folder-open"
            />
          </Col>
          <Col span={8}>
            <DashBoardCard
              dataChart={dataChart}
              chartColor="#ed4661"
              cardTitle="1500"
              cardDes="completed errors (12 hrs)"
              cardValue="1%"
              cardIcon="folder-open"
            />
          </Col>
        </Row>

        <Row gutter={[10, 10]}>
          <Col span={8}>
            <PieChart
              data={dataPieChart}
              colors={colors}
              title={`Active tasks by engine category`}
              onClick={this.onClickPieChart}
              onPieEnter={this.onPieEnter}
              activeIndex={this.state.activeIndex}
            />
          </Col>
          <Col span={8}>
            <PieChart
              data={dataPieChart}
              colors={colors}
              title={`Completed tasks by engine category`}
            />
          </Col>
          <Col span={8}>
            <PieChart
              data={dataPieChart}
              colors={colors}
              title={`Task errors by engine category`}
            />
          </Col>
        </Row>

        <BarChart
          data={dataBarChart.filter(item => item.key === filterBarChart)}
        />
        {/* TASKS
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
        /> */}
        <ActiveTaskTable type={filterBarChart} />

        <Card style={{ marginTop: 10 }}>
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
        </Card>
        <Card style={{ marginTop: 10 }}>
          <Table
            rowSelection={rowSelection}
            columns={activeInstanceColumn}
            dataSource={
              this.state.activeInstanceData.length
                ? this.state.activeInstanceData
                : this.props.initialInstanceData
            }
          />
        </Card>

        <ErrorTable />
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
