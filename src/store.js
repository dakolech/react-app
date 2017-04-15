import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import { photos } from './photos/photos.reducer';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { photosSaga } from './photos/photos.saga';

export const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

const middleware = [routerMiddleware(history), sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    photos,
    router: routerReducer
  }), composeEnhancers(
    applyMiddleware(...middleware)
  )
);

function* rootSaga() {
  yield [
    fork(photosSaga),
  ];
}

sagaMiddleware.run(rootSaga);
