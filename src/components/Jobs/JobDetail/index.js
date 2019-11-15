import React, { Component, Fragment } from 'react';
import {
  Card,
  Row,
  Col,
  Typography,
  Progress,
  Button,
  Table,
  Descriptions,
  Modal
} from 'antd';
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
import { connect } from 'react-redux';
import NetworkGraph from './NetworkGraph';

import { ON_CLICK_DETAIL } from '../../../state/modules/sideBar';
import { selectCurrentRoutePayload } from 'state/modules/routing';
import { func, number, bool, arrayOf, object } from 'prop-types';
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

JobStatusComponent.propTypes = {
  percent: number
};

const ErrorModal = ({
  handleOk,
  handleCancel,
  visibleModal = false,
  listErrors = []
}) => {
  return (
    <Modal
      title="Error Detail"
      visible={visibleModal}
      onOk={handleOk}
      onCancel={handleCancel}
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
            {listErrors.map(item => {
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
  );
};
ErrorModal.propTypes = {
  handleOk: func,
  handleCancel: func,
  visibleModal: bool,
  listErrors: arrayOf(object)
};

const PerformanceChart = ({ data = [] }) => {
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
      <Bar dataKey="cpu" stackId="a" fill="#8884d8" />
      <Bar dataKey="mem" stackId="a" fill="#82ca9d" />
      <Bar dataKey="gpu" stackId="a" fill="#ff8533" />
      <Bar dataKey="byteWrittenErrors" stackId="a" fill="#ffc658" />
    </BarChart>
  );
};

PerformanceChart.propTypes = {
  data: arrayOf(object)
};

class JobDetail extends Component {
  constructor(props) {
    super(props);
    this.handleOkErrorModal = this.handleOkErrorModal.bind(this);
    this.handleCancelErrorModal = this.handleCancelErrorModal.bind(this);
  }
  state = {
    visibleModal: false
  };

  handleOkErrorModal() {
    this.setState({
      visibleModal: false
    });
  }

  handleCancelErrorModal() {
    this.setState({
      visibleModal: false
    });
  }

  onClickErrorRow = () => {
    this.setState({
      visibleModal: true
    });
  };

  onClickTaskRow = (task = { id: 0 }) => {
    const { onClickDetail } = this.props;
    const payload = {
      tabName: 'tasks',
      id: 10
    };
    onClickDetail(payload);
  };

  render() {
    const dataChart = [
      {
        name: 'Task 1',
        cpu: 4000,
        gpu: 1200,
        mem: 2400,
        byteWrittenErrors: 2400
      },
      {
        name: 'Task 2',
        cpu: 3000,
        gpu: 1400,
        mem: 1398,
        byteWrittenErrors: 2210
      },
      {
        name: 'Task 3',
        cpu: 2000,
        mem: 9800,
        gpu: 1200,
        byteWrittenErrors: 2290
      },
      {
        name: 'Task 4',
        cpu: 2780,
        mem: 3908,
        gpu: 200,
        byteWrittenErrors: 2000
      },
      {
        name: 'Task 5',
        cpu: 1890,
        mem: 4800,
        gpu: 1000,
        byteWrittenErrors: 2181
      },
      {
        name: 'Task 6',
        cpu: 2390,
        mem: 3800,
        gpu: 1200,
        byteWrittenErrors: 2500
      },
      {
        name: 'Task 7',
        cpu: 3490,
        mem: 4300,
        gpu: 1200,
        byteWrittenErrors: 2100
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
    const data = [
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

    const listErrors = [];
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
              </Descriptions>{' '}
            </Col>
            <Col span={12}>
              {/* <Text>Log file output</Text> <br /> */}
              <NetworkGraph/>
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
              <PerformanceChart data={dataChart} />
            </Col>

            <Col span={24} className={styles['task-detail-left']}>
              <Table columns={columns} dataSource={data} />
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
                columns={columns}
                dataSource={data}
                onRow={(record, rowIndex) => {
                  return {
                    onClick: () => {
                      this.onClickTaskRow(record);
                    }
                  };
                }}
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

            <Col span={24} className={styles['task-detail-left']}>
              <Table
                columns={columns}
                dataSource={data}
                onRow={(record, rowIndex) => {
                  return {
                    onClick: event => {
                      this.onClickErrorRow(record);
                    }
                  };
                }}
              />
            </Col>
            <Col span={24} className={styles['task-detail-action']}>
              <Button type="primary">Export</Button>
              <Button>Share</Button>
              <Button>Watch</Button>
            </Col>
          </Row>
        </Card>
        <ErrorModal
          visibleModal={this.state.visibleModal}
          handleOk={this.handleOkErrorModal}
          handleCancel={this.handleCancelErrorModal}
          listErrors={dataJobDetail}
        />
      </Fragment>
    );
  }
}
export default connect(
  state => ({
    tabName: selectCurrentRoutePayload(state).tabName,
    jobId: selectCurrentRoutePayload(state).id
  }),
  {
    onClickDetail: payload => ({
      type: ON_CLICK_DETAIL,
      payload
    })
  }
)(JobDetail);

// export default JobDetail;
