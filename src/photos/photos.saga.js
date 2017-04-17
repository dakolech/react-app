import { takeEvery } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { PHOTOS_PAGE } from "../routes.names";
import { call, put } from "redux-saga/effects";
import { apiError, savePhotos } from "./photos.actions";
import { pipe, map, take } from 'ramda';

function* locationChanged({ payload: { pathname }}) {
  if (pathname === PHOTOS_PAGE) {
    try {
      const rawData = yield call(fetch, 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=a7ed363fbbbd162d61a3b05eb81b38a3&text=MarilynMonroe&format=json&nojsoncallback=1&auth_token=72157682719016735-974a42f13723e292&api_sig=87a23e9690115adc1efb919ebc0d0cdc');
      const { photos } = yield rawData.json();
      const photoUrls = pipe(
        map(({ farm, server, id, secret }) => `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`),
        take(9)
      )(photos.photo);
      yield put(savePhotos({ photoUrls }))
    } catch (err) {
      yield put(apiError({ err }))
    }
  }
}

export function* photosSaga() {
  yield takeEvery(LOCATION_CHANGE, locationChanged);
}
