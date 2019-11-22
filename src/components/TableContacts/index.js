import React, { Component, Fragment } from 'react';
import { string, func, arrayOf } from 'prop-types';
import { Card, Row, Col, Table, Icon, Button, Menu, Dropdown, Input, InputNumber } from 'antd';
const { Search } = Input;
import styles from './styles.scss';
import { connect } from 'react-redux';
import { ON_CLICK_DETAIL } from '../../state/modules/sideBar';
import { selectCurrentRoutePayload } from 'state/modules/routing';
class TableContacts extends Component {
    static propTypes = {
        tabName: string,
        userId: string,
        data: arrayOf(Object),
        onClickDetail: func,
        onSearch: func
    };
    state = {
        pageSize: 10,
        sortedInfo: {},
        data: this.props.data
    }
    onClickDetail = event => {
        const { onClickDetail, tabName } = this.props;
        const {data} = this.state
        const payload = {
            tabName,
            id: data.filter(item => item.userName === event.target.text)[0].userId
        };
        onClickDetail(payload);
    };
    changeShowEntries = value => {
        this.setState({
            pageSize: value
        })
    }
    onSearch = (event) => {
        this.props.onSearch(event)
    }
    handleChange = (pagination, filters, sorter) => {
        this.setState({
            sortedInfo: sorter,
            pageSize: pagination.pageSize
        });
    };
    rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: record => ({
            name: record.userName,
        }),
    }
    render() {
        const { pageSize } = this.state
        const { data } = this.props
        let { sortedInfo } = this.state
        const renderFavorite = text => {
            return text
                ? <Icon className={styles['favorite']} type="star" theme="filled" />
                : <Icon className={styles['favorite']} type="star" />
        }
        const renderAction = () => {
            const menu = (
                <Menu onClick={() => { }}>
                    <Menu.Item key="1">1st action</Menu.Item>
                    <Menu.Item key="2">2nd action</Menu.Item>
                    <Menu.Item key="3">3rd action</Menu.Item>
                </Menu>
            )
            return (
                <Dropdown overlay={menu}>
                    <Button className={`${styles['button-header']} ${styles['purple-button']}`} icon="setting">
                        <Icon type="down" />
                    </Button>
                </Dropdown>
            )
        }
        const columns = [
            {
                title: 'Name',
                dataIndex: 'userName',
                render: text => <a onClick={this.onClickDetail}>{text}</a>,
                sorter: (a, b) => a.userName.localeCompare(b.userName) > 0,
                sortOrder: sortedInfo.columnKey === 'userName' && sortedInfo.order,
                ellipsis: true
            },
            {
                title: 'Email',
                dataIndex: 'email',
                render: text => <a>{text}</a>,
                sorter: (a, b) => a.email.localeCompare(b.email) > 0,
                sortOrder: sortedInfo.columnKey === 'email' && sortedInfo.order,
                ellipsis: true,
            },
            {
                title: 'Phone',
                dataIndex: 'phone',
                sorter: (a, b) => a.phone.localeCompare(b.phone) > 0,
                sortOrder: sortedInfo.columnKey === 'phone' && sortedInfo.order,
                ellipsis: true,
            },
            {
                title: 'Favorite',
                dataIndex: 'favorite',
                render: text => renderFavorite(text),
                sorter: (a, b) => a.favorite,
                sortOrder: sortedInfo.columnKey === 'favorite' && sortedInfo.order,
                ellipsis: true,
            },
            {
                title: 'Action',
                dataIndex: 'action',
                render: () => renderAction()
            }
        ]
        const menu = (
            <Menu onClick={() => { }}>
                <Menu.Item key="1">1st item</Menu.Item>
                <Menu.Item key="2">2nd item</Menu.Item>
                <Menu.Item key="3">3rd item</Menu.Item>
            </Menu>
        );
        return (
            <Card bordered={false}>
                <Row className={styles['header']}>
                    <Col className={styles['title']} span={12}>
                        All Contacts
                    </Col>
                    <Col className={styles['text-align-right']} span={12}>
                        <Button className={`${styles['button-header']} ${styles['purple-button']}`} icon="plus" size="small">
                            Add Contacts
                        </Button>
                        <Dropdown overlay={menu}>
                            <Button className={`${styles['button-header']} ${styles['warning-button']}`} icon="cloud-download" size="small">
                                <Icon type="down" />
                            </Button>
                        </Dropdown>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        Show <InputNumber min={1} max={20} defaultValue={pageSize} onChange={this.changeShowEntries} /> entries
                    </Col>
                    <Col span={12} className={styles['text-align-right']}>
                        <Search
                            onChange={this.onSearch}
                            style={{ width: '50%' }}
                        />
                    </Col>
                </Row>
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={{ pageSize: pageSize }}
                    scroll={{ x: 1000 }}
                    rowSelection={this.rowSelection}
                    onChange={this.handleChange}
                />
            </Card>
        )
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
)(TableContacts);