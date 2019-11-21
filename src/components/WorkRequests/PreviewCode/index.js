import React from 'react';
import { Card, Descriptions, Col, Row, Button } from 'antd';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const PreviewCode = ({ data, title, isPreviewCode, dataPreview, buttonTemplates, isCardWrapper }) => {

    const nodeChild = ( <React.Fragment>
        <Row gutter={isPreviewCode ? 24 : 0}>
            <Col span={isPreviewCode ? 12 : 24} className={styles['task-detail-left']}>
                <Descriptions
                    bordered
                    column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
                >
                    {data.map(item => {
                        return (
                            <Descriptions.Item key={item.name} label={item.name}>
                                {item.value}
                            </Descriptions.Item>
                        );
                    })}
                </Descriptions>
            </Col>
            {
                isPreviewCode && <Col span={12} className={styles['task-detail-right']}>
                    <div className={styles['preview-detail']}>
                        {dataPreview}
                    </div>
                </Col>
            }
        </Row>
        {
                buttonTemplates.length > 0 && <Row>
                    <Col span={24} className={styles['task-detail-action']}>
                        {
                            buttonTemplates.map(({ children, type, onClick, ...rest }, index) => (
                                <Button key={index} type={type} onClick={onClick} {...rest} >{children}</Button>
                            ))
                        }
                    </Col>
                </Row>
            }
        </React.Fragment>
    )

    return (
        isCardWrapper ? <Card title={title} className={styles['task-detail']}>
           {nodeChild}
        </Card>
        : <React.Fragment>{ nodeChild }</React.Fragment>
    )
}
PreviewCode.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({})
    ),
    title: PropTypes.string,
    isPreviewCode: PropTypes.bool,
    dataPreview: PropTypes.any,
    buttonTemplates: PropTypes.arrayOf(PropTypes.shape({
        children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        type: PropTypes.string,
        onClick: PropTypes.func,
    })),
    isCardWrapper :  PropTypes.bool,
}

PreviewCode.defaultProps = {
    data: [],
    title: '',
    isPreviewCode: false,
    dataPreview: '',
    buttonTemplates: [],
    isCardWrapper : true,
}
export default PreviewCode;
