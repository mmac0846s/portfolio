const static = require('node-static');
const http = require('http');
const file = new static.Server('./public');

http.createServer((req, res) => {
  file.serve(req, res);
}).listen(8080);