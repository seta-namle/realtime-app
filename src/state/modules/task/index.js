import services from '../../../services';
import { get } from 'lodash';
export const FETCH_LIST_TASKS = 'request list tasks';
export const FETCH_LIST_TASKS_SUCCESS = 'fetch list tasks successfully';
export const FETCH_LIST_TASKS_FAILURE = 'fetch list tasks failed';
const taskService = services.taskService;

const defaultState = {
  tasks: [],
  currentTask: {},
  loadingListTasks: false,
  loadingCurrentTask: false
};

export function taskReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCH_LIST_TASKS:
      return { ...state, loadingListTasks: true };
    // eslint-disable-next-line no-case-declarations
    case FETCH_LIST_TASKS_SUCCESS:
      const newTasks = get(action, 'payload', []);
      return { ...state, tasks: newTasks, loadingListTasks: false };
    case FETCH_LIST_TASKS_FAILURE:
      return { ...state, loadingListTasks: false };
    default:
      return state;
  }
}

export const namespace = 'task';

export const fetchListTasks = (queryObject = {}, paramObject = {}) => async (
  dispatch,
  getState
) => {
  try {
    const { getListTasks } = taskService;
    const tasks = await getListTasks(queryObject, paramObject);
    return tasks;
  } catch (error) {
    dispatch({
      type: FETCH_LIST_TASKS_FAILURE,
      payload: error
    });
    return;
  }
};

export const fetchTaskDetail = (queryObject = {}, paramObject = {}) => async (
  dispatch,
  getState
) => {
  
};
