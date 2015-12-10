import React from 'react';
import { Router } from 'react-router';
import { render } from 'react-dom';
import routes from 'routes';

render(
  <Router routes={routes} />,
  document.getElementById('content')
);
