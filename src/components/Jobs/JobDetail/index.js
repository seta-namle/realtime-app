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
import {
  dataChart,
  dataTableDetail,
  dataErrorTableDetail,
  dataErrorDetail
} from './mockData';
import TableDetail from '../../TableDetail';

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
        <Col span={16} className={styles['task-detail-left']}>
          <Descriptions
            bordered
            column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
          >
            {listErrors.map(item => {
              return (
                <Descriptions.Item key label={item.name} span="3">
                  {item.value}
                </Descriptions.Item>
              );
            })}
          </Descriptions>
        </Col>
        <Col span={8} className={styles['task-detail-right']}>
          <Text>Log file output related to error</Text> <br />
        </Col>
        <Col span={24} className={styles['task-detail-action']}>
          <Button type="primary" onClick={handleOk}>
            Export
          </Button>
          <Button onClick={handleOk}>Assign</Button>
          <Button onClick={handleOk}>Mute Error Code</Button>
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

  onClickTaskRow = value => {
    const { onClickDetail } = this.props;
    const payload = {
      tabName: 'tasks',
      id: '19114508_pCJAAcUsmKkHwNA'
    };
    onClickDetail(payload);
  };

  render() {
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

    const error_columns = [
      {
        title: 'Error ID',
        dataIndex: 'id',
        render: text => <a>{text}</a>
      },
      {
        title: 'Error Code',
        dataIndex: 'code'
      },
      {
        title: 'Error Source Type',
        dataIndex: 'sourceType'
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
        value: 'Fri Nov 8 2019 10:19:48'
      },
      {
        name: 'Status',
        value: 'Running'
      },
      {
        name: 'Error Count',
        value: '3'
      }
    ];

    const { jobId } = this.props;
    return (
      <Fragment>
        <HeaderDetail
          id={jobId}
          title={`Job Id`}
          processValue={`64.89%`}
          processTime={`Complete`}
        />
        <Row gutter={[10, 10]}>
          <Col span={12} className={styles['task-detail-left']}>
            <TableDetail title={`Job Detail`} data={dataJobDetail} />
          </Col>

          <Col span={12} className={styles['task-detail']}>
            <Card>
              <NetworkGraph />
            </Card>
          </Col>
        </Row>

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
                dataSource={dataTableDetail}
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
                dataSource={dataTableDetail}
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
                columns={error_columns}
                dataSource={dataErrorTableDetail}
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
          listErrors={dataErrorDetail}
        />
      </Fragment>
    );
  }
}
export default connect(
  state => ({
    tabName: selectCurrentRoutePayload(state).tabName
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
