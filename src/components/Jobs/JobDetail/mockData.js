/**
 * Mock data for Jobs/JobDetail/index.js
 */
export const dataChart = [
  {
    name: 'Task 1',
    cpu: 4000,
    gpu: 1200,
    mem: 2400,
    byteWrittenErrors: 2400
  },
  {
    name: 'Task 2',
    cpu: 3000,
    gpu: 1400,
    mem: 1398,
    byteWrittenErrors: 2210
  },
  {
    name: 'Task 3',
    cpu: 2000,
    mem: 9800,
    gpu: 1200,
    byteWrittenErrors: 2290
  }
];

export const dataTableDetail = [
  {
    key: '1',
    name: 'Tasks demo 1',
    status: 'Complete',
    date: 'Fri Nov 8 2019 10:19:48'
  },
  {
    key: '2',
    name: 'Tasks demo 2',
    status: 'Complete',
    date: 'Fri Nov 8 2019 10:19:48'
  },
  {
    key: '3',
    name: 'Tasks demo 3',
    status: 'Running',
    date: 'Fri Nov 8 2019 10:19:48'
  }
];
export const dataErrorTableDetail = [
  {
    key: '1',
    id: 'Error demo 1',
    status: 'Complete',
    sourceType: 'sourceType 1',
    sourceId: 'sourceId 1',
    severity: 'severity 1',
    timestamp: 'Fri Nov 8 2019 10:19:48'
  },
  {
    key: '2',
    id: 'Error demo 2',
    status: 'Complete',
    sourceType: 'sourceType 2',
    sourceId: 'sourceId 2',
    severity: 'severity 2',
    timestamp: 'Fri Nov 8 2019 10:19:48'
  },
  {
    key: '3',
    id: 'Error demo 3',
    status: 'Complete',
    sourceType: 'sourceType 3',
    sourceId: 'sourceId 3',
    severity: 'severity 3',
    timestamp: 'Fri Nov 8 2019 10:19:48'
  }
];

/**
 * Mock data Jobs/JobDetail/JobDetailTable
 */
export const dataJobDetail = [
  {
    name: 'Job Id',
    value: '19114508_pCJAAcUsmK'
  },
  {
    name: 'Org Id',
    value: 7862
  },
  {
    name: 'Priority',
    value: 'Medium'
  },
  {
    name: 'Job Template Id',
    value: '10'
  },
  {
    name: 'Schedule Id',
    value: '10'
  },
  {
    name: '# Tasks',
    value: 3
  },
  {
    name: 'Start Time',
    value: 'Fri Nov 8 3039 30:39:48'
  },
  {
    name: '# Tasks Complete',
    value: 0
  },
  {
    name: '# Active Tasks',
    value: 3
  },
  {
    name: '# Errors',
    value: 0
  }
];
/**
 * Mock data Jobs/JobDetail/ErrorDetail
 */
export const dataErrorDetail = [
  {
    name: 'Error Id',
    value: '19114508_pCJAAcUsmK'
  },
  {
    name: 'Error Code',
    value: 123456
  },
  {
    name: 'Error Source Type',
    value: 'Error Source Type'
  },
  {
    name: 'Source Id',
    value: '10'
  },
  {
    name: 'Severity',
    value: '10'
  },
  {
    name: 'Timestamp',
    value: 'Fri Nov 8 3039 30:39:48'
  },
  {
    name: 'Path to input directory (if relevant to error type)',
    value: 'Path 1'
  },
  {
    name: 'Path to output directory ((if relevant to error type)',
    value: 'Path 1'
  },
  {
    name: 'Path to error json file (if exists)',
    value: 'Path 1'
  },
  {
    name:
      'Path to error log file and line number of where it is logged (if exists)',
    value: 'Path 1'
  }
];

/**
 * Mock data for Jobs/JobDetail/NetworkGraph/index.js
 */
export const graph = {
  nodes: [
    {
      id: 1,
      label: 'Webstream\nAdapter',
      size: 30,
      group: 'complete'
    },
    {
      id: 2,
      label: 'Stream\nIngestion',
      size: 30,
      group: 'complete'
    },
    {
      id: 3,
      label: 'Speech\nmatic',
      size: 30,
      group: 'running'
    }
  ],
  edges: [
    { from: 1, to: 2, value: 0.5, color: { inherit: 'to' } },
    { from: 2, to: 3, value: 0.5, color: { inherit: 'to' } }
  ]
};
