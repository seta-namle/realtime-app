import {
  all,
  fork,
  takeLatest,
  put,
  call,
  race,
  take,
  select
} from 'redux-saga/effects';
import { find, isEmpty, get } from 'lodash';
import { modules } from 'veritone-redux-common';
const {
  user: {
    selectUser,
    fetchUser,
    fetchEnabledApps,
    FETCH_USER,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
    FETCH_USER_APPLICATIONS,
    FETCH_USER_APPLICATIONS_SUCCESS,
    FETCH_USER_APPLICATIONS_FAILURE,
    LOGOUT_SUCCESS
  },
  auth: { setOAuthToken, OAUTH_GRANT_FLOW_SUCCESS },
  config: { getConfig }
} = modules;

import importPendo from 'resources/vendor/js/pendo';

import {
  ROUTE_HOME,
  ROUTE_AUTH,
  selectRouteType,
  selectCurrentRoutePayload
} from '../routing';
import { BOOT, bootFinished, boot } from './';

function* getAppStartupDependencies() {
  // fetch stuff
  yield all([
    put(fetchEnabledApps())
    // ...other app dependencies
  ]);

  // wait for results
  const actions = [
    ...(yield race([
      take(FETCH_USER_APPLICATIONS_SUCCESS),
      take([
        // requestError
        a => a.type === FETCH_USER_APPLICATIONS && a.error,
        // api error
        FETCH_USER_APPLICATIONS_FAILURE
      ])
    ]))
    // ...etc
  ];

  // fixme -- refactor FETCH_USER/FETCH_USER_APPLICATIONS in redux-common to thunk style
  // and graphql, then replace this ugly take block and use put.resolve

  const error = find(actions, { error: true });
  if (error) {
    console.log('there was an error', error);
  }
}

function* watchAppBoot() {
  yield takeLatest(BOOT, function* () {
    const token = yield call([localStorage, 'getItem'], 'token');

    if (token !== '123-456-7890') {
      yield* redirectAndAwaitOAuthGrant();
    } else {
      yield* fetchUserWithStoredTokenOrCookie()
    }
  });
}

function* redirectAndAwaitOAuthGrant() {
  const routeType = yield select(selectRouteType);
  const routePayload = yield select(selectCurrentRoutePayload);

  if (routeType !== ROUTE_AUTH) {
    yield put({
      type: ROUTE_AUTH,
      payload: {
        query: {
          nextType: routeType,
          nextPayload: !isEmpty(routePayload)
            ? JSON.stringify(routePayload)
            : undefined
        }
      }
    });
  }

  yield put(bootFinished());

  // retry boot after logging in
  yield take(OAUTH_GRANT_FLOW_SUCCESS);
  yield put(boot());
}

function* fetchUserWithStoredTokenOrCookie() {
  const existingOAuthToken = yield call(
    [localStorage, 'getItem'],
    'OAuthToken'
  );

  if (existingOAuthToken) {
    yield put(setOAuthToken(existingOAuthToken));
  }

  // TODO: new fetchUser for token
  // yield put(fetchUser());
  yield put({ type: FETCH_USER_SUCCESS, payload: { token: 'somebody I am used to know' } })

  const [successAction] = yield race([
    take(FETCH_USER_SUCCESS),
    take([a => a.type === FETCH_USER && a.error, FETCH_USER_FAILURE])
  ]);

  // todo: this could differentiate between auth error (expired token) and failure
  // (api error)
  return successAction ? successAction.payload : false;
}


function* clearStoredTokenAfterLogout() {
  yield takeLatest(LOGOUT_SUCCESS, function* () {
    yield call([localStorage, 'removeItem'], 'token');
    yield call([location, 'reload']);
  });
}

function* reBoot() {
  yield takeLatest(ROUTE_HOME, function* (action) {
    const { username, password } = action.payload;
    if (username && password) {
      yield call([localStorage, 'setItem'], 'token', '123-456-7890');
      yield put(boot())
    }
  })
}

function* initializePendoAfterUserLogin() {
  const config = yield select(getConfig);

  if (!config.pendoKey) {
    return;
  }

  yield take(FETCH_USER_SUCCESS);
  const user = yield select(selectUser);

  importPendo(config.pendoKey);

  window.pendo.initialize({
    visitor: {
      id: user.userId,
      email: user.userName
    },
    account: {
      id: get(user, 'groups[0].groupId'),
      groupname: get(user, 'groups[0].groupName'),
      organizationId: user.organization.organizationId,
      organizationName: user.organization.organizationName
    }
  });
}

export default function* auth() {
  yield all([
    fork(watchAppBoot),
    fork(clearStoredTokenAfterLogout),
    fork(initializePendoAfterUserLogin),
    fork(reBoot)
  ]);
}
