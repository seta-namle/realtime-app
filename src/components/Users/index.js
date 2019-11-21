import React, { Component, Fragment } from 'react';
import TableList from '../TableList';
import styles from './styles.scss';
import { string, func } from 'prop-types';
import { Card, Row, Col } from 'antd';
import { connect } from 'react-redux';
import { ON_CLICK_DETAIL } from '../../state/modules/sideBar';
import { selectCurrentRoutePayload } from 'state/modules/routing';
import UserDetail from './UserDetail';
import UsersManagerTabs from '../UsersManagerTabs';
import Activity from '../Activity';

class Users extends Component {
  static propTypes = {
    tabName: string,
    userId: string,
    onClickDetail: func
  };
  
  render() {
    const { userId } = this.props;
    if (userId) {
      return <UserDetail userId={userId} />;
    }
    return (
      <Fragment>
        <Row className={styles['users']}>
         <UsersManagerTabs />
        </Row>
        <Row>
          <Col span={12}>
            <Activity />
          </Col>
        </Row>
      </Fragment>
    );
  }
}
export default connect(
  state => ({
    tabName: selectCurrentRoutePayload(state).tabName,
    userId: selectCurrentRoutePayload(state).id
  }),
  {
    onClickDetail: payload => ({
      type: ON_CLICK_DETAIL,
      payload
    })
  }
)(Users);
