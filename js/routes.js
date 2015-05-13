import React from 'react';
import { Route, DefaultRoute, Redirect } from 'react-router';
import App from './components/App.react';
import Another from './components/Another.react'

const routes = (
    <Route path="/">
        <Route name="another" path="another" handler={Another} />
        <DefaultRoute handler={App} />
    </Route>
);

export default routes;
