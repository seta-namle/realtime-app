
import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import { connect } from 'react-redux';
import { func, string } from 'prop-types';
import {
    ON_CLICK_DETAIL
} from '../../state/modules/sideBar';
import {
    selectCurrentRoutePayload
} from 'state/modules/routing';
import JobDetail from './TaskDetail';
class Tasks extends Component {
    static propTypes = {
        onClickDetail: func,
        tabName: string,
        taskId: string
    }
    onClickRow = (value) => {
        const {
            onClickDetail,
            tabName
        } = this.props;
        const payload = {
            tabName,
            id: value.key
        }
        onClickDetail(payload);
    }
    render() {
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                render: text => <a>{text}</a>,
            },
            {
                title: 'Status',
                dataIndex: 'status',
            },
            {
                title: 'Date',
                dataIndex: 'date',
            },
        ];
        const data = [
            {
                key: '1',
                name: 'Tasks demo 1',
                status: 'Complete',
                date: 'Fri Nov 8 2019 10:19:48'
            },
            {
                key: '2',
                name: 'Tasks demo 2',
                status: 'Complete',
                date: 'Fri Nov 8 2019 10:19:48'
            },
            {
                key: '3',
                name: 'Tasks demo 3',
                status: 'Complete',
                date: 'Fri Nov 8 2019 10:19:48'
            },
            {
                key: '4',
                name: 'Tasks demo 4',
                status: 'Complete',
                date: 'Fri Nov 8 2019 10:19:48'
            },
        ];

        // rowSelection object indicates the need for row selection
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
                name: record.name,
            }),
        };
        const {
            taskId
        } = this.props;
        if(taskId) {
           return <JobDetail />
        }
        return (
            <Fragment>
                TASKS
                <Table
                    rowSelection={rowSelection} columns={columns} dataSource={data}
                    onRow={(record, rowIndex) => {
                        return {
                            onClick: event => { this.onClickRow(record) }
                        };
                    }}
                />
            </Fragment>
        )
    }
}
export default connect(
    state => ({
        tabName: selectCurrentRoutePayload(state).tabName,
        taskId: selectCurrentRoutePayload(state).id
    }),
    {
        onClickDetail: (payload) => ({
            type: ON_CLICK_DETAIL,
            payload
        })
    }
)(Tasks);
