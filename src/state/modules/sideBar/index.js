import { helpers } from 'veritone-redux-common';
const { createReducer } = helpers;
export const ON_CLICK_MENU = 'on click menu';
export const ON_CLICK_DETAIL = 'on click detail';
const defaultState = {
  isBooting: false,
  bootDidFinish: false
};
const reducer = createReducer(defaultState, {

});

export default reducer;
export const namespace = 'sideBar';

