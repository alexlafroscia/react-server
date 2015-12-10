import React from 'react';
import { Route } from 'react-router';

import Main from './handlers/main';
import Example from './handlers/example';

export default (
  <Route path='/' component={Main}>
    <Route path='/example' name='example' component={Example} />
  </Route>
);
