import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { storeReducers } from './store';

import './index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

let store = createStore(storeReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
