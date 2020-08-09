import {
  call,
  put,
  takeLatest
} from 'redux-saga/effects';
import axios from 'axios';
import { history } from '../router';

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_TOKEN,
  SIGN_UP,
  VERIFY_ACCOUNT,
  loginSuccess,
  loginError,
  accVerifySuccess
} from 'actions/login';
import Notification from '../components/Notification';

export default function* loginSaga() {
  yield takeLatest(LOGIN, login);
  yield takeLatest(LOGIN_SUCCESS, onLoginSuccess);
  yield takeLatest(SIGN_UP, onSignUp);
  yield takeLatest(VERIFY_ACCOUNT, onVerifyAccount);
}

function* login(action) {
  const {
    payload
  } = action;
  console.log('payload', payload);
  try {
    const response = yield call(axios, '/users/login', {
      method: 'POST',
      data: payload
    });
    yield put(loginSuccess(response));
  } catch (e) {
    Notification('error', 'Login request failed. Please try again.');
    // yield put(loginError(e));
    console.error('Login failed', e);
  }
}

function* onLoginSuccess(action) {
  const data = action.payload;
  cacheAuthToken(data);
  history.push('/home');
}

function* onSignUp(action) {
  const {
    payload
  } = action;
  console.log('payload', payload);
  try {
    const response = yield call(axios, '/brand/direct-signup', {
      method: 'POST',
      data: payload
    });
    // yield put(loginSuccess(response));
    history.push('/validate-email');
    history.push({
      pathname: '/validate-email',
      state: {
        detail: payload.email
      }
    });
  } catch (e) {
    Notification('error', 'Signup request failed. Please try again.');
    // yield put(loginError(e));
    console.error('Login failed', e);
  }
}

function* onVerifyAccount(action) {
  const {
    payload
  } = action;
  console.log('payload', payload);
  try {
    const response = yield call(axios, '/brand/verify-token', {
      method: 'POST',
      data: payload
    });
    // yield put(accVerifySuccess(payload))
  } catch (e) {
    Notification('error', 'Account verification link already visited.');
    // yield put(loginError(e));
    console.error('Account verification failed', e);
  }
}

const cacheAuthToken = res => {
  if (!window.localStorage) {
    return;
  }
  window.localStorage.setItem(LOGIN_TOKEN, JSON.stringify({
    authToken: res.authToken
  }));
};
