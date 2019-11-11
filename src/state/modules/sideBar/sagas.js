import {
  all,
  fork,
  takeLatest,
  put
} from 'redux-saga/effects';
import { redirect } from 'redux-first-router';
import {
  ON_CLICK_MENU,
  ON_CLICK_DETAIL
} from './';
import {
  ROUTE_HOME,
} from '../../modules/routing'

function* watchOnclickMenu() {
  yield takeLatest(ON_CLICK_MENU, function* (action){
    yield put(redirect({
      type: ROUTE_HOME,
      payload: {tabName: action.payload.tabName}
    }))
  })
}

function* watchOnclickDetail() {
  yield takeLatest(ON_CLICK_DETAIL, function* (action){
    const { tabName, id } = action.payload;
    yield put(redirect({
      type: ROUTE_HOME,
      payload: {tabName, id}
    }))
  })
}
export default function* sideBar() {
  yield all([
    fork(watchOnclickMenu),
    fork(watchOnclickDetail)
  ]);
}
