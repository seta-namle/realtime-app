import React, { Component, Fragment } from 'react';
import { string } from 'prop-types';

import { Card, Row, Col, Timeline, Icon, Input, Pagination, Select, DatePicker, Carousel } from 'antd';
const { Search } = Input;
const { Option } = Select;
import { dataActivity } from '../Users/UserDetail/mockData';
import styles from './styles.scss';
const activityInit = (userId) => userId ? dataActivity.filter(item => item.userId === userId) : dataActivity
class Activity extends Component {
    static propTypes = {
        userId: string
    };
    state = {
        page: 1,
        pageSize: 5,
        total: activityInit(this.props.userId).length,
        activity: activityInit(this.props.userId).slice(0, 5),
        filterOtps: [{
            value: 'date',
            label: 'Date'
        }, {
            value: 'action',
            label: 'Action'
        }, {
            value: 'user',
            label: 'User'
        }]
    }
    onChange = (page, pageSize) => {
        this.setState({
            page: page,
            pageSize: pageSize,
            activity: activityInit(this.props.userId).slice((page - 1) * pageSize, pageSize * page)
        })
    }
    onSearch = (event) => {
        const validValue = event.target.value.replace(/\s{2,}/g, ' ').trim()
        if (!validValue) {
            return this.setState((state) => ({
                activity: activityInit(this.props.userId).slice((state.page - 1) * state.pageSize, state.pageSize * state.page)
            }))
        }
        this.setState(state => ({
            activity: state.activity.filter(item => {
                return item.on.toLowerCase().includes(validValue.toLowerCase())
                    || item.detail.toLowerCase().includes(validValue.toLowerCase())
                    || item.timestamp.toLowerCase().includes(validValue.toLowerCase())
            })
        }))
    }
    filter = (value) => {
        console.log(value)
    }
    render() {
        const { activity, pageSize, total, filterOtps } = this.state
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
                        <Icon type="project" style={{ fontSize: '16px', color: color }} />
                    );
                case 'Note':
                    return (
                        <Icon type="highlight" style={{ fontSize: '16px', color: color }} />
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
        const renderCarouselImage = (images) => {
            const temp = images.slice(0, images.length - 3)
            return <Carousel>
                {
                    temp.map((carousel, index) =>
                        <Row key={carousel} >
                            {
                                [0, 1, 2, 3].map(item =>
                                    <Col key={item} span={6}>
                                        <img className={styles['carouse-img']} src={images[index + item]} />
                                    </Col>
                                )
                            }
                        </Row>
                    )
                }
            </Carousel>
        }
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
                                onChange={this.onSearch}
                                style={{ width: '50%' }}
                            />
                        </Col>
                    </Row>
                    <Row className={styles['filter']}>
                        <Col span={12}>
                            <Select className={styles['filter-type']} placeholder="Type filter" onChange={this.filter}>
                                {
                                    filterOtps.map(item => <Option key={item.value} value={item.value}>{item.label}</Option>)
                                }
                            </Select>
                        </Col>
                        <Col span={6}>
                            <DatePicker className={styles['start-date']} placeholder="Start Date" onChange={() => { }} />
                        </Col>
                        <Col span={6}>
                            <DatePicker className={styles['end-date']} placeholder="End Date" onChange={() => { }} />
                        </Col>
                    </Row>
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
                                        {
                                            item.images && item.images.length &&
                                            renderCarouselImage(item.images)
                                        }
                                        <Row className={styles['timestamp']}>{item.timestamp}</Row>
                                    </Timeline.Item>
                                </div>
                            ))}
                        </Timeline>
                    </Row>
                    <Pagination onChange={this.onChange} total={total} pageSize={pageSize} />
                </Card>
            </Fragment>
        );
    }
}
export default Activity;
