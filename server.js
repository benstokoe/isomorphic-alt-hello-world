require('babel/register');

var express = require('express');
var React = require('react');

var app = express();
var path = require('path');

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'templates'));
app.use('/dist', express.static(path.join(__dirname, 'dist')));

var Router = require('react-router');
var routes = require('./js/routes.js');

app.use(function(req, res) {
    Router.run(routes, req.url, function (Handler) {
        var handler = React.createElement(Handler);
        var markup = React.renderToString(handler);
        res.render('index', { html: markup });
    });
});

app.listen(3000);
