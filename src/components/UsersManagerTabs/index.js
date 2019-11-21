import React, { Component, Fragment } from 'react';
import styles from './styles.scss';
import { string } from 'prop-types';
import { Card, Row, Col, List, Badge, Input } from 'antd';
const { Search } = Input;
import { connect } from 'react-redux';
import { selectCurrentRoutePayload } from 'state/modules/routing';
import AllContacts from '../AllContacts';
class UsersManagerTabs extends Component {
    static propTypes = {
        tabName: string,
        userId: string
    };

    render() {
        const contactMenu = [
            'All Contacts',
            'Recently contacted',
            'Favorite contacted'
        ]
        const groupMenu = [
            {
                label: 'Super Admin',
                number: 3
            },
            {
                label: 'Admin',
                number: 9
            },
            {
                label: 'View',
                number: 11
            }
        ]
        const moreMenu = [
            'Import',
            'Export',
            'Print',
            'Restore contacts',
            'Find duplicate'
        ]
        return (
            <Fragment>
                <Row>
                    <Col span={4}>
                        <Card>
                            <Row className={styles['margin-top-20']}>
                                <Col span={4}>
                                    <img style={{ maxWidth: "100%" }} src={`https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png`} />
                                </Col>
                                <Col span={20}>
                                    User Name
                                    </Col>
                            </Row>
                            <Search className={styles['margin-top-20']}
                                placeholder="Search contacts..."
                                onChange={() => { }}
                            />
                            <List className={styles['margin-top-20']}
                                bordered
                                dataSource={contactMenu}
                                renderItem={item => (
                                    <List.Item>
                                        {item}
                                    </List.Item>
                                )}
                            />
                            <div className={styles['margin-top-20']}>Groups</div>
                            <List className={styles['margin-top-20']}
                                bordered
                                dataSource={groupMenu}
                                renderItem={item => (
                                    <List.Item>
                                        <div>{item.label} <Badge count={item.number} /></div>
                                    </List.Item>
                                )}
                            />
                            <div className={styles['margin-top-20']}>More</div>
                            <List className={styles['margin-top-20']}
                                bordered
                                dataSource={moreMenu}
                                renderItem={item => (
                                    <List.Item className={styles['item-more']}>
                                        {item}
                                    </List.Item>
                                )}
                            />
                        </Card>
                    </Col>
                    <Col span={20}>
                        <Card>
                            <AllContacts />
                        </Card>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}

export default connect(
    state => ({
        tabName: selectCurrentRoutePayload(state).tabName,
        userId: selectCurrentRoutePayload(state).id
    })
)(UsersManagerTabs);