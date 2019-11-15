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
import { BarChart, Bar } from 'recharts';
import ComboChart from '../../ComboChart';
import BoxStatisticChart from '../../BoxStatisticChart';

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
    const dataTaskDetail = [
      {
        name: 'Task Id',
        value: taskId
      },
      {
        name: 'Task Name',
        value: `Task Demo ${taskId}`
      },
      {
        name: 'Job Id',
        value: taskId
      },
      {
        name: 'Task Engine Type',
        value: 'Task Engine Type'
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
    const dataJobDetail = [
      {
        name: 'Job Id',
        value: taskId
      },
      {
        name: 'Org Id',
        value: '10'
      },
      {
        name: 'Priority',
        value: 'Medium'
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
        name: '# Tasks',
        value: 10
      },
      {
        name: 'Start Time',
        value: 'Fri Nov 8 3039 30:39:48'
      },
      {
        name: '# Tasks Complete',
        value: 5
      },
      {
        name: '# Active Tasks',
        value: 0
      },
      {
        name: '# Errors',
        value: 5
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
        </div>
        <ComboChart
          title="Task instance performance graph"
          data={dataPerformance}
          series={seriesPerformance}
          colors={colorsPerformance}
          isRangeFilter
        />
        <Card>
          <Row>
            <Col span={6}>
              <Row>
                <Col span={12}>
                  <div
                    style={{
                      textAlign: 'center',
                      color: '#36cfc9',
                      fontSize: '60px'
                    }}
                  >
                    243
                  </div>
                </Col>
                <Col span={12}>
                  <div style={{ fontSize: '22px' }}>
                    Chunks or Blocks Processed
                  </div>
                </Col>
              </Row>
            </Col>
            <Col span={6}>
              <Row>
                <Col span={12}>
                  <div
                    style={{
                      textAlign: 'center',
                      color: '#ff4d4f',
                      fontSize: '60px'
                    }}
                  >
                    321
                  </div>
                </Col>
                <Col span={12}>
                  <div style={{ fontSize: '22px' }}>
                    (Current / Actual) Remaining
                  </div>
                </Col>
              </Row>
            </Col>
            <Col span={6}>
              <Row>
                <Col span={12}>
                  <div
                    style={{
                      textAlign: 'center',
                      color: '#bae637',
                      fontSize: '60px'
                    }}
                  >
                    123
                  </div>
                </Col>
                <Col span={12}>
                  <div style={{ fontSize: '22px' }}>A + B</div>
                </Col>
              </Row>
            </Col>
            <Col span={6}>
              <Row>
                <Col span={12}>
                  <div
                    style={{
                      textAlign: 'center',
                      color: '#ffc53d',
                      fontSize: '60px'
                    }}
                  >
                    4323
                  </div>
                </Col>
                <Col span={12}>
                  <div style={{ fontSize: '22px' }}>Errors / Retries</div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>

        <Card title="task detail" className={styles['task-detail']}>
          <Row>
            <Col span={24} className={styles['task-detail-left']}>
              <Descriptions
                bordered
                column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
              >
                {dataTaskDetail.map(item => {
                  return (
                    <Descriptions.Item key={item.name} label={item.name}>
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

        <Card>
          <Row>
            <Col span={6}>
              <Row>
                <Col span={12}>
                  <div
                    style={{
                      textAlign: 'center',
                      color: '#36cfc9',
                      fontSize: '60px'
                    }}
                  >
                    243
                  </div>
                </Col>
                <Col span={12}>
                  <div style={{ fontSize: '22px' }}>Actice Instances</div>
                </Col>
              </Row>
            </Col>
            <Col span={6}>
              <Row>
                <Col span={12}>
                  <div
                    style={{
                      textAlign: 'center',
                      color: '#ff4d4f',
                      fontSize: '60px'
                    }}
                  >
                    321
                  </div>
                </Col>
                <Col span={12}>
                  <div style={{ fontSize: '22px' }}>Completed Instances</div>
                </Col>
              </Row>
            </Col>
            <Col span={6}>
              <Row>
                <Col span={12}>
                  <div
                    style={{
                      textAlign: 'center',
                      color: '#bae637',
                      fontSize: '60px'
                    }}
                  >
                    123
                  </div>
                </Col>
                <Col span={12}>
                  <div style={{ fontSize: '22px' }}>Paused Instances</div>
                </Col>
              </Row>
            </Col>
            <Col span={6}>
              <Row>
                <Col span={12}>
                  <div
                    style={{
                      textAlign: 'center',
                      color: '#ffc53d',
                      fontSize: '60px'
                    }}
                  >
                    4323
                  </div>
                </Col>
                <Col span={12}>
                  <div style={{ fontSize: '22px' }}>Peak Instances</div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>

        <Card className={styles['task-detail']}>
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
                    <Descriptions.Item key={item.name} label={item.name}>
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

        {/* <Card className={styles['task-detail']}>
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
        </Card> */}

        {/* <Card className={styles['task-detail']}>
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
        </Card> */}

        <Card className={styles['task-detail']}>
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
