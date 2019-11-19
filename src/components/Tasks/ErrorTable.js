import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Card, Table, Button, Modal, Row, Col, Descriptions } from 'antd';
import styles from './TaskDetail/styles.scss';
class ErrorTable extends Component {
  state = {
    visible: false,
    dataModal: [],
    data: [
      {
        key: 'error1',
        errorId: 'error1',
        errorCode: 'errorCode1',
        errorSourceType: 'Audio',
        sourceId: '66053',
        severity: 'Normal',
        timestamp: 'Fri Nov 8 3039 30:39:48',
        linkToDetails: 'link to details',
        taskId: '19104324_5O1HkLY3ueRrOce',
        jobId: '19104324_5O1HkLY3ue'
      },
      {
        key: 'error2',
        errorId: 'error2',
        errorCode: 'errorCode2',
        errorSourceType: 'Audio',
        sourceId: '66053',
        severity: 'Normal',
        timestamp: 'Fri Nov 8 3039 30:39:48',
        linkToDetails: 'link to details',
        taskId: '19104324_5O1HkLY3ueRrOce',
        jobId: '19104324_5O1HkLY3ue'
      },
      {
        key: 'error3',
        errorId: 'error3',
        errorCode: 'errorCode3',
        errorSourceType: 'Video',
        sourceId: '66529',
        severity: 'Normal',
        timestamp: 'Fri Nov 8 3039 30:39:48',
        linkToDetails: 'link to details',
        taskId: '19104216_cjhoUa7SvlHAvj7',
        jobId: '19104216_cjhoUa7Svl'
      },
      {
        key: 'error4',
        errorId: 'error4',
        errorCode: 'errorCode4',
        errorSourceType: 'Audio',
        sourceId: '66528',
        severity: 'Normal',
        timestamp: 'Fri Nov 8 3039 30:39:48',
        linkToDetails: 'link to details',
        taskId: '19104215_LVx9IShCPLdXqli',
        jobId: '19104215_LVx9IShCPL'
      },
      {
        key: 'error5',
        errorId: 'error5',
        errorCode: 'errorCode5',
        errorSourceType: 'Audio',
        sourceId: '66528',
        severity: 'Normal',
        timestamp: 'Fri Nov 8 3039 30:39:48',
        linkToDetails: 'link to details',
        taskId: '19104215_LVx9IShCPLdXqli',
        jobId: '19104215_LVx9IShCPL'
      },
      {
        key: 'error6',
        errorId: 'error6',
        errorCode: 'errorCode6',
        errorSourceType: 'Audio',
        sourceId: '66528',
        severity: 'Normal',
        timestamp: 'Fri Nov 8 3039 30:39:48',
        linkToDetails: 'link to details',
        taskId: '19104215_LVx9IShCPLdXqli',
        jobId: '19104215_LVx9IShCPL'
      }
    ]
  };
  closeModal = e => {
    this.setState({
      visible: false
    });
  };
  showModal = e => {
    console.log(`event ${e.target}`);
    const errorDetail = this.state.data.filter(
      item => item.errorId == e.target.text
    )[0];
    const dataModal = [
      {
        name: 'Error Id',
        value: errorDetail.errorId
      },
      {
        name: 'Error Code',
        value: errorDetail.errorCode
      },
      {
        name: 'Error Source Type',
        value: errorDetail.errorSourceType
      },
      {
        name: 'Source ID',
        value: errorDetail.sourceId
      },
      {
        name: 'Severity',
        value: errorDetail.severity
      },
      {
        name: 'timestamp',
        value: errorDetail.timestamp
      },
      {
        name: 'Path to input directory',
        value: 'path'
      },
      {
        name: 'Path to output directory',
        value: 'path'
      },
      {
        name: 'Path to error json file',
        value: 'path'
      },
      {
        name: 'Path to error log file and line number of where it is logged',
        value: 'path'
      }
    ];
    this.setState({
      dataModal: dataModal,
      visible: true
    });
  };
  render() {
    let errorListData = [];
    const { filter } = this.props;
    if (filter) {
      const { field, value } = filter;
      errorListData = this.state.data.filter(item => item[field] === value);
    } else {
      errorListData = this.state.data;
    }

    const errorListTable = {
      title: 'error list',
      columns: [
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
      ],
      data: errorListData
    };
    return (
      <div>
        <Card
          title={errorListTable.title}
          bordered={false}
          style={{ marginTop: '10px' }}
        >
          <Table
            pagination={{ pageSize: 10 }}
            columns={errorListTable.columns}
            dataSource={errorListTable.data}
          />
          {errorListTable.data.length && <Button type="primary">Export</Button>}
        </Card>
        <Modal
          title="Error Detail"
          visible={this.state.visible}
          onOk={this.closeModal}
          onCancel={this.closeModal}
          width="90%"
        >
          <Row>
            <Col span={12} className={styles['task-detail-left']}>
              <Descriptions
                bordered
                column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
              >
                {this.state.dataModal.map(item => {
                  return (
                    <Descriptions.Item key={item.name} label={item.name}>
                      {item.value}
                    </Descriptions.Item>
                  );
                })}
              </Descriptions>
            </Col>
            <Col span={12} className={styles['task-detail-right']}>
              <div>Log file output related to error</div> <br />
            </Col>
            <Col span={24} className={styles['task-detail-action']}>
              <Button type="primary">Export</Button>
              <Button>Assign</Button>
              <Button>Mute Error Code</Button>
            </Col>
          </Row>
        </Modal>
      </div>
    );
  }
}
export default ErrorTable;