import { all, fork, takeLatest, put, select } from 'redux-saga/effects';
import { FETCH_LIST_JOBS, FETCH_LIST_JOBS_SUCCESS, fetchListJobs } from './';

export function* watchGetListJobs() {
  yield takeLatest(FETCH_LIST_JOBS, function*(action) {
    const jobPromises = yield put(fetchListJobs({}));
    const jobs = yield jobPromises;
    yield put({
      type: FETCH_LIST_JOBS_SUCCESS,
      payload: jobs
    });
  });
}

export default function* jobs() {
  yield all([fork(watchGetListJobs)]);
}
