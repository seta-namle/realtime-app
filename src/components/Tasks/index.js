import React, { Component, Fragment } from 'react';
import { Progress, Input, Select, Icon, Row, Col, Card } from 'antd';
import { connect } from 'react-redux';
import { func, string, arrayOf, shape } from 'prop-types';
import { ON_CLICK_DETAIL } from '../../state/modules/sideBar';
import { selectCurrentRoutePayload } from 'state/modules/routing';
import { getInitialTaskIntance } from 'state/modules/sideBar';
import JobDetail from './TaskDetail';
import DashBoardCard from '../Cards';
import PieChart from '../PieChart';
import BarChart from '../BarChart';
import TableList from '../TableList';
import styles from './styles.scss';
const { Option } = Select;
import {
  dataBarChart,
  dataChart,
  activeDataPieChart,
  completeDataPieChart,
  errorDataPieChart,
  dataActiveTask,
  dataErrorTask,
  PerformanceData
} from './mockData';

const dataBarStatusDefault = [
  { isEnabled: true, key: 'running', color: '#8884d8' },
  { isEnabled: true, key: 'started', color: '#82ca9d' },
  { isEnabled: true, key: 'paused', color: '#ef7c4d' },
  { isEnabled: false, key: 'completed', color: '#8884d8' },
  { isEnabled: false, key: 'error', color: '#ec4258' },
  { isEnabled: true, key: 'all', color: '#6884d8' }
];

const dataBarInstanceDefault = [
  { isEnabled: true, key: 'translation', color: '#6666ff' },
  { isEnabled: true, key: 'faceDetection', color: '#7fbf7f' },
  { isEnabled: true, key: 'transcription', color: '#ff7f7f' },
  { isEnabled: true, key: 'all', color: '#6884d8' }
];

const legendPayloadStatusDefault = [
  { value: 'Running', id: 'running', type: 'rect', color: '#8884d8', legendType: 'status' },
  { value: 'Started', id: 'started', type: 'rect', color: '#82ca9d', legendType: 'status' },
  { value: 'Paused', id: 'paused', type: 'rect', color: '#ef7c4d', legendType: 'status' },
  { value: 'All', id: 'all', type: 'rect', color: 'gray', legendType: 'status' }
];
const legendPayloadInstanceDefault = [
  { value: 'Translation', id: 'translation', type: 'rect', color: '#6666ff', legendType: 'instance' },
  { value: 'Face Detection', id: 'faceDetection', type: 'rect', color: '#7fbf7f', legendType: 'instance' },
  { value: 'Transcription', id: 'transcription', type: 'rect', color: '#ff7f7f', legendType: 'instance' },
  { value: 'All', id: 'all', type: 'rect', color: 'gray', legendType: 'instance' }
]
class Tasks extends Component {
  static propTypes = {
    onClickDetail: func,
    tabName: string,
    taskId: string,
    initialInstanceData: arrayOf(
      shape({})
    )
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
    dataBarStatus: dataBarStatusDefault,
    dataBarInstance: dataBarInstanceDefault,
    legendPayloadStatus: legendPayloadStatusDefault,
    legendPayloadInstance: legendPayloadInstanceDefault,
    activeTaskColumns: [
      {
        title: 'Task ID',
        dataIndex: 'taskId',
        render: text => <a onClick={this.onClickTaskDetail}>{text}</a>
      },
      {
        title: 'Job ID',
        dataIndex: 'jobId'
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
    dataActiveTask: dataActiveTask,
    errorColumns: [
      {
        title: 'Error ID',
        dataIndex: 'errorId',
        render: text => <a onClick={this.showModal}>{text}</a>
      },
      {
        title: 'Error Code',
        dataIndex: 'errorCode'
      },
      {
        title: 'Error Source Type',
        dataIndex: 'errorSourceType'
      },
      {
        title: 'Source ID',
        dataIndex: 'sourceId'
      },
      {
        title: 'Severity',
        dataIndex: 'severity'
      },
      {
        title: 'timestamp',
        dataIndex: 'timestamp'
      },
      {
        title: 'link to details',
        dataIndex: 'linkToDetails',
        render: text => <a>{text}</a>
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

    const { activeIndex, activeIndexCompleted, activeIndexError, dataBarStatus } = this.state;
    const { payload } = data.payload;
    const filterBarChart = payload.key;
    const type = payload.type;
    if (type === 'Active') {
      if (activeIndex || activeIndex === 0) {
        this.setState({
          filterBarChart: 'all',
          activeIndex: null,
          barChartType: type,
          dataBarStatus: dataBarStatusDefault,
          legendPayloadStatus: legendPayloadStatusDefault
        });
      } else {
        this.setState({
          filterBarChart,
          activeIndex: index,
          barChartType: type,
          activeIndexCompleted: null,
          activeIndexError: null,
          dataBarStatus: this.renderDataBar(dataBarStatus, ['running', 'started', 'paused']),
          legendPayloadStatus: legendPayloadStatusDefault
        });
      }
    }
    if (type === 'Completed') {
      if (activeIndexCompleted || activeIndexCompleted === 0) {
        this.setState({
          filterBarChart: 'all',
          activeIndexCompleted: null,
          barChartType: type,
          dataBarStatus: this.renderDataBar(dataBarStatus, ['completed']),
          legendPayloadStatus: [{ value: 'Completed', id: 'completed', type: 'rect', color: '#8884d8' }]
        });
      } else {
        this.setState({
          filterBarChart,
          activeIndexCompleted: index,
          barChartType: type,
          activeIndex: null,
          activeIndexError: null,
          dataBarStatus: this.renderDataBar(dataBarStatus, ['completed']),
          legendPayloadStatus: [{ value: 'Completed', id: 'completed', type: 'rect', color: '#8884d8' }]
        });
      }
    }

    if (type === 'Error') {
      if (activeIndexError || activeIndexError === 0) {
        this.setState({
          filterBarChart: 'all',
          activeIndexError: null,
          barChartType: type,
          dataBarStatus: this.renderDataBar(dataBarStatus, ['error']),
          legendPayloadStatus: [{ value: 'Error', id: 'error', type: 'rect', color: '#ec4258' }]
        });
      } else {
        this.setState({
          filterBarChart,
          activeIndexError: index,
          barChartType: type,
          activeIndexCompleted: null,
          activeIndex: null,
          dataBarStatus: this.renderDataBar(dataBarStatus, ['error']),
          legendPayloadStatus: [{ value: 'Error', id: 'error', type: 'rect', color: '#ec4258' }]
        });
      }
    }
  };

  renderDataLegend = (data, id) => {
    return data.map(item => {
      return {
        ...item,
        isEnabled: item.key === id ? true : false
      }
    })
  }
  onClickLegend = (data, index) => {
    const { dataBarStatus, dataBarInstance } = this.state;
    let dataBarStatusUpdate = dataBarStatus;
    let dataBarInstanceUpdate = dataBarInstance;
    const { initialInstanceData } = this.props;
    const { id, legendType } = data;

    if (id === 'all') {
      if (legendType === 'status') {
        dataBarStatusUpdate = dataBarStatusDefault
      } else {
        dataBarInstanceUpdate = dataBarInstanceDefault
      }
    } else {
      if (legendType === 'status') {
        dataBarStatusUpdate = this.renderDataLegend(dataBarStatusUpdate, id);
      } else {
        dataBarInstanceUpdate = this.renderDataLegend(dataBarInstanceUpdate, id);
      }
    }

    this.setState({
      dataBarStatus: dataBarStatusUpdate,
      dataBarInstance: dataBarInstanceUpdate
    })
    if (legendType === 'instance') {
      const activeItem = initialInstanceData.filter(
        item => item.task_type === id
      );

      let activeInstanceData = initialInstanceData;
      if (activeItem.length) {
        activeInstanceData = PerformanceData.data.reduce((result, value) => {
          result[0].total += value[id];
          result
          return result;
        }, activeItem);
      }
      this.setState({
        activeInstanceData,
        selectedLegend: id
      })
    }
  }
  handleSelectBar = (data, index) => {
    const { transcription, faceDetection, translation } = data.payload;
    const totalNum = transcription + faceDetection + translation;
    const { activeInstanceData } = this.state;
    const { initialInstanceData } = this.props
    const holder = activeInstanceData.length ? [...activeInstanceData] : [...initialInstanceData];
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
      const colorsByType = {
        transcription: '#ff7f7f',
        faceDetection: '#7fbf7f',
        translation: '#6666ff'
      };

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
              strokeColor={colorsByType[value.task_type]}
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

  onClickTaskDetail = event => {
    const { onClickDetail, tabName } = this.props;
    const payload = {
      tabName,
      id: event.target.text
    };
    onClickDetail(payload);
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

    const { taskId } = this.props;
    if (taskId) {
      return <JobDetail taskId={taskId} />;
    }
    const { dataBarChart,
      filterBarChart,
      legendPayloadStatus,
      legendPayloadInstance,
      dataBarStatus,
      dataBarInstance,
      activeTaskColumns,
      dataActiveTask,
      errorColumns
    } = this.state;
    return (
      <Fragment>
        <Row gutter={16}>
          <Col span={24} md={8}>
            <DashBoardCard
              cardTitle="42321"
              cardDes="active tasks"
              type="activeTasks"
            />
          </Col>
          <Col span={24} md={8} className={styles['block-dashBoard__marginTop']} >
            <DashBoardCard
              dataChart={dataChart}
              chartColor="#57d094"
              cardTitle="100200"
              cardDes="completed tasks (12 hrs)"
              cardValue="70%"
              cardIcon="folder-open"
            />
          </Col>
          <Col span={24} md={8} className={styles['block-dashBoard__marginTop']}>
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

        <Row gutter={16}>
          <Col span={24} lg={8} >
            <PieChart
              data={activeDataPieChart}
              colors={colors}
              title={`Active tasks by engine category`}
              onClick={this.onClickPieChart}
              onPieEnter={this.onPieEnter}
              activeIndex={this.state.activeIndex}
              type={'Active'}
            />
          </Col>
          <Col span={24} lg={8} >
            <PieChart
              data={completeDataPieChart}
              colors={colors}
              title={`Completed tasks by engine category`}
              onClick={this.onClickPieChart}
              onPieEnter={this.onPieEnter}
              activeIndex={this.state.activeIndexCompleted}
              type={'Completed'}
            />
          </Col>
          <Col span={24} lg={8} >
            <PieChart
              data={errorDataPieChart}
              colors={colors}
              title={`Task errors by engine category`}
              onClick={this.onClickPieChart}
              onPieEnter={this.onPieEnter}
              activeIndex={this.state.activeIndexError}
              type={'Error'}
            />
          </Col>
        </Row>

        <BarChart
          data={dataBarChart.filter(item => item.key === filterBarChart)}
          dataBar={dataBarStatus}
          onClickLegend={this.onClickLegend}
          legendPayload={legendPayloadStatus}
          title={`${this.state.barChartType} tasks by status`}
          isLineChart
        />

        <TableList
          columns={activeTaskColumns}
          title={'Active (running and paused) task list'}
          dataRow={filterBarChart === 'all' ? dataActiveTask : dataActiveTask.filter(item => item.category === filterBarChart)}
        />
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

          <BarChart
            data={this.state.chartData}
            dataBar={dataBarInstance}
            onClickLegend={this.onClickLegend}
            legendPayload={legendPayloadInstance}
            title={`Active task instance count by category by server`}
            isLineChart={false}
            onClick={this.handleSelectBar}
          />
        </Card>
        <Card style={{ marginTop: 10 }}>
          <TableList
            columns={activeInstanceColumn}
            title={'Error list'}
            dataRow={this.state.activeInstanceData.length
              ? this.state.activeInstanceData
              : this.props.initialInstanceData}
          />
        </Card>

        <TableList
          columns={errorColumns}
          title={'Error list'}
          dataRow={dataErrorTask}
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
