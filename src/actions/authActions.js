import { action } from './index';
import {
  LOGIN,
  LOGOUT
} from '../constants/actionTypes';


console.log('actions: ', LOGIN);
export const login = {
  request: (phoneNumber, password) => action(LOGIN.REQUEST, { phoneNumber, password }),
  success: (response) => action(LOGIN.SUCCESS, { response }),
  failure: (error) => action(LOGIN.FAILURE, { error }),
};

export const logout = () => {
  return {
    type: LOGOUT,
  }
}
