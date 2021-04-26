import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../containers/Home';


const Routes = (props) => (
  <Switch>
    <div className="app">
      <Route exact path={['/', '/home']} component={Home} {...props} />
    </div>
  </Switch>
);

export default Routes;
