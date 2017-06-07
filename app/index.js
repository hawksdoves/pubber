const app = require('./server/app');
const server = require('http').createServer(app);

const port = process.env.PORT || 3000;

server.listen(port);

console.log(`Running Server at http://localhost:${port}/api`);
