import { tasks } from './data';
import { get } from 'lodash';
export const getTaskDetail = async config => {
  const useMock = get(config, 'task.getTaskDetail.useMock', false);
  const url = get(config, 'task.getTaskDetail.useMock', '');
  if (useMock) {
    return tasks[0];
  }
};
