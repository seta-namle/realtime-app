import { tasks } from './data';
import { get } from 'lodash';
export const getListTasks = async config => {
  const useMock = get(config, 'task.getListTasks.useMock', false);
  const url = get(config, 'task.getListTasks.url', '');
  if (useMock) {
    return tasks;
  }
};
