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
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';
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
      { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
      { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
      { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
      { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
      { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
      { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
      { name: 'Page G', uv: 3490, pv: 4300, amt: 1200 }
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

        <Card className={styles['task-performance']}>
          <Text>Task instance performance graph</Text>
          <AreaChart
            width={window.innerWidth - 300}
            height={400}
            data={dataPerformance}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="amt"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
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
