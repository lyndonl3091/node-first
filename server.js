const http = require('http');
const fs = require('fs');

function onRequest(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  fs.readFile('./index.html', null, function(err, data) {
    if(err) {
      res.writeHead(404).write('File not found!');
    } else {
      res.write(data);
    }
    res.end();
  });
}

http.createServer(onRequest).listen(8080);  // created server
