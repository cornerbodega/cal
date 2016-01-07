var express = require('express')
var proxy = require('express-http-proxy');
var app = express();
var http = require('http')
var port = process.env.PORT || 8080;
var wslcb_server = 'https://wslcb.mjtraceability.com/serverjson.asp'
// app.use('/proxy', proxy('https://wslcb.mjtraceability.com/serverjson.asp', {
//   forwardPath: function(req, res) {
//     return require('url').parse(req.url).path;
//   }
// }));
app.post('/login', function (req, res, next) {
  // res.sendFile('/var/www/potnet.net/index.html')
  // console.log(req);
  http.post(wslcb_server, req).success(function(res){console.log(res);})
  // res.send(j);
});


app.post('/sync_check', function (req, res, next) {
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
