export const API_ERROR = '[Photos] FLICKR api error';
export const SAVE_PHOTOS = '[Photos] FLICKR save photos';

export function photosAction(type) {
  return (payload) => ({ payload, type });
}

export const apiError = photosAction(API_ERROR);
export const savePhotos = photosAction(SAVE_PHOTOS);
