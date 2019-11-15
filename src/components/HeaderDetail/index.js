import React from 'react';
import { Card, Row, Col, Typography, Progress } from 'antd';
const { Title, Text } = Typography;
import Proptypes from 'prop-types';
const HeaderDetail = ({ id, title, processValue, processTime }) => (
    <Card>
        <Row>
            <Col span={18}>
                <Title level={3}>{id}</Title>
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
    id: Proptypes.string,
    title: Proptypes.string,
    processValue: Proptypes.string,
    processTime: Proptypes.string
}
export default HeaderDetail;