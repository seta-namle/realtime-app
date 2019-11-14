import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Table, Row, Col, Card } from 'antd';
import { connect } from 'react-redux';
import { func, string } from 'prop-types';
import { ON_CLICK_DETAIL } from '../../state/modules/sideBar';
import { selectCurrentRoutePayload } from 'state/modules/routing';
import JobDetail from './TaskDetail';
import DashBoardCard from '../Cards';
import PieChart from '../PieChart';
import BarChart from '../BarChart';

import styles from './styles.scss';
import ActiveTaskTable from './ActiveTaskTable';
import ErrorTable from './ErrorTable';
class Tasks extends Component {
  static propTypes = {
    onClickDetail: func,
    tabName: string,
    taskId: string
  };

  state = {
    filterBarChart: 'all',
    dataBarChart: [
      {
        name: '01:00 AM',
        Running: 4000,
        Started: 2400,
        Paused: 2400,
        'Error rate': 2400,
        key: 'all'
      },
      {
        name: '02:00 AM',
        Running: 3000,
        Started: 1398,
        Paused: 2210,
        'Error rate': 1200,
        key: 'all'
      },
      {
        name: '03:00 AM',
        Running: 2000,
        Started: 9800,
        Paused: 2290,
        'Error rate': 2000,
        key: 'all'
      },
      {
        name: '04:00 AM',
        Running: 2780,
        Started: 3908,
        Paused: 2000,
        'Error rate': 3000,
        key: 'all'
      },
      {
        name: '05:00 AM',
        Running: 1890,
        Started: 4800,
        Paused: 2181,
        'Error rate': 2200,
        key: 'all'
      },
      {
        name: '06:00 AM',
        Running: 2390,
        Started: 3800,
        Paused: 2500,
        'Error rate': 1000,
        key: 'all'
      },
      {
        name: '07:00 AM',
        Running: 3490,
        Started: 4300,
        Paused: 2100,
        'Error rate': 1200,
        key: 'all'
      },
      {
        name: '08:00 AM',
        Running: 3490,
        Started: 4300,
        Paused: 2100,
        'Error rate': 1200,
        key: 'all'
      },
      {
        name: '09:00 AM',
        Running: 3490,
        Started: 4300,
        Paused: 2100,
        'Error rate': 1200,
        key: 'all'
      },
      {
        name: '10:00 AM',
        Running: 3490,
        Started: 4300,
        Paused: 2100,
        'Error rate': 1200,
        key: 'all'
      },
      {
        name: '11:00 AM',
        Running: 3490,
        Started: 4300,
        Paused: 2100,
        'Error rate': 1200,
        key: 'all'
      },
      {
        name: '12:00 AM',
        Running: 3490,
        Started: 4300,
        Paused: 2100,
        'Error rate': 1200,
        key: 'all'
      },

      {
        name: '01:00 AM',
        Running: 800,
        Started: 300,
        Paused: 300,
        'Error rate': 800,
        key: 'translation'
      },
      {
        name: '02:00 AM',
        Running: 600,
        Started: 200,
        Paused: 500,
        'Error rate': 400,
        key: 'translation'
      },
      {
        name: '03:00 AM',
        Running: 500,
        Started: 1800,
        Paused: 500,
        'Error rate': 300,
        key: 'translation'
      },
      {
        name: '04:00 AM',
        Running: 580,
        Started: 780,
        Paused: 500,
        'Error rate': 200,
        key: 'translation'
      },
      {
        name: '05:00 AM',
        Running: 300,
        Started: 800,
        Paused: 200,
        'Error rate': 100,
        key: 'translation'
      },
      {
        name: '06:00 AM',
        Running: 320,
        Started: 300,
        Paused: 220,
        'Error rate': 100,
        key: 'translation'
      },
      {
        name: '07:00 AM',
        Running: 200,
        Started: 820,
        Paused: 220,
        'Error rate': 200,
        key: 'translation'
      },
      {
        name: '08:00 AM',
        Running: 3490,
        Started: 4300,
        Paused: 2100,
        'Error rate': 1200,
        key: 'translation'
      },
      {
        name: '09:00 AM',
        Running: 3490,
        Started: 4300,
        Paused: 2100,
        'Error rate': 1200,
        key: 'translation'
      },
      {
        name: '10:00 AM',
        Running: 3490,
        Started: 4300,
        Paused: 2100,
        'Error rate': 1200,
        key: 'translation'
      },
      {
        name: '11:00 AM',
        Running: 3490,
        Started: 4300,
        Paused: 2100,
        'Error rate': 1200,
        key: 'translation'
      },
      {
        name: '12:00 AM',
        Running: 3490,
        Started: 4300,
        Paused: 2100,
        'Error rate': 1200,
        key: 'translation'
      },

      {
        name: '01:00 AM',
        Running: 680,
        Started: 300,
        Paused: 300,
        'Error rate': 120,
        key: 'faceDetection'
      },
      {
        name: '02:00 AM',
        Running: 580,
        Started: 200,
        Paused: 500,
        'Error rate': 220,
        key: 'faceDetection'
      },
      {
        name: '03:00 AM',
        Running: 460,
        Started: 1800,
        Paused: 500,
        'Error rate': 200,
        key: 'faceDetection'
      },
      {
        name: '04:00 AM',
        Running: 580,
        Started: 780,
        Paused: 500,
        'Error rate': 300,
        key: 'faceDetection'
      },
      {
        name: '05:00 AM',
        Running: 300,
        Started: 800,
        Paused: 200,
        'Error rate': 320,
        key: 'faceDetection'
      },
      {
        name: '06:00 AM',
        Running: 320,
        Started: 300,
        Paused: 220,
        'Error rate': 120,
        key: 'faceDetection'
      },
      {
        name: '07:00 AM',
        Running: 200,
        Started: 820,
        Paused: 220,
        'Error rate': 100,
        key: 'faceDetection'
      },
      {
        name: '08:00 AM',
        Running: 3490,
        Started: 4300,
        Paused: 2100,
        'Error rate': 1200,
        key: 'faceDetection'
      },
      {
        name: '09:00 AM',
        Running: 3490,
        Started: 4300,
        Paused: 2100,
        'Error rate': 1200,
        key: 'faceDetection'
      },
      {
        name: '10:00 AM',
        Running: 3490,
        Started: 4300,
        Paused: 2100,
        'Error rate': 1200,
        key: 'faceDetection'
      },
      {
        name: '11:00 AM',
        Running: 3490,
        Started: 4300,
        Paused: 2100,
        'Error rate': 1200,
        key: 'faceDetection'
      },
      {
        name: '12:00 AM',
        Running: 3490,
        Started: 4300,
        Paused: 2100,
        'Error rate': 1200,
        key: 'faceDetection'
      },

      {
        name: '01:00 AM',
        Running: 380,
        Started: 200,
        Paused: 200,
        'Error rate': 220,
        key: 'transcription'
      },
      {
        name: '02:00 AM',
        Running: 240,
        Started: 200,
        Paused: 180,
        'Error rate': 120,
        key: 'transcription'
      },
      {
        name: '03:00 AM',
        Running: 180,
        Started: 800,
        Paused: 280,
        'Error rate': 210,
        key: 'transcription'
      },
      {
        name: '04:00 AM',
        Running: 180,
        Started: 200,
        Paused: 200,
        'Error rate': 180,
        key: 'transcription'
      },
      {
        name: '05:00 AM',
        Running: 300,
        Started: 220,
        Paused: 200,
        'Error rate': 140,
        key: 'transcription'
      },
      {
        name: '06:00 AM',
        Running: 120,
        Started: 200,
        Paused: 100,
        'Error rate': 420,
        key: 'transcription'
      },
      {
        name: '07:00 AM',
        Running: 180,
        Started: 180,
        Paused: 200,
        'Error rate': 180,
        key: 'transcription'
      },
      {
        name: '08:00 AM',
        Running: 3490,
        Started: 4300,
        Paused: 2100,
        'Error rate': 1200,
        key: 'transcription'
      },
      {
        name: '09:00 AM',
        Running: 3490,
        Started: 4300,
        Paused: 2100,
        'Error rate': 1200,
        key: 'transcription'
      },
      {
        name: '10:00 AM',
        Running: 3490,
        Started: 4300,
        Paused: 2100,
        'Error rate': 1200,
        key: 'transcription'
      },
      {
        name: '11:00 AM',
        Running: 3490,
        Started: 4300,
        Paused: 2100,
        'Error rate': 1200,
        key: 'transcription'
      },
      {
        name: '12:00 AM',
        Running: 3490,
        Started: 4300,
        Paused: 2100,
        'Error rate': 1200,
        key: 'transcription'
      },

      {
        name: '01:00 AM',
        Running: 200,
        Started: 100,
        Paused: 200,
        'Error rate': 100,
        key: 'logoRecognition'
      },
      {
        name: '02:00 AM',
        Running: 80,
        Started: 60,
        Paused: 80,
        'Error rate': 120,
        key: 'logoRecognition'
      },
      {
        name: '03:00 AM',
        Running: 60,
        Started: 80,
        Paused: 98,
        'Error rate': 240,
        key: 'logoRecognition'
      },
      {
        name: '04:00 AM',
        Running: 180,
        Started: 80,
        Paused: 200,
        'Error rate': 210,
        key: 'logoRecognition'
      },
      {
        name: '05:00 AM',
        Running: 110,
        Started: 220,
        Paused: 80,
        'Error rate': 260,
        key: 'logoRecognition'
      },
      {
        name: '06:00 AM',
        Running: 180,
        Started: 100,
        Paused: 30,
        'Error rate': 200,
        key: 'logoRecognition'
      },
      {
        name: '07:00 AM',
        Running: 100,
        Started: 120,
        Paused: 200,
        'Error rate': 320,
        key: 'logoRecognition'
      },
      {
        name: '08:00 AM',
        Running: 3490,
        Started: 4300,
        Paused: 2100,
        'Error rate': 1200,
        key: 'logoRecognition'
      },
      {
        name: '09:00 AM',
        Running: 3490,
        Started: 4300,
        Paused: 2100,
        'Error rate': 1200,
        key: 'logoRecognition'
      },
      {
        name: '10:00 AM',
        Running: 3490,
        Started: 4300,
        Paused: 2100,
        'Error rate': 1200,
        key: 'logoRecognition'
      },
      {
        name: '11:00 AM',
        Running: 3490,
        Started: 4300,
        Paused: 2100,
        'Error rate': 1200,
        key: 'logoRecognition'
      },
      {
        name: '12:00 AM',
        Running: 3490,
        Started: 4300,
        Paused: 2100,
        'Error rate': 1200,
        key: 'logoRecognition'
      },

      {
        name: '01:00 AM',
        Running: 2000,
        Started: 1200,
        Paused: 1200,
        'Error rate': 420,
        key: 'licensePlate'
      },
      {
        name: '02:00 AM',
        Running: 600,
        Started: 800,
        Paused: 1000,
        'Error rate': 260,
        key: 'licensePlate'
      },
      {
        name: '03:00 AM',
        Running: 600,
        Started: 3000,
        Paused: 1000,
        'Error rate': 220,
        key: 'licensePlate'
      },
      {
        name: '04:00 AM',
        Running: 1400,
        Started: 1800,
        Paused: 1000,
        'Error rate': 200,
        key: 'licensePlate'
      },
      {
        name: '05:00 AM',
        Running: 1600,
        Started: 2200,
        Paused: 1000,
        'Error rate': 120,
        key: 'licensePlate'
      },
      {
        name: '06:00 AM',
        Running: 1800,
        Started: 1800,
        Paused: 2200,
        'Error rate': 100,
        key: 'licensePlate'
      },
      {
        name: '07:00 AM',
        Running: 3200,
        Started: 2800,
        Paused: 2100,
        'Error rate': 80,
        key: 'licensePlate'
      },
      {
        name: '08:00 AM',
        Running: 3490,
        Started: 4300,
        Paused: 2100,
        'Error rate': 1200,
        key: 'licensePlate'
      },
      {
        name: '09:00 AM',
        Running: 3490,
        Started: 4300,
        Paused: 2100,
        'Error rate': 1200,
        key: 'licensePlate'
      },
      {
        name: '10:00 AM',
        Running: 3490,
        Started: 4300,
        Paused: 2100,
        'Error rate': 1200,
        key: 'licensePlate'
      },
      {
        name: '11:00 AM',
        Running: 3490,
        Started: 4300,
        Paused: 2100,
        'Error rate': 1200,
        key: 'licensePlate'
      },
      {
        name: '12:00 AM',
        Running: 3490,
        Started: 4300,
        Paused: 2100,
        'Error rate': 1200,
        key: 'licensePlate'
      }
    ],
    activeIndex: null
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
      { name: 'Translation', value: 150, key: 'translation' },
      { name: 'Face Detection', value: 150, key: 'faceDetection' },
      { name: 'Transcription', value: 80, key: 'transcription' },
      { name: 'Logo Recognition ', value: 20, key: 'logoRecognition' },
      { name: 'License Plate (ALPR)', value: 600, key: 'licensePlate' }
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
              cardTitle="3231120"
              cardDes="completed tasks (24 hrs)"
              cardValue="20%"
              cardIcon="folder-open"
            />
          </Col>
          <Col span={8}>
            <DashBoardCard
              dataChart={dataChart}
              chartColor="#ed4661"
              cardTitle="120"
              cardDes="completed errors (24 hrs)"
              cardValue="20%"
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
        <ErrorTable />
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
