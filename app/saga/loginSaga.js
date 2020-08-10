import {
  call,
  put,
  takeLatest
} from 'redux-saga/effects';
import axios from 'axios';
import {
  history
} from '../router';

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_TOKEN,
  LOGOUT,
  SIGN_UP,
  loginSuccess,
  loginFailure,
  logoutSuccess
} from 'actions/login';
import Notification from '../components/Notification';
import {
  setAuthToken
} from '../globals/interceptors';

export default function* loginSaga() {
  yield takeLatest(LOGIN, login);
  yield takeLatest(LOGIN_SUCCESS, onLoginSuccess);
  yield takeLatest(SIGN_UP, onSignUp);
  yield takeLatest(LOGOUT, logout);
}

function* login(action) {
  const {
    payload
  } = action;
  try {
    const response = yield call(axios, '/users/login', {
      method: 'POST',
      data: payload
    });
    yield put(loginSuccess(response));
  } catch (e) {
    Notification('error', 'Login request failed. Please try again.');
    yield put(loginFailure(e));
    console.error('Login failed', e);
  }
}

function* onLoginSuccess(action) {
  const data = action.payload;
  cacheAuthToken(data);
  setAuthToken(data.authToken);
  history.push('/home');
}

function* onSignUp(action) {
  const {
    payload
  } = action;
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

function* logout() {
  try {
    const response = yield call(axios, '/users/logout', {
      method: 'POST',
      data: {}
    });
    yield put(logoutSuccess(response));
    window.localStorage.removeItem(LOGIN_TOKEN);
    history.push('/');
  } catch (e) {
    Notification('error', 'Logout failed. Please try again.');
    console.error('Logout failed', e);
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
