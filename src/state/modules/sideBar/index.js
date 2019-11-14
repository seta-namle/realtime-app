import React from 'react';
import { helpers } from 'veritone-redux-common';
import { Progress } from 'antd';
const { createReducer } = helpers;
export const ON_CLICK_MENU = 'on click menu';
export const ON_CLICK_DETAIL = 'on click detail';
export const OPTIONS = ['jobs', 'tasks', 'home'];
const defaultState = {
  isBooting: false,
  bootDidFinish: false,
  initialTaskInstance: [
    {
      key: '123-466-789',
      task_type: 'All',
      color: '',
      total: 120000,
      percentage_total: 100,
      unique_build: 78
    },
    {
      key: '123-466-123',
      task_type: 'transcription',
      color: <Progress strokeColor="#ff7f7f" percent={54} showInfo={false} />,
      total: 12000,
      percentage_total: 54,
      unique_build: 3
    },
    {
      key: '123-466-536',
      task_type: 'faceDetection',
      color: <Progress strokeColor="#7fbf7f" percent={12} showInfo={false} />,
      total: 3100,
      percentage_total: 12,
      unique_build: 1
    },
    {
      key: '123-466-878',
      task_type: 'translation',
      color: <Progress strokeColor="#6666ff" percent={42} showInfo={false} />,
      total: 26000,
      percentage_total: 42,
      unique_build: 12
    }
  ]
};
const reducer = createReducer(defaultState, {});

export default reducer;
export const namespace = 'sideBar';
export const local = state => state[namespace];
export const getInitialTaskIntance = state => local(state).initialTaskInstance;
