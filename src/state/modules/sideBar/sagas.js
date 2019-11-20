import { all, fork, takeLatest, put, select } from 'redux-saga/effects';
import { ON_CLICK_MENU, ON_CLICK_DETAIL, OPTIONS } from './';
import { ROUTE_HOME, selectCurrentRoutePayload } from '../../modules/routing';
function* watchOnclickMenu() {
  const tabName = yield select(selectCurrentRoutePayload).tabName;
  if (OPTIONS.includes(tabName)) {
    yield put(
      ({
        type: ROUTE_HOME,
        payload: { tabName: 'home' }
      })
    );
  }
  yield takeLatest(ON_CLICK_MENU, function*(action) {
    if (OPTIONS.includes(action.payload.tabName)) {
      yield put({
        type: ROUTE_HOME,
        payload: { tabName: action.payload.tabName }
      });
    } else {
      yield put({
        type: ROUTE_HOME,
        payload: { tabName: 'home' }
      });
    }
  });
}

function* watchOnclickDetail() {
  yield takeLatest(ON_CLICK_DETAIL, function*(action) {
    yield put({
      type: ROUTE_HOME,
      payload: action.payload
    });
  });
}
export default function* sideBar() {
  yield all([fork(watchOnclickMenu), fork(watchOnclickDetail)]);
}
