import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Card, Table, Button } from 'antd';
class ErrorTable extends Component {
  render() {
    let errorListData = []
    for (let i = 1; i < 15; i++) {
      errorListData.push({
        key: i,
        errorId: i,
        errorCode: `${i}`,
        errorSourceType: `Type${i}`,
        sourceId: "33",
        severity: "Severity",
        timestamp: "Fri Nov 8 3039 30:39:48",
        linkToDetails: "link to details"
      });
    }
    const errorListTable = {
      title: "error list",
      columns: [{
        title: 'Error ID',
        dataIndex: 'errorId'
      }, {
        title: 'Error Code',
        dataIndex: 'errorCode'
      }, {
        title: 'Error Source Type',
        dataIndex: 'errorSourceType'
      }, {
        title: 'Source ID',
        dataIndex: 'sourceId'
      }, {
        title: 'Severity',
        dataIndex: 'severity'
      }, {
        title: 'timestamp',
        dataIndex: 'timestamp'
      }, {
        title: 'link to details',
        dataIndex: 'linkToDetails',
        render: text => <a>{text}</a>
      }],
      data: errorListData
    }
    return (
      <Card title={errorListTable.title} bordered={false} style={{ marginTop: "10px" }} >
        <Table
          pagination={{ pageSize: 10 }}
          columns={errorListTable.columns}
          dataSource={errorListTable.data}
        />
        <Button type="primary">Export</Button>
      </Card >
    );
  }
}
export default ErrorTable;
