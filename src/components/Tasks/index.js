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
class Tasks extends Component {
  static propTypes = {
    onClickDetail: func,
    tabName: string,
    taskId: string
  };
  
  state = {

  }
  onClickRow = value => {
    const { onClickDetail, tabName } = this.props;
    const payload = {
      tabName,
      id: value.key
    };
    onClickDetail(payload);
  };
  onClickPieChart = (data, index) => {
    console.log('data', data)
    console.log('index', index)

  }
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
      { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
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
              />
            </Col>
            <Col span={8}>
              <PieChart
                data={dataPieChart}
                colors={colors}
                title={`Completed tasks by engine category`}
                onClick={this.onClickPieChart}
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
       
        <BarChart />
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
