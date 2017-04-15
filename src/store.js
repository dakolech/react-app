import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import { photos } from './photos/photos.reducer';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();
const middleware = routerMiddleware(history);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    photos,
    router: routerReducer
  }), composeEnhancers(
    applyMiddleware(middleware)
  )
);
