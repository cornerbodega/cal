var express = require('express')
var app = express();

var port = process.env.PORT || 8080;

app.get('/testpath', function (req, res, next) {
  // res.sendFile('/var/www/potnet.net/index.html')
  var j = {name:'Greece', population:'10', name: 'Egypt', population:'12'}
  res.send(j);
});
app.get('*', function (req, res, next) {
  res.sendFile('/var/www/potnet.net/index.html')
});

console.log('1235454545435453');
var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
});
