import { testUserToken } from './testUserToken';
import get from 'lodash/get';

export const getUserAuthToken = async config => {
  const useMock = get(config, 'login.getUserAuthToken.useMock', false);
  const url = get(config, 'login.getUserAuthToken.url', '');
  if (useMock) {
    return testUserToken;
  }
};
