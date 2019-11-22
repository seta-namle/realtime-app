import React, { Component, Fragment } from 'react';
import styles from './styles.scss';
import { string } from 'prop-types';
import { Card, Row, Col, List, Input } from 'antd';
const { Search } = Input;
import { connect } from 'react-redux';
import { selectCurrentRoutePayload } from 'state/modules/routing';
import TableContacts from '../TableContacts';
import { dataUsers } from '../Users/mockData';
class UsersManagerTabs extends Component {
    static propTypes = {
        tabName: string,
        userId: string
    };
    state = {
        data: dataUsers
    }
    onSearch = (event) => {
        const validValue = event.target.value.replace(/\s{2,}/g, ' ').trim()
        if (!validValue) {
            return this.setState({
                data: dataUsers
            })
        }
        this.setState(state => ({
            data: state.data.filter(item => {
                return item.userName.toLowerCase().includes(validValue.toLowerCase())
                    || item.email.toLowerCase().includes(validValue.toLowerCase())
                    || item.phone.toLowerCase().includes(validValue.toLowerCase())
            })
        }))
    }
    filter = event => {
        switch(event){
            case 'All Contacts':
                return this.setState({
                    data: dataUsers
                })
            case 'Recently contacted':
                return this.setState({
                    data: [dataUsers[0]]
                })
            case 'Favorite contacted':
                return this.setState({
                    data: dataUsers.filter(item => item.favorite)
                })
            case 'Super Admin':
                return this.setState({
                    data: dataUsers.filter(item => item.role === 0)
                })
            case 'Admin':
                return this.setState({
                    data: dataUsers.filter(item => item.role === 1)
                })
            case 'View':
                return this.setState({
                    data: dataUsers.filter(item => item.role === 2)
                })
            default:
                return 
        }
    }
    render() {
        console.log('render', this.state.data)
        const { data } = this.state
        const contactMenu = [
            'All Contacts',
            'Recently contacted',
            'Favorite contacted'
        ]
        const groupMenu = [
            {
                label: 'Super Admin',
                number: 3,
                badgeColor: 'purple'
            },
            {
                label: 'Admin',
                number: 9,
                badgeColor: 'cyan'
            },
            {
                label: 'View',
                number: 11,
                badgeColor: 'gold'
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
                                onChange={this.onSearch}
                            />
                            <List className={styles['margin-top-20']}
                                bordered
                                dataSource={contactMenu}
                                renderItem={item => (
                                    <List.Item className={styles['opt-filter']} onClick={() => this.filter(item)}>
                                        {item}
                                    </List.Item>
                                )}
                            />
                            <div className={`${styles['margin-top-20']} ${styles['head-list']}`}>Groups</div>
                            <List className={styles['margin-top-20']}
                                bordered
                                dataSource={groupMenu}
                                renderItem={item => (
                                    <List.Item className={styles['opt-filter']} onClick={() => this.filter(item.label)}>
                                        {item.label}
                                        <span className={`${styles['badge']} ${styles[item.badgeColor]}`}>{item.number}</span>
                                    </List.Item>
                                )}
                            />
                            <div className={`${styles['margin-top-20']} ${styles['head-list']}`}>More</div>
                            <List className={styles['margin-top-20']}
                                bordered
                                dataSource={moreMenu}
                                renderItem={item => (
                                    <List.Item className={`${styles['item-more']} ${styles['opt-filter']}`} onClick={() => this.filter(item)}>
                                        {item}
                                    </List.Item>
                                )}
                            />
                        </Card>
                    </Col>
                    <Col span={20}>
                        <Card>
                            <TableContacts data={data} onSearch={this.onSearch}/>
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