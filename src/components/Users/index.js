import React, { Component, Fragment } from 'react';
import TableList from '../TableList';
import styles from './styles.scss';
import { string, func } from 'prop-types';
import { Card, Row, Col } from 'antd';
import { connect } from 'react-redux';
import { ON_CLICK_DETAIL } from '../../state/modules/sideBar';
import { selectCurrentRoutePayload } from 'state/modules/routing';
import UserDetail from './UserDetail';
import { dataUsers } from './mockData';
import Activity from '../Activity';

class Users extends Component {
  static propTypes = {
    tabName: string,
    userId: string,
    onClickDetail: func
  };
  onClickDetail = event => {
    const { onClickDetail, tabName } = this.props;
    const payload = {
      tabName,
      id: event.target.text
    };
    onClickDetail(payload);
  };
  render() {
    const { userId } = this.props;
    const userColumns = [
      {
        title: 'Name',
        dataIndex: 'userName'
      },
      {
        title: 'Email',
        dataIndex: 'email'
      },
      {
        title: 'Phome',
        dataIndex: 'phone'
      },
      {
        title: 'Id',
        dataIndex: 'userId',
        render: text => <a onClick={this.onClickDetail}>{text}</a>
      }
    ];
    if (userId) {
      return <UserDetail userId={userId} />;
    }
    return (
      <Fragment>
        <Card>
          <Row>
            <Col span={4}>Side bar</Col>
            <Col span={20}>
              <TableList
                columns={userColumns}
                title="All contacts"
                dataRow={dataUsers}
              />
            </Col>
          </Row>
        </Card>
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
