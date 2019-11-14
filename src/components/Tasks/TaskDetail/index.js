import React, { Component, Fragment } from 'react';
import {
  Card,
  Row,
  Col,
  Typography,
  Progress,
  Button,
  Modal,
  Descriptions
} from 'antd';
import { Table } from 'antd';
const { Title, Text } = Typography;
import { string } from 'prop-types';
import styles from './styles.scss';
import { BarChart, Bar, Cell } from 'recharts';

import { Chart } from 'react-google-charts';
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
    const dataTaskDetail = [
      {
        name: 'Task Id',
        value: '10'
      },
      {
        name: 'Task Name',
        value: 'Task Demo 1'
      },
      {
        name: 'Job Id',
        value: '10'
      },
      {
        name: 'Task Engine Type',
        value: 'Task Engine Type'
      },
      {
        name: 'Task Engine Type',
        value: '10'
      },
      {
        name: 'Schedule Start Time',
        value: '10'
      },
      {
        name: 'Parent Task Id',
        value: '10'
      },
      {
        name: 'Child Task Id',
        value: '10'
      },
      {
        name: 'Status',
        value: 'Complete'
      },
      {
        name: 'Error Count',
        value: '10'
      }
    ];
    const dataJobDetail = [
      {
        name: 'Job Id',
        value: '10'
      },
      {
        name: 'Org Id',
        value: '10'
      },
      {
        name: 'Priority',
        value: 'Priority'
      },
      {
        name: 'Job Template Id',
        value: '10'
      },
      {
        name: 'Schedule Id',
        value: '10'
      },
      {
        name: 'Tasks',
        value: '10'
      },
      {
        name: 'Start Time',
        value: '10'
      },
      {
        name: 'Task Complete',
        value: '10'
      },
      {
        name: 'Active Tasks',
        value: 'Complete'
      },
      {
        name: 'Error',
        value: '10'
      }
    ];

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
    const dataTaskInJob = [
      {
        key: '1',
        name: 'Tasks demo 1',
        status: 'Complete',
        date: 'Fri Nov 8 2019 10:19:48'
      },
      {
        key: '2',
        name: 'Tasks demo 2',
        status: 'Complete',
        date: 'Fri Nov 8 2019 10:19:48'
      },
      {
        key: '3',
        name: 'Tasks demo 3',
        status: 'Complete',
        date: 'Fri Nov 8 2019 10:19:48'
      },
      {
        key: '4',
        name: 'Tasks demo 4',
        status: 'Complete',
        date: 'Fri Nov 8 2019 10:19:48'
      }
    ];

    const dataSelectedTaskDetail = [
      {
        name: 'Task Id',
        value: '10'
      },
      {
        name: 'Task Name',
        value: '10'
      },
      {
        name: 'Task Engine Type',
        value: 'Priority'
      },
      {
        name: 'Engine Build',
        value: '10'
      },
      {
        name: 'Schedule Start Time',
        value: '10'
      },
      {
        name: 'Parent Task Id',
        value: '10'
      },
      {
        name: 'Child Task Id',
        value: '10'
      },
      {
        name: 'Status',
        value: 'Complete'
      },
      {
        name: 'Error Count',
        value: '10'
      }
    ];

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
      colors: ['#ff4d4d', '#339966', '#ff704d', '#52527a', '#ffcc66'],
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
        uv: 4000
      },
      {
        name: 'Page B',
        uv: 3000
      },
      {
        name: 'Page C',
        uv: 2000
      },
      {
        name: 'Page D',
        uv: 2780
      },
      {
        name: 'Page E',
        uv: 1890
      },
      {
        name: 'Page F',
        uv: 2390
      },
      {
        name: 'Page G',
        uv: 3490
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
        <Card className={styles['task-detail']}>
          <Row>
            <Col span={24}>
              <Text>Task instance detail</Text>
            </Col>

            <Col span={12} className={styles['task-detail-left']}>
              <Descriptions
                bordered
                column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
              >
                {dataTaskDetail.map(item => {
                  return (
                    <Descriptions.Item key label={item.name}>
                      {item.value}
                    </Descriptions.Item>
                  );
                })}
              </Descriptions>
            </Col>
            <Col span={12} className={styles['task-detail-right']}>
              <Text>Log file output</Text> <br />
            </Col>
            <Col span={24} className={styles['task-detail-action']}>
              <Button type="primary">Export</Button>
              <Button>Watch</Button>
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

        <Card className={styles['job-detail']}>
          <Row>
            <Col span={24}>
              <Text>Job detail</Text>
            </Col>

            <Col span={24} className={styles['task-detail-left']}>
              <Descriptions
                bordered
                column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
              >
                {dataJobDetail.map(item => {
                  return (
                    <Descriptions.Item key label={item.name}>
                      {item.value}
                    </Descriptions.Item>
                  );
                })}
              </Descriptions>
            </Col>
            <Col span={24} className={styles['task-detail-action']}>
              <Button type="primary">Export</Button>
              <Button>Watch</Button>
            </Col>
          </Row>
        </Card>

        <Card className={styles['job-detail']}>
          <Row>
            <Col span={24}>
              <Text>List of tasks in job</Text>
            </Col>

            <Col span={24} className={styles['task-in-job']}>
              <Table columns={columns} dataSource={dataTaskInJob} />
            </Col>
            <Col span={24} className={styles['task-detail-action']}>
              <Button type="primary">Export</Button>
              <Button>Watch</Button>
            </Col>
          </Row>
        </Card>

        <Card className={styles['job-detail']}>
          <Row>
            <Col span={24}>
              <Text>Selected task detail</Text>
            </Col>

            <Col span={24} className={styles['task-detail-left']}>
              <Descriptions
                bordered
                column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
              >
                {dataSelectedTaskDetail.map(item => {
                  return (
                    <Descriptions.Item key label={item.name}>
                      {item.value}
                    </Descriptions.Item>
                  );
                })}
              </Descriptions>
            </Col>
            <Col span={24} className={styles['task-detail-action']}>
              <Button type="primary">Export</Button>
              <Button>Watch</Button>
            </Col>
          </Row>
        </Card>

        <Card className={styles['job-detail']}>
          <Row>
            <Col span={24}>
              <Text>Error In Task Instance</Text>
            </Col>

            <Col span={24} className={styles['task-in-job']}>
              <Table
                columns={columns}
                dataSource={dataTaskInJob}
                onRow={(record, rowIndex) => {
                  return {
                    onClick: event => {
                      this.onClickRow(record);
                    }
                  };
                }}
              />
            </Col>
            <Col span={24} className={styles['task-detail-action']}>
              <Button type="primary">Export</Button>
              <Button>Watch</Button>
            </Col>
          </Row>
        </Card>
        <Modal
          title="Error Detail"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width={1000}
        >
          <Row>
            <Col span={24}>
              <Text>Task instance detail</Text>
            </Col>

            <Col span={12} className={styles['task-detail-left']}>
              <Descriptions
                bordered
                column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
              >
                {dataTaskDetail.map(item => {
                  return (
                    <Descriptions.Item key label={item.name}>
                      {item.value}
                    </Descriptions.Item>
                  );
                })}
              </Descriptions>
            </Col>
            <Col span={12} className={styles['task-detail-right']}>
              <Text>Log file output related to error</Text> <br />
            </Col>
            <Col span={24} className={styles['task-detail-action']}>
              <Button type="primary">Export</Button>
              <Button>Watch</Button>
            </Col>
          </Row>
        </Modal>
      </Fragment>
    );
  }
}
export default TaskDetail;
