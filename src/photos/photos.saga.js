import { takeEvery } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

function* locationChanged(data) {
  yield console.log(data);
}

export function* photosSaga() {
  yield takeEvery(LOCATION_CHANGE, locationChanged);
}
