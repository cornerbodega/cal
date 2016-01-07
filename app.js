var express = require('express')
var app = express();


app.get('/', function (req, res, next) {
  // res.send('Hello World!');
  res.sendFile('/var/www/potnet.net/index.html')
});

console.log('1235454545435453');
app.listen(3004);
