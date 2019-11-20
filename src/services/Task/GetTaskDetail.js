import { configService } from '../config';
import { makeRequest } from '../util';
import { get } from 'lodash';
const { baseUrl } = configService;

export const getTaskDetail = async (queryObject, paramObject) => {
  const endpoint = get(configService, 'task.getTaskDetail.endpoint', null);
  const task = await makeRequest('GET', endpoint, paramObject, queryObject);
  return task;
};
