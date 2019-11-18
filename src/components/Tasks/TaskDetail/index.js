import React, { Component, Fragment } from 'react';
import { Row, Col } from 'antd';
import { string } from 'prop-types';
import styles from './styles.scss';
import ComboChart from '../../ComboChart';
import BoxStatisticChart from '../../BoxStatisticChart';
import DashBoardCard from '../../Cards';
import HeaderDetail from '../../HeaderDetail';
import TableDetail from '../../TableDetail';
import TableList from '../../TableList';
import { dataJobDetail } from '../../Jobs/JobDetail/mockData';
import {
  dataPerformance,
  boxsStatistic,
  taskDetailCards,
  instancesCards,
  listOfWorkRequests
} from './mockData';
import { dataActiveTask, dataErrorTask } from '../../Tasks/mockData';
class TaskDetail extends Component {
  static propTypes = {
    taskId: string
  };
  state = {
    visible: false,
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
    const dataActiveTaskById = dataActiveTask.find(item => item.taskId === taskId);
    let dataTaskDetail = [];
    if (dataActiveTaskById) {
      dataTaskDetail = [
        {
          name: 'Task Id',
          value: dataActiveTaskById.taskId
        },
        {
          name: 'Task Name',
          value: `Task Demo ${taskId}`
        },
        {
          name: 'Job Id',
          value: dataActiveTaskById.jobId
        },
        {
          name: 'Task Engine Type',
          value: dataActiveTaskById.category
        },
        {
          name: 'Engine Build',
          value: dataActiveTaskById.engineBuild
        },
        {
          name: 'Schedule Start Time',
          value: dataActiveTaskById.scheduleStartTime
        },
        {
          name: 'Parent Task Id',
          value: dataActiveTaskById.parentTaskId
        },
        {
          name: 'Child Task Id',
          value: dataActiveTaskById.childTaskId
        },
        {
          name: 'Status',
          value: dataActiveTaskById.status
        },
        {
          name: 'Error Count',
          value: dataActiveTaskById.errors
        }
      ];
    }


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
        <TableDetail
          title={`Task Detail`}
          data={dataTaskDetail}
        />
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
        <TableList
          columns={listOfWorkRequests.columns}
          title={listOfWorkRequests.title}
          dataRow={listOfWorkRequests.data}
        />
        <TableDetail
          title={`Job Detail`}
          data={dataJobDetail}
        />
        <TableList
          columns={this.state.errorColumns}
          title={`error list`}
          dataRow={dataErrorTask}
        />

      </Fragment>
    );
  }
}
export default TaskDetail;
