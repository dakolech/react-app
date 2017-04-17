import { assocPath } from 'ramda';
import { SAVE_PHOTOS } from "./photos.actions";

export const photosReducer = (state = {}, action) => {
  const reducerObj = {
    [SAVE_PHOTOS]: (payload) => assocPath(['urls'], payload.photoUrls),
  };
  const stateChangeFn = reducerObj[action.type];
  return stateChangeFn ? stateChangeFn(action.payload)(state) : state;
};
