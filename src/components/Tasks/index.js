import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import { connect } from 'react-redux';
import { func, string } from 'prop-types';
import { ON_CLICK_DETAIL } from '../../state/modules/sideBar';
import { selectCurrentRoutePayload } from 'state/modules/routing';
import JobDetail from './TaskDetail';
import ActiveTaskTable from './ActiveTaskTable';
import ErrorTable from './ErrorTable';
class Tasks extends Component {
  static propTypes = {
    onClickDetail: func,
    tabName: string,
    taskId: string
  };
  
  render() {
    const { taskId } = this.props;
    if (taskId) {
      return <JobDetail taskId={taskId} />;
    }
    return (
      <Fragment>
        <ActiveTaskTable />
        <ErrorTable />
      </Fragment>
    );
  }
}
export default connect(
  state => ({
    tabName: selectCurrentRoutePayload(state).tabName,
    taskId: selectCurrentRoutePayload(state).id
  }),
  {
    onClickDetail: payload => ({
      type: ON_CLICK_DETAIL,
      payload
    })
  }
)(Tasks);
