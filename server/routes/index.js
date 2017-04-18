const routes = require('express').Router();

routes.use((req, res, next) => {
  // CORS AND RESPONSE HEADERS
  res.setHeader('charset', 'utf-8');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,PATCH,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

routes.use((req, res, next) => {
  // AUTH GOES HERE
  next();
});

routes.get('/', (req, res) => {
  res.status(200).sendFile('index.html', { root: 'views' });
});

routes.get('/api', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.get('*', (req, res) => {
  res.status(404).send('<img src="https://68.media.tumblr.com/40076dabd68b03a7a43cbf30b2ce6c2a/tumblr_miwsyuB8UX1r2uma6o1_500.gif">');
});

module.exports = routes;
