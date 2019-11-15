import React, { Component, Fragment } from 'react';
import { Card, Row, Col, Typography, Progress } from 'antd';
const { Title, Text } = Typography;
import { string } from 'prop-types';
import styles from './styles.scss';
import { BarChart, Bar, Cell } from 'recharts';

import { Chart } from 'react-google-charts';
import DashBoardCard from '../../Cards';
import ErrorListTable from '../../ErrorListTable';
import TaskDetailTable from './TaskDetailTable';
import JobDetailTable from '../../Jobs/JobDetail/JobDetailTable';
import ListOfWorkRequestsTable from './ListOfWorkRequestsTable';
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

    const sameOptionPerformance = {
      colors: ['#D98186', '#C2D4C1', '#ff704d', '#52527a', '#FEE2CB'],
      series: {
        0: { type: 'bars' },
        2: { type: 'scatter' },
        3: { type: 'line' }
      },
      isStacked: true,
      bar: {
        groupWidth: '97%'
      },
      areaOpacity: 1,
      curveType: 'function'
    };

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
        <Card>
          <Row>
            <Col span={18}>
              <Title level={3}>{this.props.taskId}</Title>
              <Text>Task Instance Id</Text>
            </Col>
            <Col span={6}>
              <Text>64.89%</Text> <br />
              <Text>1m31sec ETC</Text>
              <Progress percent={64.89} size="small" />
            </Col>
          </Row>
        </Card>
        <div className={styles['task-box-statistic']}>
          <Row gutter={20}>
            <Col span={8}>
              <Card bordered={false}>
                <Row>
                  <Col span={12}>
                    <Title level={3}>32m53.2s</Title>
                    <Text>Processing Time</Text>
                  </Col>
                  <Col span={12}>
                    <BarChart width={150} height={40} data={dataBoxStatistic}>
                      <Bar yAxisId="right" dataKey="uv" fill="#ff6600" />
                    </BarChart>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={8}>
              <Card bordered={false}>
                <Row>
                  <Col span={12}>
                    <Title level={3}>196.5</Title>
                    <Text>CPU Minutes</Text>
                  </Col>
                  <Col span={12}>
                    <BarChart width={150} height={40} data={dataBoxStatistic}>
                      <Bar yAxisId="right" dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={8}>
              <Card bordered={false}>
                <Row>
                  <Col span={12}>
                    <Title level={3}>3.2% / min</Title>
                    <Text>Processing Rate</Text>
                  </Col>
                  <Col span={12}>
                    <BarChart width={150} height={40} data={dataBoxStatistic}>
                      <Bar yAxisId="right" dataKey="uv" fill="#ff1a1a" />
                    </BarChart>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </div>
        <Card className={styles['task-performance']}>
          <Text>Task instance performance graph</Text>
          <Chart
            width="100%"
            chartType="ComboChart"
            loader={<div>Loading Chart</div>}
            data={dataPerformance}
            options={{
              ...sameOptionPerformance,
              seriesType: 'area',
              vAxis: {
                minValue: 0,
                gridlines: { color: 'white' },
                baselineColor: 'none',
                textPosition: 'none'
              },
              hAxis: {
                gridlines: { color: 'white' },
                textPosition: 'none',
                baselineColor: 'black'
              },
              chartArea: { width: '100%', height: '100%' },
              legend: { position: 'in' }
            }}
            rootProps={{ 'data-testid': '1' }}
            render={({ renderControl, renderChart }) => {
              return (
                <div>
                  {renderChart()}
                  <div style={{ maxHeight: 70, overflow: 'hidden' }}>
                    {renderControl(() => true)}
                  </div>
                </div>
              );
            }}
            controls={[
              {
                controlType: 'ChartRangeFilter',
                options: {
                  filterColumnIndex: 0,
                  ui: {
                    chartType: 'AreaChart',
                    chartOptions: {
                      ...sameOptionPerformance,
                      chartArea: { width: '100%', height: '30%' },
                      hAxis: { baselineColor: 'none' }
                    }
                  }
                },
                controlPosition: 'bottom',
                controlWrapperParams: {
                  state: {
                    range: {
                      start: new Date(2019, 11, 14, 0),
                      end: new Date(2019, 11, 14, 23)
                    }
                  }
                }
              }
            ]}
          />
        </Card>

        <Row className={styles['card-row']}>
          {taskDetailCards.map(item => (
            <Col key={item.cardTitle} span={6}>
              <DashBoardCard
                cardTitle={item.cardTitle}
                cardDes={item.cardDes}
                type="activeTasks"
                titleColor={item.titleColor}
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
              />
            </Col>
          ))}
        </Row>

        <ListOfWorkRequestsTable />

        <JobDetailTable />

        <ErrorListTable filter={{ field: 'taskId', value: taskId }} />
      </Fragment>
    );
  }
}
export default TaskDetail;
