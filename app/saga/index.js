import { all } from 'redux-saga/effects';

import candidateSaga from './candidateSaga';
import loginSaga from './loginSaga';

export default function* rootSaga() {
  yield all([
    candidateSaga(),
    loginSaga()
  ]);
}
