import { combineReducers } from 'redux';
import { photos } from './photos/photos.reducer';

export const storeReducers = combineReducers({
  photos
});
