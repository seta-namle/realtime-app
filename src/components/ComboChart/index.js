import React from 'react';
import PropTypes from 'prop-types';
import { Chart } from 'react-google-charts';
import { Card, Typography } from 'antd';
import styles from './styles.scss';

const { Text } = Typography;
const sameOptionPerformance = {
  isStacked: true,
  bar: {
    groupWidth: '97%'
  },
  areaOpacity: 1,
  curveType: 'function',
  animation: {
    duration: 1000,
    easing: 'inAndOut',
    startup: true
  }
};

const ComboChart = ({
  data,
  title,
  colors,
  series,
  loader,
  isRangeFilter,
  rangeStart,
  rangeEnd,
  heightOneChart
}) => {
  const additionControl = isRangeFilter
    ? {
        controls: [
          {
            controlType: 'ChartRangeFilter',
            options: {
              filterColumnIndex: 0,
              ui: {
                chartType: 'AreaChart',
                chartOptions: {
                  ...sameOptionPerformance,
                  colors,
                  series,
                  chartArea: { width: '100%', height: '30%' },
                  hAxis: { baselineColor: 'none' }
                }
              }
            },
            controlPosition: 'bottom',
            controlWrapperParams: {
              state: {
                range: {
                  start: rangeStart,
                  end: rangeEnd
                }
              }
            }
          }
        ],
        render: ({ renderControl, renderChart }) => (
          <div>
            {renderChart()}
            <div style={{ maxHeight: 70, overflow: 'hidden' }}>
              {renderControl(() => true)}
            </div>
          </div>
        )
      }
    : {};

  return (
    <Card className={styles['task-performance']}>
      <Text>{title}</Text>
      <Chart
        {...additionControl}
        width="100%"
        height={isRangeFilter ? 'none' : heightOneChart}
        chartType="ComboChart"
        loader={loader}
        data={data}
        options={{
          ...sameOptionPerformance,
          colors,
          series,
          seriesType: 'area',
          vAxis: {
            minValue: 0,
            gridlines: { color: 'white' },
            baselineColor: 'none',
            textPosition: 'none'
          },
          hAxis: {
            gridlines: { color: 'white' },
            textPosition: 'none',
            baselineColor: 'black'
          },
          chartArea: { width: '100%', height: '100%' },
          legend: { position: 'in' }
        }}
        chartPackages={['corechart', 'controls']}
        rootProps={{ 'data-testid': '1' }}
      />
    </Card>
  );
};

ComboChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array).isRequired,
  title: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  series: PropTypes.object,
  loader: PropTypes.any,
  isRangeFilter: PropTypes.bool,
  rangeStart: PropTypes.any,
  rangeEnd: PropTypes.any
};

export default ComboChart;
