/**
 * Mock data for Jobs/index.js
 */
const TOTAL_HOURS = 12;
const generateDataBarChart = () => {
  const _all = [];
  for (let j = 1; j <= 6; j++) {
    let _key = 'all';
    switch (j) {
      case 1:
        _key = 'all';
        break;
      case 2:
        _key = 'translation';
        break;
      case 3:
        _key = 'faceDetection';
        break;
      case 4:
        _key = 'transcription';
        break;
      case 5:
        _key = 'logoRecognition';
        break;
      case 6:
        _key = 'licensePlate';
    }
    for (let i = 1; i <= TOTAL_HOURS; i++) {
      const tmp = {
        name: `${i}:00 AM`,
        Running: Math.round(Math.random() * 10000),
        Started: Math.round(Math.random() * 5000),
        Paused: Math.round(Math.random() * 2000),
        'Error rate': Math.round(Math.random() * 1000),
        Completed: Math.round(Math.random() * 2000),
        Error: Math.round(Math.random() * 2000),
        key: _key
      };
      _all.push(tmp);
    }
  }

  return _all;
};

export const dataBarChart = generateDataBarChart();

export const dataChart = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 }
];

export const activeDataPieChart = [
  { name: 'Translation', value: 5231, key: 'translation' },
  { name: 'Face Detection', value: 4236, key: 'faceDetection' },
  { name: 'Transcription', value: 25380, key: 'transcription' },
  { name: 'Logo Recognition ', value: 4274, key: 'logoRecognition' },
  { name: 'License Plate (ALPR)', value: 3200, key: 'licensePlate' }
];

export const completeDataPieChart = [
  { name: 'Translation', value: 15231, key: 'translation' },
  { name: 'Face Detection', value: 4236, key: 'faceDetection' },
  { name: 'Transcription', value: 72380, key: 'transcription' },
  { name: 'Logo Recognition ', value: 4153, key: 'logoRecognition' },
  { name: 'License Plate (ALPR)', value: 3200, key: 'licensePlate' }
];

export const errorDataPieChart = [
  { name: 'Translation', value: 531, key: 'translation' },
  { name: 'Face Detection', value: 236, key: 'faceDetection' },
  { name: 'Transcription', value: 538, key: 'transcription' },
  { name: 'Logo Recognition ', value: 95, key: 'logoRecognition' },
  { name: 'License Plate (ALPR)', value: 100, key: 'licensePlate' }
];

/**
 * Mock data for Jobs/ActiveJobTable.js
 */
export const dataActiveJob = [
  {
    key: '19114508_pCJAAcUsmKkHwNA',
    taskId: '19114508_pCJAAcUsmKkHwNA',
    jobId: '19114508_pCJAAcUsmK',
    orgId: 7862,
    engineName: 'Webstream Adapter',
    engineBuild: '444eff94-1bdd-4788-87f2-e5e32c29f7f3',
    status: 'running',
    errors: 0,
    taskInstances: '12345',
    linkToListOfTaskInstances: 'link',
    category: 'transcription'
  },
  {
    key: '19114611_7hQPac339weJIIX',
    taskId: '19114611_7hQPac339weJIIX',
    jobId: '19114508_pCJAAcUsmK',
    orgId: 7862,
    engineName: 'Stream Ingestion',
    engineBuild: '15758787-2542-43ab-ac8a-dc322dd41e77',
    status: 'running',
    errors: 0,
    taskInstances: '12345',
    linkToListOfTaskInstances: 'link',
    category: 'transcription'
  },
  {
    key: '19114611_JXZKztSMGmorIrG',
    taskId: '19114611_JXZKztSMGmorIrG',
    jobId: '19114508_pCJAAcUsmK',
    orgId: 7862,
    engineName: 'Speech M',
    engineBuild: '345fbf93-095e-4923-879c-041694567b34',
    status: 'running',
    errors: 0,
    taskInstances: '12345',
    linkToListOfTaskInstances: 'link',
    category: 'transcription'
  },
  {
    key: '19104324_5O1HkLY3ueRrOce',
    taskId: '19104324_5O1HkLY3ueRrOce',
    jobId: '19104324_5O1HkLY3ue',
    orgId: 7862,
    engineName: 'Speech M',
    engineBuild: 'd62fbf93-095e-4923-879c-0416964c7b53',
    status: 'paused',
    errors: 2,
    taskInstances: '12345',
    linkToListOfTaskInstances: 'link',
    category: 'translation'
  },
  {
    key: '19104216_cjhoUa7SvlHAvj7',
    taskId: '19104216_cjhoUa7SvlHAvj7',
    jobId: '19104216_cjhoUa7Svl',
    orgId: 7862,
    engineName: 'Face Detection',
    engineBuild: '5bcbb69c-48d6-442a-b2d5-7106c7cf097c',
    status: 'paused',
    errors: 1,
    taskInstances: '12345',
    linkToListOfTaskInstances: 'link',
    category: 'faceDetection'
  },
  {
    key: '19104215_LVx9IShCPLdXqli',
    taskId: '19104215_LVx9IShCPLdXqli',
    jobId: '19104215_LVx9IShCPL',
    orgId: 7862,
    engineName: 'Face Detection',
    engineBuild: '5bcbb69c-48d6-442a-b2d5-7106c7cf097c',
    status: 'paused',
    errors: 3,
    taskInstances: '12345',
    linkToListOfTaskInstances: 'link',
    category: 'faceDetection'
  },
  {
    key: '19104215_ix3Vn8jstsF8T6e',
    taskId: '19104215_ix3Vn8jstsF8T6e',
    jobId: '19104215_ix3Vn8jsts',
    orgId: 7862,
    engineName: 'Face Detection',
    engineBuild: '5bcbb69c-48d6-442a-b2d5-7106c7cf097c',
    status: 'running',
    errors: 0,
    taskInstances: '12345',
    linkToListOfTaskInstances: 'link',
    category: 'faceDetection'
  }
];
