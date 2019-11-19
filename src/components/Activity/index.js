import React, { Component, Fragment } from 'react';
import { string } from 'prop-types';

import { Card, Row, Col, Timeline, Icon, Input } from 'antd';
const { Search } = Input;
import { dataActivity } from '../Users/UserDetail/mockData';
import styles from './styles.scss';
class Activity extends Component {
  static propTypes = {
    userId: string
  };

  render() {
    const { userId } = this.props;
    const activity = dataActivity.filter(item => item.userId === userId);
    const getIcon = (on, action) => {
      let color;
      switch (action) {
        case 'edit':
          color = '#ffc53d';
          break;
        case 'delete':
          color = '#ff4d4f';
          break;
        case 'create':
          color = '#bae637';
      }
      switch (on) {
        case 'Contacts':
          return (
            <Icon type="team" style={{ fontSize: '16px', color: color }} />
          );
        case 'Event':
          return (
            <Icon type="calendar" style={{ fontSize: '16px', color: color }} />
          );
        case 'Projects':
          return (
            <Icon type="file" style={{ fontSize: '16px', color: color }} />
          );
        case 'Note':
          return (
            <Icon type="edit" style={{ fontSize: '16px', color: color }} />
          );
      }
    };
    const compareDate = (ts1, ts2) => {
      const timestamp1 = new Date(ts1);
      const timestamp2 = new Date(ts2);
      const d1 = timestamp1.getDate(),
        m1 = timestamp1.getMonth(),
        y1 = timestamp1.getFullYear();
      const d2 = timestamp2.getDate(),
        m2 = timestamp2.getMonth(),
        y2 = timestamp2.getFullYear();
      if (d1 === d2 && m1 === m2 && y1 === y2) return true;
      return false;
    };
    return (
      <Fragment>
        <Card className={styles['activity-card']}>
          <Row>
            <Col span={6} className={styles['title']}>
              Activity
            </Col>
            <Col span={18} className={styles['input-search-col']}>
              <Search
                placeholder="Explore Modern Admin"
                onSearch={value => console.log(value)}
                style={{ width: '50%' }}
              />
            </Col>
          </Row>
          {/* <Row>Filter</Row> */}
          <Row className={styles['timeline']}>
            <Timeline>
              {activity.map((item, i) => (
                <div key={item.activityId}>
                  {(activity[i - 1] &&
                    compareDate(item.timestamp, activity[i - 1].timestamp) ===
                      false) ||
                  i === 0 ? (
                    compareDate(item.timestamp, new Date()) ? (
                      <div className={styles['date']}>Today</div>
                    ) : (
                      <div className={styles['date']}>{item.timestamp}</div>
                    )
                  ) : null}
                  <Timeline.Item dot={getIcon(item.on, item.action)}>
                    <Row>
                      <span className={styles['font-weight-500']}>
                        {item.detail}
                      </span>
                      <span> on </span>
                      <span className={styles['font-weight-500']}>
                        {item.on}
                      </span>
                    </Row>
                    <Row className={styles['timestamp']}>{item.timestamp}</Row>
                  </Timeline.Item>
                </div>
              ))}
            </Timeline>
          </Row>
        </Card>
      </Fragment>
    );
  }
}
export default Activity;
