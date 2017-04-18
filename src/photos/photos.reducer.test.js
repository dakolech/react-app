import { photosReducer } from './photos.reducer';
import { SAVE_PHOTOS, API_ERROR } from "./photos.actions";

describe('Photos reducer', () => {
  describe('when state was not passed as a photosReducer argument and passed action does not exist', () => {
    const action = {
      type: 'ERROR',
      payload: {},
    };
    const newState = photosReducer(undefined, action);

    it('should return empty object', () => {
      expect(newState).toEqual({});
    });
  });

  describe('when SAVE_PHOTOS is called', () => {
    const photoUrls = ['some', 'photos'];
    const action = {
      type: SAVE_PHOTOS,
      payload: {
        photoUrls
      },
    };
    const newState = photosReducer({}, action);

    it('should have photoUrls array in the new state', () => {
      expect(newState.urls).toEqual(photoUrls);
    });
  });

  describe('when API_ERROR is called', () => {
    const error = 'someError';
    const action = {
      type: API_ERROR,
      payload: {
        error
      },
    };
    const newState = photosReducer({}, action);

    it('should have photoUrls object in the new state', () => {
      expect(newState.errors).toEqual(error);
    });
  });
});
