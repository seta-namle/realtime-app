import services from '../../../services';
import { get } from 'lodash';
export const FETCH_LIST_JOBS = 'request list jobs';
export const FETCH_LIST_JOBS_SUCCESS = 'fetch list jobs successfully';
export const FETCH_LIST_JOBS_FAILURE = 'fetch list jobs failed';
const jobService = services.jobService;

const defaultState = {
  jobs: [],
  currentJob: {},
  loadingListJobs: false,
  loadingCurrentJob: false
};

export function jobReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCH_LIST_JOBS:
      return { ...state, loadingListJobs: true };
    // eslint-disable-next-line no-case-declarations
    case FETCH_LIST_JOBS_SUCCESS:
      const newJobs = get(action, 'payload', []);
      return { ...state, jobs: newJobs, loadingListJobs: true };
    case FETCH_LIST_JOBS_FAILURE:
      return { ...state, loadingListJobs: false };
    default:
      return state;
  }
}

export const namespace = 'job';

export const fetchListJobs = options => async (dispatch, getState) => {
  try {
    const { getListJobs } = jobService;
    const jobs = await getListJobs(options);
    return jobs;
  } catch (error) {
    dispatch({
      type: FETCH_LIST_JOBS_FAILURE,
      payload: error
    });
    return;
  }
};
