import React from 'react';
import { Route } from 'react-router';
import { history } from './store';
import { ConnectedRouter } from 'react-router-redux';
import { HeaderComponent } from './header';
import { PortfolioComponent } from './portfolio';
import { PhotosComponent } from './photos';
import { PHOTOS_PAGE, HOME_PAGE } from './routes.names';

export function App() {
  return (
    <ConnectedRouter history={history}>
      <div>
        <HeaderComponent></HeaderComponent>
        <Route exact path={HOME_PAGE} component={PortfolioComponent}/>
        <Route path={PHOTOS_PAGE} component={PhotosComponent}/>
      </div>
    </ConnectedRouter>
  );
}
