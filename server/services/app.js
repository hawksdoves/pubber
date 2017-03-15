const app = require('express')();
const bodyParser = require('body-parser');
const routes = require('../routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routes);

module.exports = app;
