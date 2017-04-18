import { put, call } from 'redux-saga/effects';
import { locationChanged, API_URL } from './photos.saga';
import { PHOTOS_PAGE } from "../routes.names";
import { savePhotos, apiError } from "./photos.actions";

const photo = {
  farm: 'farm',
  server: 'server',
  id: 'id',
  secret: 'id',
};
const responseObject = {
  photos: {
    photo: [photo]
  }
};
const response = {
  json: jasmine.createSpy('json').and.returnValue(responseObject),
};

describe('Photos saga', () => {
  describe('locationChanged ', () => {
    describe('when pathname is PHOTOS_PAGE as request is correct', () => {
      const locationChangedGenerator = locationChanged({
        payload: {
          pathname: PHOTOS_PAGE
        }
      });

      it('should call fetch with proper url', () => {
        expect(locationChangedGenerator.next().value)
          .toEqual(call(fetch, API_URL));
      });

      it('should call json method on response', () => {
        expect(locationChangedGenerator.next(response).value)
          .toEqual(responseObject);
        expect(response.json).toHaveBeenCalled();
      });

      it('should call savePhotos action with proper photoUrls', () => {
        expect(locationChangedGenerator.next(responseObject).value)
          .toEqual(
            put(savePhotos({
              photoUrls: [`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`]
            }))
          );
      });
    });

    describe('when pathname is PHOTOS_PAGE and request is not correct', () => {
      const locationChangedGenerator = locationChanged({
        payload: {
          pathname: PHOTOS_PAGE
        }
      });

      it('should call fetch with proper url', () => {
        expect(locationChangedGenerator.next().value)
          .toEqual(call(fetch, API_URL));
      });

      it('should call fetch with proper url', () => {
        expect(locationChangedGenerator.next({}).value)
          .toEqual(put(apiError({ err: jasmine.any(Object) })));
      });
    });

    describe('when pathname is not PHOTOS_PAGE', () => {
      const locationChangedGenerator = locationChanged({
        payload: {
          pathname: 'other'
        }
      });

      it('should not call fetch with proper url', () => {
        expect(locationChangedGenerator.next().value)
          .toBeFalsy();
      });
    });
  });
});

