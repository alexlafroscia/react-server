import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Application from './handlers/application';
import HomePage from './handlers/homepage';
import Example from './handlers/example';

export default (
  <Route path='/' name='home' component={Application}>
    <IndexRoute component={HomePage} />
    <Route path='/example' name='example' component={Example} />
  </Route>
);
