import React from 'react';
import './App.scss';
import { Route } from 'react-router';
import { history } from './store';
import { ConnectedRouter } from 'react-router-redux';
import { HeaderComponent } from './header';
import { PortfolioComponent } from './portfolio';
import { PhotosComponent } from './photos';

export function App() {
  return (
    <ConnectedRouter history={history}>
      <div>
        <HeaderComponent></HeaderComponent>
        <Route exact path="/" component={PortfolioComponent}/>
        <Route path="/photos" component={PhotosComponent}/>
      </div>
    </ConnectedRouter>
  );
}
