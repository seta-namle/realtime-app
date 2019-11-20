import { get } from 'lodash';
import { configService } from '../config';
import { makeRequest } from '../util';

export const getListTasks = async (queryObject, paramObject) => {
  console.log("TCL: getListTasks -> queryObject, paramObject", queryObject, paramObject)
  const endpoint = get(configService, 'task.getListTasks.endpoint', null);
  const tasks = await makeRequest('GET', endpoint, paramObject, queryObject);
  return tasks;
};
