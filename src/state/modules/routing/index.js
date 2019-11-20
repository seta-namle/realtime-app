
import get from 'lodash/get';

export const ROUTE_AUTH = 'route/ROUTE_AUTH';
export const ROUTE_REGISTER = 'route/ROUTE_REGISTER';
export const ROUTE_HOME = 'route/ROUTE_HOME';
export const ROUTE_EXAMPLE_TAKEOVER = 'route/ROUTE_EXAMPLE_TAKEOVER';
export const ROUTE_EXAMPLE_TABS = 'route/ROUTE_EXAMPLE_TABS';
export const ROUTE_FORBIDDEN = 'route/ROUTE_FORBIDDEN';
export const ROUTE_JOBS = 'route/ROUTE_JOBS';
export const ROUTE_TASKS = 'route/ROUTE_TASKS';

export const selectCurrentRoutePayload = state => state.location.payload;
export const selectRouteType = state => state.location.type;
export const selectRoutesMap = state => state.location.routesMap;
export const selectPreviousRoute = state => state.location.prev;
export const selectCurrentRouteReturnTo = state =>
  get(selectRoutesMap(state), [selectRouteType(state), 'returnTo']);

export const navigateCurrentRouteReturnTo = () => (dispatch, getState) => {
  const action = get(selectCurrentRouteReturnTo(getState()), 'route');
  dispatch(action);
};
