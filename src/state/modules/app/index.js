import { helpers } from 'veritone-redux-common';
import { ROUTE_HOME } from 'state/modules/routing';
const { createReducer } = helpers;

export const BOOT = 'boot saga: sequence all the stuff needed to start the app';
export const BOOT_FINISHED = 'boot saga finished';

const defaultState = {
  isBooting: false,
  bootDidFinish: false,
  // TODO: study authentication process and refactor this token
  token: ''
};
const reducer = createReducer(defaultState, {
  [BOOT]: state => ({
    ...state,
    isBooting: true,
    bootDidFinish: false
  }),
  [BOOT_FINISHED]: state => ({
    ...state,
    isBooting: false,
    bootDidFinish: true
  }),
  [ROUTE_HOME]: (state, action) => {
    const { user, pass } = action.payload;
    if (user && pass ) {
      localStorage.setItem('token', '123-456-7890')
    }
    return {
      ...state,
    }
  }
});

export default reducer;
export const namespace = 'app';

export const boot = (options = {}) => ({
  type: BOOT,
  payload: options
});

export const bootFinished = () => ({
  type: BOOT_FINISHED
});

export const isBooting = state => state.app.isBooting;
export const bootDidFinish = state => state.app.bootDidFinish;
