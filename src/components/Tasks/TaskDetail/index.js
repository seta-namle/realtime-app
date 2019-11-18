import React, { Component, Fragment } from 'react';
import { Row, Col } from 'antd';
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
import {
  dataPerformance,
  boxsStatistic,
  taskDetailCards,
  instancesCards
} from './mockData';

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

    return (
      <Fragment>
        <HeaderDetail
          id={taskId}
          title={`Task Instance Id`}
          processValue={`64.89%`}
          processTime={`1m31sec ETC`}
        />
        {boxsStatistic.length > 0 && (
          <Row gutter={20}>
            {boxsStatistic.map((el, index) => {
              return (
                <Col key={index} span={boxsStatistic.length % 3 === 0 ? 8 : 12}>
                  <BoxStatisticChart
                    title={el.title}
                    subTitle={el.subTitle}
                    dataKey={el.dataKey}
                    data={el.data}
                    color={el.color}
                  />
                </Col>
              );
            })}
          </Row>
        )}
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
