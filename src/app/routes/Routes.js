import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Page from '../components/Page';
import Home from '../containers/Home';
import Products from '../containers/Products';


const Routes = (props) => (
  <Switch>
    <div className="app">
      <Page>
        <Route exact path={['/', '/home']} component={Home} {...props} />
        <Route exact path={'/products'} component={Products} {...props} />
      </Page>
    </div>
  </Switch>
);

export default Routes;
