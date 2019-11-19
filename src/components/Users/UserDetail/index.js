import React, { Component, Fragment } from 'react';
import { string } from 'prop-types';
import TableDetail from '../../TableDetail';
import Activity from '../../Activity';
import { Card, Row, Col } from 'antd';
import { dataUsers } from '../mockData';

class UserDetail extends Component {
  static propTypes = {
    userId: string
  };

  render() {
    const userId = this.props.userId;
    const dataUsersById = dataUsers.find(item => item.userId === userId);
    const dataUserDetail = [
      {
        name: 'Id',
        value: dataUsersById.userId
      },
      {
        name: 'User Name',
        value: dataUsersById.userName
      },
      {
        name: 'First Name',
        value: dataUsersById.firstName
      },
      {
        name: 'Last Name',
        value: dataUsersById.lastName
      },
      {
        name: 'Address',
        value: dataUsersById.address
      },
      {
        name: 'City',
        value: dataUsersById.city
      },
      {
        name: 'State',
        value: dataUsersById.state
      },
      {
        name: 'Country',
        value: dataUsersById.country
      },
      {
        name: 'Zip',
        value: dataUsersById.zip
      },
      {
        name: 'Phone',
        value: dataUsersById.phone
      },
      {
        name: 'Email',
        value: dataUsersById.email
      },
      {
        name: 'Last Login Timestamp',
        value: dataUsersById.lastLoginTimestamp
      },
      {
        name: 'Last Login IP Adress',
        value: dataUsersById.lastLoginIPAdress
      },
      {
        name: 'Last Session Length',
        value: dataUsersById.lastSessionlength
      },
      {
        name: 'Max Failed Login Attempts In A Row',
        value: dataUsersById.maxFailedloginAttemptsInARow
      },
      {
        name: 'Last Password Reset',
        value: dataUsersById.lastPasswordReset
      },
      {
        name: 'Last Failed Login',
        value: dataUsersById.lastFailedLogin
      },
      {
        name: 'Account Locked',
        value: dataUsersById.accountLocked
      }
    ];
    return (
      <Fragment>
        <TableDetail title="User Detail" data={dataUserDetail} />
        <Row>
          <Col span={12}>
            <Activity userId={userId} />
          </Col>
        </Row>
      </Fragment>
    );
  }
}
export default UserDetail;
