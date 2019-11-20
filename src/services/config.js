export const configService = {
  baseUrl: 'http://localhost:3030',
  task: {
    getListTasks: {
      endpoint: '/api/tasks'
    },
    getTaskDetail: {
      endpoint: '/api/tasks/:id'
    }
  }
};
