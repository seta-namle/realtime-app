import React, { Component, Fragment } from 'react';
import { Card, Row, Col, Typography, Progress, Button, Modal } from 'antd';
import { Table } from 'antd';
const { Title, Text } = Typography;
import { string } from 'prop-types';
import styles from './styles.scss';
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
              <table className={styles['table-detail']}>
                {dataTaskDetail.map(item => {
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
              <Button>Watch</Button>
            </Col>
          </Row>
        </Card>

        <Card className={styles['task-performance']}>
          <Text>Task instance performance graph</Text>
        </Card>

        <Card className={styles['job-detail']}>
          <Row>
            <Col span={24}>
              <Text>Job detail</Text>
            </Col>

            <Col span={24} className={styles['task-detail-left']}>
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
              <table className={styles['table-detail']}>
                {dataSelectedTaskDetail.map(item => {
                  return (
                    <tr key={item.name}>
                      <th>{item.name}</th>
                      <th>{item.value}</th>
                    </tr>
                  );
                })}
              </table>
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
              <table className={styles['table-detail']}>
                {dataTaskDetail.map(item => {
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
