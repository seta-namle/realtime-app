import { helpers } from 'veritone-redux-common';
import { configService } from '../../../services/config';
import { ROUTE_HOME } from 'state/modules/routing';
import services from '../../../services';
const { createReducer } = helpers;
const { loginService } = services;
export const AUTHENTICATE_USER = 'authenticate user';
export const AUTHENTICATE_USER_SUCCESS = 'authenticate user success';
export const AUTHENTICATE_USER_FAILURE = 'authenticate user fail';

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
  })
});

export default reducer;
export const namespace = 'app';

export const boot = (options = {}) => ({
  type: BOOT,
  payload: options
});

export const authenticateUser = () => async dispatch => {
  try {
    const { getUserAuthToken } = loginService;
    const token = await getUserAuthToken(configService);
    return token;
  } catch (error) {
    dispatch({
      type: AUTHENTICATE_USER_FAILURE,
      payload: error
    });
  }
};

export const bootFinished = () => ({
  type: BOOT_FINISHED
});

export const isBooting = state => state.app.isBooting;
export const bootDidFinish = state => state.app.bootDidFinish;
