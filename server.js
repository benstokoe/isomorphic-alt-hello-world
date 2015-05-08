require('babel/register');

var express = require('express');
var React = require('react');

var app = express();
var path = require('path');

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'templates'));
app.use('/dist', express.static(path.join(__dirname, 'dist')));

var App = React.createFactory(require('./js/components/App.react'));

app.get('/', function(req, res) {
    var markup = React.renderToString(App());

    
    res.render('index', { html: markup });
});

app.listen(3000);
