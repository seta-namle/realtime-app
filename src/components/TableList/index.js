import React, { Component } from 'react';
import { Card, Table } from 'antd';
import { connect } from 'react-redux';
import { func, string } from 'prop-types';
import { ON_CLICK_DETAIL } from '../../state/modules/sideBar';
import { selectCurrentRoutePayload } from 'state/modules/routing';
class TableList extends Component {
    
    render() {
        const { columns, dataRow, title } = this.props;
        return (
            <Card
                title={title}
                bordered={false}
                style={{ marginTop: '10px' }}
            >
                <Table
                    pagination={{ pageSize: 10 }}
                    columns={columns}
                    dataSource={dataRow}
                />
            </Card>
        )
    }
}
export default connect(
    state => ({
        tabName: selectCurrentRoutePayload(state).tabName,
        taskId: selectCurrentRoutePayload(state).id
    }),
    {
        onClickDetail: payload => ({
            type: ON_CLICK_DETAIL,
            payload
        })
    }
)(TableList);
