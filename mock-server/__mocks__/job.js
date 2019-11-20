const tasks = require('./task');
const taskRoutes = require('./task-routes');
module.exports = [
  {
    internalJobId: '',
    internalScheduledJobId: '',
    internalOrganizationId: '',
    coreId: '',
    coreJobId: '',
    priority: '',
    coreScheduledJobId: '',
    jobStatus: '',
    coreRecordingId: 1234,
    isTemplate: true,
    jobTemplateId: '',
    scheduledDateTime: '',
    startDateTime: '',
    startedDateTime: '',
    stopDateTime: '',
    dueDateTime: '',
    completeDateTime: '',
    abortedDateTime: '',
    coreSourceId: 12345,
    tasks,
    taskRoutes
  }
];
