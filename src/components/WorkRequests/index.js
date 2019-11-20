import React, { Component, Fragment } from 'react';
import {
  Typography,
  Modal,
} from 'antd';
import { func, bool, arrayOf, object } from 'prop-types';

const { Text } = Typography;
import HeaderDetail from '../HeaderDetail';
import styles from './styles.scss';
import TableDetail from '../TableDetail';
import TableList from '../TableList';
import ComboChart from '../ComboChart';
import { 
  dataPerformance, 
  dataErrorInTaskInstance, 
 } from './mockData';
 import PreviewCode from './PreviewCode';

const ErrorModal = ({
  handleOk,
  handleCancel,
  visibleModal = false,
  listErrors = []
}) => {
  const buttons = [
    {
      children : 'Export',
      type: 'primary',
      onClick: handleOk,
    },
    {
      children : 'Assign',
      type: '',
      onClick: handleOk,
    },
    {
      children : 'Mute Error Code',
      type: '',
      onClick: handleOk,
    },
  ]
  return (
    <Modal
      title="Error Detail"
      visible={visibleModal}
      onOk={handleOk}
      onCancel={handleCancel}
      width={1000}
    >
        <PreviewCode isPreviewCode isCardWrapper={false} data={listErrors} buttonTemplates={buttons}  />
    
    </Modal>
  );
};
ErrorModal.propTypes = {
  handleOk: func,
  handleCancel: func,
  visibleModal: bool,
  listErrors: arrayOf(object)
};

class WorkRequests extends Component {
  constructor(props) {
    super(props);
    this.handleOkErrorModal = this.handleOkErrorModal.bind(this);
    this.handleCancelErrorModal = this.handleCancelErrorModal.bind(this);
    this.handleClickErrorRow = this.handleClickErrorRow.bind(this);
  }

  state = {
    visibleModal: false,
    errorDetail : [],
    errorColumns: [
      {
        title: 'Error ID',
        dataIndex: 'errorId',
        render: text => <a onClick={this.handleClickErrorRow}>{text}</a>
      },
      {
        title: 'Error Code',
        dataIndex: 'errorCode'
      },
      {
        title: 'Error Source Type',
        dataIndex: 'errorSourceType'
      },
      {
        title: 'Source ID',
        dataIndex: 'sourceId'
      },
      {
        title: 'Severity',
        dataIndex: 'severity'
      },
      {
        title: 'timestamp',
        dataIndex: 'timestamp'
      },
      {
        title: 'link to details',
        dataIndex: 'linkToDetails',
        render: text => <a>{text}</a>
      }
    ]
  };
    handleOkErrorModal() {
      this.setState({
        visibleModal: false
      });
    }

    handleCancelErrorModal() {
      this.setState({
        visibleModal: false
      });
    }

    handleClickErrorRow = (e) => {
      const indexError = dataErrorInTaskInstance.findIndex((el) => {
        return el.errorId === e.target.text;
      })

      if(indexError >= 0) {
        const errorDetail = Object.keys(dataErrorInTaskInstance[indexError]).map(function(key) {
          return {
            name : key,
            value: dataErrorInTaskInstance[indexError][key]
          };
        });
        this.setState({
          visibleModal: true,
          errorDetail,
        });
      }
    };

  render() {
    const dataJobDetail = [
      {
        name: 'Job ID',
        value: this.props.jobId
      },
      {
        name: 'Org ID',
        value: ''
      },
      {
        name: 'Priority',
        value: ''
      },
      {
        name: 'Job Template ID',
        value: ''
      },
      {
        name: 'Schedule ID',
        value: ''
      },
      {
        name: '# Tasks',
        value: ''
      },
      {
        name: 'Start time',
        value: ''
      },
      {
        name: '# Tasks Complete',
        value: ''
      },
      {
        name: '# Active Tasks',
        value: ''
      },
      {
        name: '# Errors',
        value: ''
      },
    ];

    const dataTaskDetail = [
      {
        name: 'Task ID',
        value: this.props.jobId
      },
      {
        name: 'Task Name',
        value: ''
      },
      {
        name: 'Task Engine Type',
        value: ''
      },
      {
        name: 'Engine Build',
        value: ''
      },
      {
        name: 'Schedule Start Time',
        value: ''
      },
      {
        name: 'Parent Task ID',
        value: ''
      },
      {
        name: 'Child Task ID',
        value: ''
      },
      {
        name: 'Status',
        value: ''
      },
      {
        name: 'Error count',
        value: ''
      },
    ];

    const dataWorkRequestDetail = [
      {
        name: 'Work request ID',
        value: this.props.workRequestId
      },
      {
        name: 'Engine Instance ID',
        value: ''
      },
      {
        name: 'Task ID',
        value: ''
      },
      {
        name: 'Server ID',
        value: ''
      },
      {
        name: 'Job ID',
        value: ''
      },
      {
        name: '# Chunks to process',
        value: ''
      },
      {
        name: '# Chunks completed',
        value: ''
      },
      {
        name: '# Skipped',
        value: ''
      },
      {
        name: '# Errors',
        value: ''
      }
    ];


    const seriesPerformance = {
      0: { type: 'bars' },
      2: { type: 'scatter' },
      3: { type: 'line' }
    };

    const colorsPerformance = [
      '#D98186',
      '#C2D4C1',
      '#ff704d',
      '#52527a',
      '#FEE2CB'
    ];

    const { workRequestId } = this.props;
    return (
      <Fragment>
        <HeaderDetail
          id={workRequestId}
          title={`Work Request Detail`}
          processValue={`64.89%`}
          processTime={`Complete`}
        />
        <PreviewCode title="Work Request Detail" data={dataWorkRequestDetail} dataPreview={"log file output from FS"} isPreviewCode  />
        <ComboChart
          title="Work request performance graph"
          data={dataPerformance}
          series={seriesPerformance}
          colors={colorsPerformance}
          isRangeFilter
        />
        <TableDetail
          title={`Job Detail`}
          data={dataJobDetail}
        />
        <TableDetail
          title={`Task Detail`}
          data={dataTaskDetail}
        />
        <TableList
          columns={this.state.errorColumns}
          title={`Error in task instance`}
          dataRow={dataErrorInTaskInstance}
        />

        <ErrorModal
          visibleModal={this.state.visibleModal}
          handleOk={this.handleOkErrorModal}
          handleCancel={this.handleCancelErrorModal}
          listErrors={this.state.errorDetail}
        />
      </Fragment>
    );
  }
}
export default WorkRequests;

