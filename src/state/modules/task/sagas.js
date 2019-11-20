import { all, fork, takeLatest, put, select } from 'redux-saga/effects';
import { FETCH_LIST_TASKS, FETCH_LIST_TASKS_SUCCESS, fetchListTasks } from './';

export function* watchGetListTasks() {
  yield takeLatest(FETCH_LIST_TASKS, function*(action) {
    const taskPromises = yield put(fetchListTasks());
    const tasks = yield taskPromises;
    yield put({
      type: FETCH_LIST_TASKS_SUCCESS,
      payload: tasks
    });
  });
}

export default function* tasks() {
  yield all([fork(watchGetListTasks)]);
}
