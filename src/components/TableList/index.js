import React from 'react';
import { Card, Table } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ON_CLICK_DETAIL } from '../../state/modules/sideBar';
import { selectCurrentRoutePayload } from 'state/modules/routing';
const TableList = ({ columns, dataRow, title }) => (
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
TableList.propTypes = {
    columns: PropTypes.arrayOf(
        PropTypes.shape({})
    ),
    dataRow: PropTypes.arrayOf(
        PropTypes.shape({})
    ),
    title: PropTypes.string
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
