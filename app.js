const url = require('url');
const fs = require('fs');

function renderHTML(path, res) {
  fs.readFile( path, null, function(err, data) {
    if(err) {
      res.writeHead(404).write('File not found!');
    } else {
      res.write(data);
    }
    res.end();
  });
}

module.exports = {
  handleRequest: function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});

    const path = url.parse(req.url).pathname;
    switch (path) {
      case '/':
          renderHTML('./index.html', res);
        break;
      case '/login':
          renderHTML('./login.html', res)
      default:
        res.writeHead(404);
        res.write('Route not defined');
        res.end();

    }

  }
};
