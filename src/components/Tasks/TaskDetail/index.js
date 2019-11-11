import React, { Component } from 'react';
import { Card, Row, Col, Typography } from 'antd';
const { Title, Text } = Typography;
class TaskDetail extends Component {
    render() {
        return (
            <Card>
                <Row>
                    <Col span={18}>
                        <Title level={3}>123456789-897-789</Title>
                        <Text>JobId</Text>
                    </Col>
                    <Col span={6}>
                            col-6 col-pull-18
                    </Col>
                </Row>
            </Card>
        )
    }
}
export default TaskDetail;