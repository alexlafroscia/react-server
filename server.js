import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import routes from './routes';

const app = express();

app.use(function(req, res) {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      res.status(200).send(renderToString(<RoutingContext {...renderProps} />));
    } else {
      res.status(404).send('Not Found');
    }
  });
});

app.listen(3000, function() {
  console.log('Listening on port 3000...');
});
