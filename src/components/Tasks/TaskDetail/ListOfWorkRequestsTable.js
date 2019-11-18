import React, { Component } from 'react';

import { Card, Table, Button, Row, Col } from 'antd';
import styles from './styles.scss';
import { listOfWorkRequests } from './mockData';

class ListOfWorkRequestsTable extends Component {
  render() {
    return (
      <div>
        <Card
          title={listOfWorkRequests.title}
          bordered={false}
          style={{ marginTop: '10px' }}
        >
          <Table
            pagination={{ pageSize: 10 }}
            columns={listOfWorkRequests.columns}
            dataSource={listOfWorkRequests.data}
          />
          {listOfWorkRequests.data.length && (
            <Button type="primary">Export</Button>
          )}
        </Card>
      </div>
    );
  }
}
export default ListOfWorkRequestsTable;
