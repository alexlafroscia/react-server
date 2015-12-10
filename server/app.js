import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import routes from '../src/routes';

const app = express();

app.use(function(req, res ) {
  match({ routes, location: req.url }, (error, redirectLocation, props) => {
    const router = renderToString(<RoutingContext {...props} />);
    res.status(200).send(router);
  });
});

app.listen(3000, function(err) {
  if (err) throw err;
  console.log('Starting the server on port 3000...');
});
