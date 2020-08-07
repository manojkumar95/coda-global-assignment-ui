import axios from 'axios';
import {
  call,
  put,
  takeLatest
} from 'redux-saga/effects';
import {
  getBrandSuccess,
  getBrandError,
  updateBrandError,
  updateBrandSuccess,
  GET_BRAND,
  UPDATE_BRAND
} from '../actions/brand';
import Notification from '../components/Notification';

/**
 * Generator method to fetch brand
 */
function* getBrand() {
  try {
    const response = yield call(axios, '/categories');
    yield put(getBrandSuccess(response));
  } catch (e) {
    yield put(getBrandError(e));
  }
}

/**
 * Generator method to update brand
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

export default function* saga() {
  // Methods for userSaga
  yield takeLatest(GET_BRAND, getBrand);
  yield takeLatest(UPDATE_BRAND, updateBrand);
}
