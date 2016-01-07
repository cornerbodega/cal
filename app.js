var express = require('express')
var app = express();


app.get('/', function (req, res, next) {
  res.send('Hello World!');
  res.sendFile('/var/www/potnet.net/index.html')
});


// app.listen(3000);
