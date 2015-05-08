import React from 'react';
import { Route, DefaultRoute, Redirect } from 'react-router';
import App from './components/App.react';

const routes = (
    <Route path="/" handler={App} />
);

export default routes;
