var express = require('express')
var proxy = require('express-http-proxy');
var app = express();
var http = require('http')
var port = process.env.PORT || 8080;

app.use('/proxy', proxy('http://potnet.net/app/php/potnetdb.php', {
  forwardPath: function(req, res) {
    return require('url').parse(req.url).path;
  }
}));

app.get('/sync_check', function (req, res, next) {
  // res.sendFile('/var/www/potnet.net/index.html')
  var j = [
      { name:'Greece', population:'10'},
      { name: 'Egypt', population:'12'}
  ]

  // console.log(j);
  res.send(j);
});

app.get('/testpath', function (req, res, next) {
  // res.sendFile('/var/www/potnet.net/index.html')
  var j = [
      { name:'Greece', population:'10'},
      { name: 'Egypt', population:'12'}
  ]
  // console.log(j);
  res.send(j);
});
app.get('*', function (req, res, next) {
  res.sendFile('/var/www/potnet.net/index.html')
});

console.log('1235454545435453');
var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
});
