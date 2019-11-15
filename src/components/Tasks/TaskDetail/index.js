import React, { Component, Fragment } from 'react';
import {  Row, Col, Typography } from 'antd';
import { string } from 'prop-types';
import styles from './styles.scss';
import ComboChart from '../../ComboChart';
import BoxStatisticChart from '../../BoxStatisticChart';
import DashBoardCard from '../../Cards';
import ErrorTable from '../ErrorTable';
import TaskDetailTable from './TaskDetailTable';
import JobDetailTable from '../../Jobs/JobDetail/JobDetailTable';
import ListOfWorkRequestsTable from './ListOfWorkRequestsTable';
import HeaderDetail from '../../HeaderDetail';
class TaskDetail extends Component {
  static propTypes = {
    taskId: string
  };
  state = { visible: false };
  onClickRow = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    const { taskId } = this.props;

    const dataPerformance = [
      [
        'Time',
        'CPU %',
        'Bytes written',
        'Memory %',
        'Output files written',
        'GPU %'
      ],
      [new Date(2019, 11, 14, 0), 12, 56, 48, 60, 99],
      [new Date(2019, 11, 14, 1), 65, 78, 22, 98, 50],
      [new Date(2019, 11, 14, 2), 35, 40, 99, 68, 88],
      [new Date(2019, 11, 14, 3), 57, 67, 58, 80, 97],
      [new Date(2019, 11, 14, 4), 39, 90, 15, 68, 15],
      [new Date(2019, 11, 14, 5), 36, 51, 29, 26, 66],
      [new Date(2019, 11, 14, 6), 25, 34, 50, 67, 84],
      [new Date(2019, 11, 14, 7), 12, 56, 48, 60, 99],
      [new Date(2019, 11, 14, 8), 65, 78, 22, 98, 50],
      [new Date(2019, 11, 14, 9), 35, 40, 99, 68, 88],
      [new Date(2019, 11, 14, 10), 57, 67, 58, 80, 97],
      [new Date(2019, 11, 14, 11), 39, 90, 15, 68, 15],
      [new Date(2019, 11, 14, 12), 36, 51, 29, 26, 66],
      [new Date(2019, 11, 14, 13), 25, 34, 50, 67, 84],
      [new Date(2019, 11, 14, 14), 12, 56, 48, 60, 99],
      [new Date(2019, 11, 14, 15), 65, 78, 22, 98, 50],
      [new Date(2019, 11, 14, 16), 35, 40, 99, 68, 88],
      [new Date(2019, 11, 14, 17), 57, 67, 58, 80, 97],
      [new Date(2019, 11, 14, 18), 39, 90, 15, 68, 15],
      [new Date(2019, 11, 14, 19), 36, 51, 29, 26, 66],
      [new Date(2019, 11, 14, 20), 25, 34, 50, 67, 84],
      [new Date(2019, 11, 14, 21), 12, 56, 48, 60, 99],
      [new Date(2019, 11, 14, 22), 36, 51, 29, 26, 66],
      [new Date(2019, 11, 14, 23), 25, 34, 50, 67, 84]
    ];

    const seriesPerformance = {
      0: { type: 'bars' },
      2: { type: 'scatter' },
      3: { type: 'line' }
    };

    const colorsPerformance = [
      '#D98186',
      '#C2D4C1',
      '#ff704d',
      '#52527a',
      '#FEE2CB'
    ];

    const dataBoxStatistic = [
      {
        name: 'Page A',
        uv: 1000
      },
      {
        name: 'Page B',
        uv: 2000
      },
      {
        name: 'Page C',
        uv: 3000
      },
      {
        name: 'Page D',
        uv: 4780
      },
      {
        name: 'Page E',
        uv: 3890
      },
      {
        name: 'Page F',
        uv: 2390
      },
      {
        name: 'Page G',
        uv: 1000
      },
      {
        name: 'Page H',
        uv: 2000
      },
      {
        name: 'Page I',
        uv: 3000
      },
      {
        name: 'Page L',
        uv: 4780
      },
      {
        name: 'Page L',
        uv: 3890
      },
      {
        name: 'Page M',
        uv: 2390
      }
    ];
    const taskDetailCards = [
      {
        cardTitle: '123',
        cardDes: 'Chunks or Blocks Processed',
        titleColor: '#ff4d4f'
      },
      {
        cardTitle: '423',
        cardDes: '(Current / Actual) Remaining)',
        titleColor: '#bae637'
      },
      {
        cardTitle: '324',
        cardDes: 'A + B',
        titleColor: '#ffc53d'
      },
      {
        cardTitle: '756',
        cardDes: 'Errors / Retries',
        titleColor: '#36cfc9'
      }
    ];
    const instancesCards = [
      {
        cardTitle: '5234',
        cardDes: 'Active Instances',
        titleColor: '#ff4d4f'
      },
      {
        cardTitle: '312',
        cardDes: 'Completed Instances',
        titleColor: '#bae637'
      },
      {
        cardTitle: '453',
        cardDes: 'Paused Instances',
        titleColor: '#ffc53d'
      },
      {
        cardTitle: '234',
        cardDes: 'Peak Instances',
        titleColor: '#36cfc9'
      }
    ];
    return (
      <Fragment>
        <HeaderDetail
          id={taskId}
          title={`Task Instance Id`}
          processValue={`64.89%`}
          processTime={`1m31sec ETC`}
        />
        <Row gutter={20} className={styles['task-box-statistic']}>
          <Col span={8}>
            <BoxStatisticChart
              title="32m53.2s"
              subTitle="Processing Time"
              dataKey="uv"
              data={dataBoxStatistic}
              color="#ff6600"
            />
          </Col>
          <Col span={8}>
            <BoxStatisticChart
              title="196.5"
              subTitle="CPU Minutes"
              dataKey="uv"
              data={dataBoxStatistic}
              color="#82ca9d"
            />
          </Col>
          <Col span={8}>
            <BoxStatisticChart
              title="3.2% / min"
              subTitle="Processing Rate"
              dataKey="uv"
              data={dataBoxStatistic}
              color="#ff1a1a"
            />
          </Col>
        </Row>

        <ComboChart
          title="Task instance performance graph"
          data={dataPerformance}
          series={seriesPerformance}
          colors={colorsPerformance}
          isRangeFilter
        />

        <Row className={styles['card-row']}>
          {taskDetailCards.map(item => (
            <Col key={item.cardTitle} span={6}>
              <DashBoardCard
                cardTitle={item.cardTitle}
                cardDes={item.cardDes}
                type="activeTasks"
                titleColor={item.titleColor}
                customStyle="taskDetails"
              />
            </Col>
          ))}
        </Row>
        <TaskDetailTable taskId={taskId} />

        <Row className={styles['card-row']}>
          {instancesCards.map(item => (
            <Col key={item.cardTitle} span={6}>
              <DashBoardCard
                cardTitle={item.cardTitle}
                cardDes={item.cardDes}
                type="activeTasks"
                titleColor={item.titleColor}
                customStyle="taskDetails"
              />
            </Col>
          ))}
        </Row>

        <ListOfWorkRequestsTable />

        <JobDetailTable />

        <ErrorTable filter={{ field: 'taskId', value: taskId }} />
      </Fragment>
    );
  }
}
export default TaskDetail;
