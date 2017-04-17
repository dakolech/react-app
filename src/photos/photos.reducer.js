import { assocPath } from 'ramda';
import { SAVE_PHOTOS, API_ERROR } from "./photos.actions";

export const photosReducer = (state = {}, action) => {
  const reducerObj = {
    [SAVE_PHOTOS]: (payload) => assocPath(['urls'], payload.photoUrls),
    [API_ERROR]: (payload) => assocPath(['errors'], payload.error),
  };
  const stateChangeFn = reducerObj[action.type];
  return stateChangeFn ? stateChangeFn(action.payload)(state) : state;
};
