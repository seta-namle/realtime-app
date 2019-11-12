import React, { Component, Fragment } from 'react';
import { Card, Row, Col, Typography, Progress, Button, Table } from 'antd';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
const { Title, Text } = Typography;
import styles from './styles.scss';

const JobStatusComponent = ({ percent = 20 }) => {
  return (
    <div>
      <Row gutter={10} style={{ paddingLeft: 3 }}>
        <div style={{ fontSize: 25, color: '#52c41a' }}>{percent}%</div>
        <div style={{ fontSize: 15 }}>completed</div>
      </Row>
      <Row>
        <Progress percent={percent} showInfo={false} strokeColor="#52c41a" />
      </Row>
    </div>
  );
};

const PerformanceChart = ({}) => {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ];
  return (
    <BarChart
      width={900}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <XAxis dataKey="name" />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" stackId="a" fill="#8884d8" />
      <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
      <Bar dataKey="amt" stackId="a" fill="#ff8533" />
    </BarChart>
  );
};

class JobDetail extends Component {
  render() {
    const dataJobDetail = [
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
    const taskByJobTableColumns = [
      {
        title: 'Task ID',
        dataIndex: 'taskId',
      },
      {
        title: 'Engine Name',
        dataIndex: 'engineName'
      },
      {
        title: 'Duration',
        dataIndex: 'duration'
      }
    ];
    const data = [
      {
        key: '1',
        taskId: 'Job demo 1',
        engineName: 'Complete',
        duration: 'Fri Nov 8 2019 10:19:48'
      },
      {
        key: '2',
        taskId: 'Job demo 1',
        engineName: 'Complete',
        duration: 'Fri Nov 8 2019 10:19:48'
      },
      {
        key: '3',
        taskId: 'Job demo 1',
        engineName: 'Complete',
        duration: 'Fri Nov 8 2019 10:19:48'
      },
    ];
    return (
      <Fragment>
        <Card>
          <Row gutter={20}>
            <Col span={18}>
              <Title level={3}>123456789-897-789</Title>
              <Text>JobId</Text>
            </Col>
            <Col span={6}>
              <JobStatusComponent />
            </Col>
          </Row>
        </Card>
        <Card className={styles['task-detail']}>
          <Row>
            <Col span={24}>
              <Text>Job detail</Text>
            </Col>

            <Col span={12} className={styles['task-detail-left']}>
              <table className={styles['table-detail']}>
                {dataJobDetail.map(item => {
                  return (
                    <tr key={item.name}>
                      <th>{item.name}</th>
                      <th>{item.value}</th>
                    </tr>
                  );
                })}
              </table>
            </Col>
            <Col span={12} className={styles['task-detail-right']}>
              <Text>Log file output</Text> <br />
            </Col>
            <Col span={24} className={styles['task-detail-action']}>
              <Button type="primary">Export</Button>
              <Button>Share</Button>
              <Button>Watch</Button>
            </Col>
          </Row>
        </Card>
        <Card className={styles['task-detail']}>
          <Row>
            <Col span={24}>
              <Text>Task by job - Performance graph</Text>
            </Col>
            <Col
              span={24}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center'
              }}
            >
              <PerformanceChart />
            </Col>

            <Col span={24} className={styles['task-detail-left']}>
              <Table
                columns={taskByJobTableColumns}
                dataSource={data}
              />
            </Col>
            <Col span={24} className={styles['task-detail-action']}>
              <Button type="primary">Export</Button>
              <Button>Share</Button>
              <Button>Watch</Button>
            </Col>
          </Row>
        </Card>
        <Card className={styles['task-detail']}>
          <Row>
            <Col span={24}>
              <Text>Task instances in job</Text>
            </Col>

            <Col span={24} className={styles['task-detail-left']}>
              <Table
                columns={taskByJobTableColumns}
                dataSource={data}
              />
            </Col>
            <Col span={24} className={styles['task-detail-action']}>
              <Button type="primary">Export</Button>
              <Button>Share</Button>
              <Button>Watch</Button>
            </Col>
          </Row>
        </Card>
        <Card className={styles['task-detail']}>
          <Row>
            <Col span={24}>
              <Text>Errors in jobs</Text>
            </Col>
            <Col
              span={24}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center'
              }}
            >
              <PerformanceChart />
            </Col>

            <Col span={24} className={styles['task-detail-left']}>
              <Table
                columns={taskByJobTableColumns}
                dataSource={data}
              />
            </Col>
            <Col span={24} className={styles['task-detail-action']}>
              <Button type="primary">Export</Button>
              <Button>Share</Button>
              <Button>Watch</Button>
            </Col>
          </Row>
        </Card>
      </Fragment>
    );
  }
}
export default JobDetail;
