import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import { connect } from 'react-redux';
import { func, string } from 'prop-types';
import { ON_CLICK_DETAIL } from '../../state/modules/sideBar';
import { selectCurrentRoutePayload } from 'state/modules/routing';
import JobDetail from './JobDetail';

class Jobs extends Component {
  static propTypes = {
    onClickDetail: func,
    tabName: string,
    jobId: string
  };
  constructor(props) {
    super(props);
    this.onClickRow = this.onClickRow.bind(this);
  }

  onClickRow = value => {
    const { onClickDetail, tabName } = this.props;
    const payload = {
      tabName,
      id: value.key
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
    const data = [
      {
        key: '1',
        name: 'Job demo 1',
        status: 'Complete',
        date: 'Fri Nov 8 2019 10:19:48'
      },
      {
        key: '2',
        name: 'Job demo 2',
        status: 'Complete',
        date: 'Fri Nov 8 2019 10:19:48'
      },
      {
        key: '3',
        name: 'Job demo 3',
        status: 'Complete',
        date: 'Fri Nov 8 2019 10:19:48'
      },
      {
        key: '4',
        name: 'Job demo 4',
        status: 'Complete',
        date: 'Fri Nov 8 2019 10:19:48'
      }
    ];
    const { jobId } = this.props;
    if (jobId) {
      return <JobDetail jobId={jobId} />;
    }
    return (
      <Fragment>
        JOBS
        <Table
          columns={columns}
          dataSource={data}
          onRow={(record, rowIndex) => {
            return {
              onClick: () => {
                this.onClickRow(record);
              }
            };
          }}
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
)(Jobs);
