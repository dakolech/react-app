import { takeEvery } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { PHOTOS_PAGE } from "../routes.names";
import { call, put } from "redux-saga/effects";
import { apiError, savePhotos } from "./photos.actions";
import { pipe, map, take } from 'ramda';

const API_PARAMS = {
  key: 'bead0153d50ff3255a9367c18e4973a6',
  text: 'MarilynMonroe',
  authToken: '72157682719016735-974a42f13723e292',
  sig: 'b7f94974b3b340e40d69616cbaf407b5',
}

export const API_URL = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_PARAMS.key}&text=${API_PARAMS.text}&format=json&nojsoncallback=1&api_sig=${API_PARAMS.sig}`;

export function* locationChanged({ payload: { pathname }}) {
  if (pathname === PHOTOS_PAGE) {
    try {
      const rawData = yield call(fetch, API_URL);
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
