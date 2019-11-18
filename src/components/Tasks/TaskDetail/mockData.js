/**
 * Mock data for Tasks/TaskDetail/index.js
 */
const dataChartBoxStatistic = [
  {
    name: 'Page A',
    uv: 1000
  },
  {
    name: 'Page B',
    uv: 2000
  },
  {
    name: 'Page C',
    uv: 3000
  },
  {
    name: 'Page D',
    uv: 4780
  },
  {
    name: 'Page E',
    uv: 3890
  },
  {
    name: 'Page F',
    uv: 2390
  },
  {
    name: 'Page G',
    uv: 1000
  },
  {
    name: 'Page H',
    uv: 2000
  },
  {
    name: 'Page I',
    uv: 3000
  },
  {
    name: 'Page L',
    uv: 4780
  },
  {
    name: 'Page L',
    uv: 3890
  },
  {
    name: 'Page M',
    uv: 2390
  }
];

export const dataPerformance = [
  [
    'Time',
    'CPU %',
    'Bytes written',
    'Memory %',
    'Output files written',
    'GPU %'
  ],
  [new Date(2019, 11, 14, 0), 12, 56, 48, 60, 99],
  [new Date(2019, 11, 14, 1), 65, 78, 22, 98, 50],
  [new Date(2019, 11, 14, 2), 35, 40, 99, 68, 88],
  [new Date(2019, 11, 14, 3), 57, 67, 58, 80, 97],
  [new Date(2019, 11, 14, 4), 39, 90, 15, 68, 15],
  [new Date(2019, 11, 14, 5), 36, 51, 29, 26, 66],
  [new Date(2019, 11, 14, 6), 25, 34, 50, 67, 84],
  [new Date(2019, 11, 14, 7), 12, 56, 48, 60, 99],
  [new Date(2019, 11, 14, 8), 65, 78, 22, 98, 50],
  [new Date(2019, 11, 14, 9), 35, 40, 99, 68, 88],
  [new Date(2019, 11, 14, 10), 57, 67, 58, 80, 97],
  [new Date(2019, 11, 14, 11), 39, 90, 15, 68, 15],
  [new Date(2019, 11, 14, 12), 36, 51, 29, 26, 66],
  [new Date(2019, 11, 14, 13), 25, 34, 50, 67, 84],
  [new Date(2019, 11, 14, 14), 12, 56, 48, 60, 99],
  [new Date(2019, 11, 14, 15), 65, 78, 22, 98, 50],
  [new Date(2019, 11, 14, 16), 35, 40, 99, 68, 88],
  [new Date(2019, 11, 14, 17), 57, 67, 58, 80, 97],
  [new Date(2019, 11, 14, 18), 39, 90, 15, 68, 15],
  [new Date(2019, 11, 14, 19), 36, 51, 29, 26, 66],
  [new Date(2019, 11, 14, 20), 25, 34, 50, 67, 84],
  [new Date(2019, 11, 14, 21), 12, 56, 48, 60, 99],
  [new Date(2019, 11, 14, 22), 36, 51, 29, 26, 66],
  [new Date(2019, 11, 14, 23), 25, 34, 50, 67, 84]
];

export const boxsStatistic = [
  {
    title: '32m53.2s',
    subTitle: 'Processing Time',
    dataKey: 'uv',
    data: dataChartBoxStatistic,
    color: '#ff6600'
  },
  {
    title: '196.5',
    subTitle: 'CPU Minutes',
    dataKey: 'uv',
    data: dataChartBoxStatistic,
    color: '#82ca9d'
  },
  {
    title: '3.2% / min',
    subTitle: 'Processing Rate',
    dataKey: 'uv',
    data: dataChartBoxStatistic,
    color: '#ff1a1a'
  }
];
export const taskDetailCards = [
  {
    cardTitle: '123',
    cardDes: 'Chunks or Blocks Processed',
    titleColor: '#ff4d4f'
  },
  {
    cardTitle: '423',
    cardDes: '(Current / Actual) Remaining)',
    titleColor: '#bae637'
  },
  {
    cardTitle: '324',
    cardDes: 'A + B',
    titleColor: '#ffc53d'
  },
  {
    cardTitle: '756',
    cardDes: 'Errors / Retries',
    titleColor: '#36cfc9'
  }
];
export const instancesCards = [
  {
    cardTitle: '5234',
    cardDes: 'Active Instances',
    titleColor: '#ff4d4f'
  },
  {
    cardTitle: '312',
    cardDes: 'Completed Instances',
    titleColor: '#bae637'
  },
  {
    cardTitle: '453',
    cardDes: 'Paused Instances',
    titleColor: '#ffc53d'
  },
  {
    cardTitle: '234',
    cardDes: 'Peak Instances',
    titleColor: '#36cfc9'
  }
];

/**
 *  Mock data for Tasks/TasksDetail/LisOfWorkRequestsTable.js
 */
const listOfWorkRequestsData = [
  {
    key: '12345',
    engineInstanceId: '12345',
    taskId: '19114611_JXZKztSMGmorIrG',
    engineName: 'Speech M',
    taskEngineType: 'transcription',
    engineBuild: '345fbf93-095e-4923-879c-041694567b34',
    startTime: 'Fri Nov 8 3039 30:39:48',
    endTime: '',
    parentTaskId: '19114508_pCJAAcU3mK2Hw10',
    childTaskId: '19113408_pCJAAcU3mK2H334',
    status: 'running',
    errorCount: 0
  },
  {
    key: '34567',
    engineInstanceId: '34567',
    taskId: '19114611_7hQPac339weJIIX',
    engineName: 'Stream Ingestion',
    taskEngineType: 'transcription',
    engineBuild: '15758787-2542-43ab-ac8a-dc322dd41e77',
    startTime: 'Fri Nov 8 3039 30:39:48',
    endTime: '',
    parentTaskId: '19114508_pCJAAcU3mK2Hw10',
    childTaskId: '19113408_pCJAAcU3mK2H323',
    status: 'running',
    errorCount: 0
  },
  {
    key: '23567',
    engineInstanceId: '23567',
    taskId: '19114508_pCJAAcUsmKkHwNA',
    engineName: 'Webstream Adapter',
    taskEngineType: 'transcription',
    engineBuild: '444eff94-1bdd-4788-87f2-e5e32c29f7f3',
    startTime: 'Fri Nov 8 3039 30:39:48',
    endTime: '',
    parentTaskId: '19114508_pCJAAcU3mK2Hw10',
    childTaskId: '19113408_pCJAAcU3mK2H345',
    status: 'running',
    errorCount: 0
  }
];

export const listOfWorkRequests = {
  title: 'List of work requests',
  columns: [
    {
      title: 'Engine Instance Id',
      dataIndex: 'engineInstanceId'
    },
    {
      title: 'Task Id',
      dataIndex: 'taskId'
    },
    {
      title: 'Engine Name',
      dataIndex: 'engineName'
    },
    {
      title: 'Task Engine Type',
      dataIndex: 'taskEngineType'
    },
    {
      title: 'Engine Build',
      dataIndex: 'engineBuild'
    },
    {
      title: 'Start Time',
      dataIndex: 'startTime'
    },
    {
      title: 'End Time',
      dataIndex: 'endTime'
    },
    {
      title: 'Parent Task Id',
      dataIndex: 'parentTaskId'
    },
    {
      title: 'Child Task Id',
      dataIndex: 'childTaskId'
    },
    {
      title: 'Status',
      dataIndex: 'status'
    },
    {
      title: 'Error Count',
      dataIndex: 'errorCount'
    }
  ],
  data: listOfWorkRequestsData
};
