var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var cors = require('cors');
var app = express();

app.use(bodyParser());
app.use(cors());
app.get('/', function(req, res) {
    console.log('GET /')
    var html = fs.readFileSync('index.html');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
});

app.post('/', function(req, res) {
    console.log('POST /');
    console.dir(req.body);
    console.dir(req.get("Authorization"));
    res.send(JSON.stringify(req.headers));
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.end(JSON.stringify(req.headers));
});

port = 3000;
app.listen(port);
console.log('Listening at http://localhost:' + port);