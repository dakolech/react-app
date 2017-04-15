import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { store, history } from './store';
import { ConnectedRouter, push } from 'react-router-redux';

import './index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

store.dispatch(push('/about'));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App}/>
        <Route path="/about" component={App}/>
        <Route path="/topics" component={App}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
