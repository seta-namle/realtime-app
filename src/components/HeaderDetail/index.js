import React from 'react';
import { Card, Row, Col, Typography, Progress } from 'antd';
const { Title, Text } = Typography;
import Proptypes from 'prop-types';
const HeaderDetail = ({ taskId, title, processValue, processTime }) => (
    <Card>
        <Row>
            <Col span={18}>
                <Title level={3}>{taskId}</Title>
                <Text>{title}</Text>
            </Col>
            <Col span={6}>
                <Text>{processValue}</Text> <br />
                <Text>{processTime}</Text>
                <Progress percent={processValue} showInfo={false} size="small" />
            </Col>
        </Row>
    </Card>
)
HeaderDetail.propTypes = {
    taskId: Proptypes.string,
    title: Proptypes.string,
    processValue: Proptypes.string,
    processTime: Proptypes.string
}
export default HeaderDetail;