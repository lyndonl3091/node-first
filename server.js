const http = require('http');
const app = require('./app');

http.createServer(app.handleRequest).listen(8080);  // created server
