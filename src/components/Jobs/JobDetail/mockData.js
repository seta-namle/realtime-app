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
 * Mock data for Jobs/JobDetail/NetworkGraph/index.js
 */
export const graph = {
  nodes: [
    {
      id: 1,
      label: 'Webstream\nAdapter',
      shape: 'diamond',
      size: 30,
      color: '#15c853'
    },
    {
      id: 2,
      label: 'Stream\nIngestion',
      shape: 'dot',
      size: 30,
      color: '#15c853'
    },
    { id: 3, label: 'Speech\nmatic', shape: 'dot', size: 30, color: '#FFA807' }
  ],
  edges: [
    { from: 1, to: 2, value: 0.5, color: { inherit: 'to' } },
    { from: 2, to: 3, value: 0.5, color: { inherit: 'to' } }
  ]
};
