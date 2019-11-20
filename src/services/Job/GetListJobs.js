import { jobs } from './data';
import { get } from 'lodash';
export const getListJobs = async config => {
  const useMock = get(config, 'task.getListJobs.useMock', false);
  const url = get(config, 'task.getListJobs.url', '');
  if (useMock) {
    return jobs;
  }
};
