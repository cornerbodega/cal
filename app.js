var express = require('express')
var app = express();

app.set('port', 80);

app.get('/', function (req, res, next) {
  res.sendFile('/var/www/potnet.net/index.html')
});

console.log('1235454545435453');
var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
});
