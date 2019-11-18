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
import HeaderDetail from '../../HeaderDetail';
import styles from './styles.scss';

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

  onClickTaskRow = (value) => {
    const { onClickDetail } = this.props;
    const payload = {
      tabName: 'tasks',
      id: '19114508_pCJAAcUsmKkHwNA'
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
        status: 'Running',
        date: 'Fri Nov 8 2019 10:19:48'
      }
    ];
    const dataJobDetail = [
      {
        name: 'Job Id',
        value: this.props.jobId
      },
      {
        name: 'Engine Type',
        value: 'Engine Type'
      },
      {
        name: 'Schedule Start Time',
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

    const {jobId} = this.props;
    return (
      <Fragment>
        <HeaderDetail
          id={jobId}
          title={`Job Id`}
          processValue={`64.89%`}
          processTime={`Complete`}
        />
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
            <Card>
            <NetworkGraph/>
            </Card>
          
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
    //jobId: selectCurrentRoutePayload(state).id
  }),
  {
    onClickDetail: payload => ({
      type: ON_CLICK_DETAIL,
      payload
    })
  }
)(JobDetail);

// export default JobDetail;
