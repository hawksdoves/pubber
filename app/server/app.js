const app = require('express')();
const bodyParser = require('body-parser');
const apiroutes = require('./routes/api');
const routes = require('./routes/index');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', apiroutes);
app.use('/', routes);

module.exports = app;
