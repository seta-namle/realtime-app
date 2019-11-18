import React, { Component, Fragment } from 'react';

import { Table, Progress, Input, Select, Icon, Row, Col, Card } from 'antd';
import { connect } from 'react-redux';
import { func, string } from 'prop-types';
import { ON_CLICK_DETAIL } from '../../state/modules/sideBar';
import { selectCurrentRoutePayload } from 'state/modules/routing';
import { getInitialTaskIntance } from 'state/modules/sideBar';
import JobDetail from './JobDetail';
import DashBoardCard from '../Cards';
import PieChart from '../PieChart';
import BarChart from '../BarChart';
import styles from './styles.scss';
import ActiveJobTable from '../Jobs/ActiveJobTable';
import ErrorTable from '../Tasks/ErrorTable';
import PerformanceChart from '../Tasks/PerformanceChart';
import PerformanceData from '../Tasks/PerformanceChart.json';
import {
  dataBarChart,
  dataChart,
  activeDataPieChart,
  completeDataPieChart,
  errorDataPieChart
} from './mockData';

const { Option } = Select;
const dataBarDefault = [
  { isEnabled: true, key: 'Running', color: '#8884d8' },
  { isEnabled: true, key: 'Started', color: '#82ca9d' },
  { isEnabled: true, key: 'Paused', color: '#ef7c4d' },
  { isEnabled: false, key: 'Completed', color: '#8884d8' },
  { isEnabled: false, key: 'Error', color: '#ec4258' },
  { isEnabled: true, key: 'All', color: '#6884d8' }
];

const legendPayloadDefault = [
  { value: 'Running', id: 'running', type: 'rect', color: '#8884d8' },
  { value: 'Started', id: 'started', type: 'rect', color: '#82ca9d' },
  { value: 'Paused', id: 'paused', type: 'rect', color: '#ef7c4d' },
  { value: 'All', id: 'all', type: 'rect', color: 'gray' }
];
class Tasks extends Component {
  static propTypes = {
    onClickDetail: func,
    tabName: string,
    jobId: string
  };

  state = {
    filterBarChart: 'all',
    dataBarChart: dataBarChart,
    activeIndex: null,
    chartData: PerformanceData.data,
    activeInstanceData: [],
    selectedLegend: 'all',
    pieChartType: null,
    activeIndexCompleted: null,
    activeIndexError: null,
    barChartType: 'Active',
    legend: 'all',
    dataBar: dataBarDefault,
    legendPayload: legendPayloadDefault
  };
  onClickRow = value => {
    const { onClickDetail, tabName } = this.props;
    const payload = {
      tabName,
      id: value.key
    };
    onClickDetail(payload);
  };

  renderDataBar = (data, status) => {
    const dataBar = data.map(item => {
      return {
        ...item,
        isEnabled: status.includes(item.key) ? true : false
      };
    });
    return dataBar;
  };
  onClickPieChart = (data, index) => {
    const {
      activeIndex,
      activeIndexCompleted,
      activeIndexError,
      dataBar
    } = this.state;
    const { payload } = data.payload;
    const filterBarChart = payload.key;
    const type = payload.type;
    if (type === 'Active') {
      if (activeIndex || activeIndex === 0) {
        this.setState({
          filterBarChart: 'all',
          activeIndex: null,
          barChartType: type,
          dataBar: dataBarDefault,
          legendPayload: legendPayloadDefault
        });
      } else {
        this.setState({
          filterBarChart,
          activeIndex: index,
          barChartType: type,
          activeIndexCompleted: null,
          activeIndexError: null,
          dataBar: this.renderDataBar(dataBar, [
            'Running',
            'Started',
            'Paused'
          ]),
          legendPayload: legendPayloadDefault
        });
      }
    }
    if (type === 'Completed') {
      if (activeIndexCompleted || activeIndexCompleted === 0) {
        this.setState({
          filterBarChart: 'all',
          activeIndexCompleted: null,
          barChartType: type,
          dataBar: this.renderDataBar(dataBar, ['Completed']),
          legendPayload: [
            {
              value: 'Completed',
              id: 'completed',
              type: 'rect',
              color: '#8884d8'
            }
          ]
        });
      } else {
        this.setState({
          filterBarChart,
          activeIndexCompleted: index,
          barChartType: type,
          activeIndex: null,
          activeIndexError: null,
          dataBar: this.renderDataBar(dataBar, ['Completed']),
          legendPayload: [
            {
              value: 'Completed',
              id: 'completed',
              type: 'rect',
              color: '#8884d8'
            }
          ]
        });
      }
    }

    if (type === 'Error') {
      if (activeIndexError || activeIndexError === 0) {
        this.setState({
          filterBarChart: 'all',
          activeIndexError: null,
          barChartType: type,
          dataBar: this.renderDataBar(dataBar, ['Error']),
          legendPayload: [
            {
              value: 'Completed',
              id: 'completed',
              type: 'rect',
              color: '#8884d8'
            }
          ]
        });
      } else {
        this.setState({
          filterBarChart,
          activeIndexError: index,
          barChartType: type,
          activeIndexCompleted: null,
          activeIndex: null,
          dataBar: this.renderDataBar(dataBar, ['Error']),
          legendPayload: [
            { value: 'Error', id: 'error', type: 'rect', color: '#ec4258' }
          ]
        });
      }
    }
  };

  onClickLegend = (data, index) => {
    let dataBarUpdate = this.state.dataBar;
    const key = data.value;
    if (key === 'All') {
      dataBarUpdate = dataBarDefault;
    } else {
      dataBarUpdate = dataBarUpdate.map(item => {
        return {
          ...item,
          isEnabled: item.key === key ? true : false
        };
      });
    }
    this.setState({
      dataBar: dataBarUpdate
    });
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

    const colors = ['#48a5a8', '#616d82', '#ef7c4d', '#ec4258', '#57d094'];

    const { jobId } = this.props;
    if (jobId) {
      return <JobDetail jobId={jobId} />;
    }
    const { dataBarChart, filterBarChart } = this.state;
    return (
      <Fragment>
        <Row gutter={[10, 10]}>
          <Col span={8}>
            <DashBoardCard
              cardTitle="42321"
              cardDes="active jobs"
              type="activeTasks"
            />
          </Col>
          <Col span={8}>
            <DashBoardCard
              dataChart={dataChart}
              chartColor="#57d094"
              cardTitle="100200"
              cardDes="completed Jobs (12 hrs)"
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
              data={activeDataPieChart}
              colors={colors}
              title={`Active jobs by engine category`}
              onClick={this.onClickPieChart}
              onPieEnter={this.onPieEnter}
              activeIndex={this.state.activeIndex}
              type={'Active'}
            />
          </Col>
          <Col span={8}>
            <PieChart
              data={completeDataPieChart}
              colors={colors}
              title={`Completed jobs by engine category`}
              onClick={this.onClickPieChart}
              onPieEnter={this.onPieEnter}
              activeIndex={this.state.activeIndexCompleted}
              type={'Completed'}
            />
          </Col>
          <Col span={8}>
            <PieChart
              data={errorDataPieChart}
              colors={colors}
              title={`Jobs errors by engine category`}
              onClick={this.onClickPieChart}
              onPieEnter={this.onPieEnter}
              activeIndex={this.state.activeIndexError}
              type={'Error'}
            />
          </Col>
        </Row>

        <BarChart
          data={dataBarChart.filter(item => item.key === filterBarChart)}
          type={this.state.barChartType}
          dataBar={this.state.dataBar}
          onClickLegend={this.onClickLegend}
          legend={this.state.legend}
          legendPayload={this.state.legendPayload}
          title={`jobs by status`}
        />

        <ActiveJobTable type={filterBarChart} />
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
    jobId: selectCurrentRoutePayload(state).id,
    initialInstanceData: getInitialTaskIntance(state)
  }),
  {
    onClickDetail: payload => ({
      type: ON_CLICK_DETAIL,
      payload
    })
  }
)(Tasks);
