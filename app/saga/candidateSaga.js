import axios from 'axios';
import {
  call,
  put,
  takeLatest
} from 'redux-saga/effects';
import {
  getCandidateSuccess,
  getCandidateError,
  getCandidateByIdSuccess,
  GET_CANDIDATES,
  UPDATE_CANDIDATE,
  GET_CANDIDATE_BY_ID,
  VOTE_FOR_CANDIDATE,
  DELETE_CANDIDATE,
  getCandidateById,
  LOAD_HOME,
  loadHome,
  getAllCandidates as fetchAllCandidates
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
function* updateCandidate(action) {
  try {
    const {
      candidateData
    } = action;
    yield call(axios, `/candidates/${candidateData._id}`, {
      method: 'POST',
      data: candidateData
    });
    // yield put(updateCandidateSuccess(candidateData));
    Notification('success', 'User updated successfully');
  } catch (e) {
    Notification('error', e.message);
    // yield put(updateCandidateError(e));
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
    // yield put(updateCandidateError(e));
  }
}

function* loadUser() {
  try {
    const token = window.localStorage.getItem('coda-login-token')
    const loginAuth = JSON.parse(token);
    const response = yield call(axios, `/users/token/${loginAuth.authToken}`);
    yield put(loginSuccess(response));
  } catch (e) {
    yield put(getCandidateError(e));
  }
}

/**
 * Generator method to delete candidate
 */
function* deleteCandidate(action) {
  try {
    const {
      payload
    } = action;
    yield call(axios, `/candidates/${payload}`, {
      method: 'DELETE'
    });
    yield put(fetchAllCandidates());
    Notification('success', 'Candidate deleted successfully');
  } catch (e) {
    Notification('error', e.message);
    // yield put(updateCandidateError(e));
  }
}

export default function* saga() {
  // Methods for userSaga
  yield takeLatest(GET_CANDIDATES, getAllCandidates);
  yield takeLatest(GET_CANDIDATE_BY_ID, fetchCandidateById);
  yield takeLatest(VOTE_FOR_CANDIDATE, voteForCandidateByUserId);
  yield takeLatest(LOAD_HOME, loadUser);

  yield takeLatest(UPDATE_CANDIDATE, updateCandidate);
  yield takeLatest(DELETE_CANDIDATE, deleteCandidate);
}
