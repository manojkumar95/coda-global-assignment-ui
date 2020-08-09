import axios from 'axios';
import {
  call,
  put,
  takeLatest
} from 'redux-saga/effects';
import {
  getCandidateSuccess,
  getCandidateError,
  updateBrandError,
  updateBrandSuccess,
  getCandidateByIdSuccess,
  voteForCandidate,
  GET_CANDIDATES,
  UPDATE_BRAND,
  GET_CANDIDATE_BY_ID,
  VOTE_FOR_CANDIDATE,
  getCandidateById,
  LOAD_HOME,
  loadHome
} from '../actions/candidate';
import Notification from '../components/Notification';
import { loginSuccess } from '../actions/login';

/**
 * Generator method to fetch candidate
 */
function* getAllCandidates() {
  try {
    const response = yield call(axios, '/candidates');
    yield put(getCandidateSuccess(response));
  } catch (e) {
    yield put(getCandidateError(e));
  }
}

/**
 * Generator method to fetch candidate by id
 */
function* fetchCandidateById(action) {
  try {
    const {
      payload
    } = action;
    const response = yield call(axios, `/candidates/${payload}`);
    yield put(getCandidateByIdSuccess(response));
  } catch (e) {
    yield put(getCandidateError(e));
  }
}

/**
 * Generator method to update candidate
 */
function* updateBrand(action) {
  try {
    const {
      brandData
    } = action;
    yield call(axios, '/company/offline', {
      method: 'POST',
      data: {}
    });
    yield put(updateBrandSuccess(brandData));
    Notification('success', 'User updated successfully');
  } catch (e) {
    Notification('error', e.message);
    yield put(updateBrandError(e));
  }
}

/**
 * Generator method to update candidate
 */
function* voteForCandidateByUserId(action) {
  try {
    const {
      payload
    } = action;
    const { userId, candidateId } = payload;
    yield call(axios, `/users/${userId}/vote/${candidateId}`, {
      method: 'PUT',
      data: {}
    });
    yield put(getCandidateById(candidateId));
    yield put(loadHome())
    Notification('success', 'User voted for candidate successfully');
  } catch (e) {
    Notification('error', e.message);
    yield put(updateBrandError(e));
  }
}

function* loadUser() {
  try {
    const token = window.localStorage.getItem('hfc-login-token')
    const loginAuth = JSON.parse(token);
    const response = yield call(axios, `/users/token/${loginAuth.authToken}`);
    yield put(loginSuccess(response));
  } catch (e) {
    yield put(getCandidateError(e));
  }
}

export default function* saga() {
  // Methods for userSaga
  yield takeLatest(GET_CANDIDATES, getAllCandidates);
  yield takeLatest(GET_CANDIDATE_BY_ID, fetchCandidateById);
  yield takeLatest(VOTE_FOR_CANDIDATE, voteForCandidateByUserId);
  yield takeLatest(LOAD_HOME, loadUser);

  yield takeLatest(UPDATE_BRAND, updateBrand);
}
