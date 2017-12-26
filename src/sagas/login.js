import { take, put, fork, call, select } from 'redux-saga/effects'
import axios from 'axios';
import { LOGIN } from '../constants/actionTypes';
import { login } from '../actions/authActions';

function* loginCall(params) {
  console.log('loginCall: ', params);
  return axios.post('https://ps-app-backend.herokuapp.com/api/auth/login', params)
    .then(response => response)
    .catch(error => console.warn('Error on login: ', error))
}


/**
 ***********************************************************
 ************************ Watchers *************************
 ***********************************************************
 **/

// Create Questioner
function* watchLogin() {
  console.log('watchLogin');
  while (true) {
    console.log('request');
    const params = yield take(LOGIN.REQUEST);

    try {
      const response = yield call(loginCall, params);

      yield put(login.success(response));
      console.log('SAGA LOGIN SUCCESS: ', response);
    } catch (err) {
      console.log('SAGA LOGIN ERR: ', err);
      yield put(login.failure(err));
    }
  }
}

export default fork(watchLogin);
