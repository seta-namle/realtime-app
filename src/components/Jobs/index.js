
import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
class Job extends Component {
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
                name: 'Job demo 1',
                status: 'Complete',
                date: 'Fri Nov 8 2019 10:19:48'
            },
            {
                key: '2',
                name: 'Job demo 2',
                status: 'Complete',
                date: 'Fri Nov 8 2019 10:19:48'
            },
            {
                key: '3',
                name: 'Job demo 3',
                status: 'Complete',
                date: 'Fri Nov 8 2019 10:19:48'
            },
            {
                key: '4',
                name: 'Job demo 4',
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

        return (

            <Fragment>
            
            JOBS
                    <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
            </Fragment>
        )
    }
}
export default Job;
