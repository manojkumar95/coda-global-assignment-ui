import { all } from 'redux-saga/effects';

import brandSaga from './brandSaga';
// import loginSaga from './loginSaga';

export default function* rootSaga() {
  yield all([
    brandSaga()
    // loginSaga()
  ]);
}
