import React from 'react';
import { Card, Typography, Row, Col, Icon } from 'antd';
const { Title, Text } = Typography;
import PropTypes from 'prop-types';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import styles from './styles.scss';
const formatNumber = num => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};
const DashBoardCard = ({
  dataChart,
  chartColor,
  cardTitle,
  cardDes,
  cardValue,
  cardIcon,
  type,
  titleColor,
  customStyle
}) => {
  if (type === 'activeTasks') {
    return (
      <Card className={customStyle ? styles['card-dashboard-custom'] : styles['card-dashboard-active']}>
        <div className={styles['card-dashboard-content']}>
          <Title
            level={1}
            className={styles['card-title']}
            style={{ color: titleColor }}
          >
            {formatNumber(cardTitle)}
          </Title>
          <Text>{cardDes}</Text>
        </div>
      </Card>
    );
  }
  return (
    <Card className={styles['card-dashboard']}>
      <Row>
        <Col span={24} lg={14} className={styles['card-header']}>
          <Title level={1} className={styles['card-title']}>
            {formatNumber(cardTitle)}
          </Title>
          <Text>{cardDes}</Text>
        </Col>
        <Col span={24} lg={10} className={styles['card-header-right']}>
          <span>
            <span className={styles['card-title']}>{cardValue}</span>
            <Icon type={cardIcon} className={styles['card-icon']} />
          </span>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <ResponsiveContainer width="100%" height={85}>
            <AreaChart data={dataChart} margin={{}}>
              <Area
                type="monotone"
                dataKey="uv"
                stroke={chartColor}
                fill={chartColor}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Col>
      </Row>
    </Card>
  );
};

DashBoardCard.propTypes = {
  dataChart: PropTypes.arrayOf(PropTypes.shape({})),
  chartColor: PropTypes.string,
  cardTitle: PropTypes.string,
  cardDes: PropTypes.string,
  cardValue: PropTypes.string,
  cardIcon: PropTypes.string,
  type: PropTypes.string,
  titleColor: PropTypes.string
};
export default DashBoardCard;
