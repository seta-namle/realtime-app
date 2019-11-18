import React, { Component } from 'react';
import { Card, Descriptions, Col, Row, Button } from 'antd';
import { connect } from 'react-redux';
import { func, string } from 'prop-types';
import { ON_CLICK_DETAIL } from '../../state/modules/sideBar';
import { selectCurrentRoutePayload } from 'state/modules/routing';
import { dataActiveTask } from '../Tasks/mockData';
import styles from './styles.scss';
class TableDetail extends Component {
    render() {
        const { data, title } = this.props;
        return (
            <Card title={title} className={styles['task-detail']}>
                <Row>
                    <Col span={24} className={styles['task-detail-left']}>
                        <Descriptions
                            bordered
                            column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
                        >
                            {data.map(item => {
                                return (
                                    <Descriptions.Item key={item.name} label={item.name}>
                                        {item.value}
                                    </Descriptions.Item>
                                );
                            })}
                        </Descriptions>
                    </Col>
                    <Col span={24} className={styles['task-detail-action']}>
                        <Button type="primary">Export</Button>
                        <Button>Watch</Button>
                    </Col>
                </Row>
            </Card>
        )
    }
}
export default TableDetail;
