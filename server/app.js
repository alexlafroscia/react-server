import express from 'express';
import expHbs from 'express-handlebars';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import routes from '../src/routes';

const app = express();
app.set('views', __dirname);
app.engine('.hbs', expHbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');

app.use(function(req, res ) {
  match({ routes, location: req.url }, (error, redirectLocation, props) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (props) {
      const router = renderToString(<RoutingContext {...props} />);
      res.render('index', { router });
    } else {
      res.status(404).send('Not Found');
    }
  });
});

app.listen(3000, function(err) {
  if (err) throw err;
  console.log('Starting the server on port 3000...');
});
