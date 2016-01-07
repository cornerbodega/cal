var express = require('express')
var proxy = require('express-http-proxy');
var app = express();
var http = require('http')
var port = process.env.PORT || 8080;
var wslcb_server = 'https://wslcb.mjtraceability.com'
var querystring = require('querystring');

var login_req = {
    "API": "4.0",
    "action": "login",
    "password":"44Million!",
    "license_number":603347225,
    "username":"luchinisupercritical@gmail.com"
}
// app.use('/proxy', proxy('https://wslcb.mjtraceability.com/serverjson.asp', {
//   forwardPath: function(req, res) {
//     return require('url').parse(req.url).path;
//   }
// }));
app.post('/login', function (req, res, next) {
  // res.sendFile('/var/www/potnet.net/index.html')
  // console.log(req);
  // http.post(wslcb_server, req).success(function(res){console.log(res);})
  // res.send(j);
  PostCode(login_req)
});

function PostCode(codestring) {
  // Build the post string from an object
  var post_data = querystring.stringify({
      'compilation_level' : 'ADVANCED_OPTIMIZATIONS',
      'output_format': 'json',
      'output_info': 'compiled_code',
        'warning_level' : 'QUIET',
        'js_code' : codestring
  });

  // An object of options to indicate where to post to
  var post_options = {
      host: wslcb_server,
      path: '/serverjson.asp',
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(post_data)
      }
  };

  // Set up the request
  var post_req = http.request(post_options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
          console.log('Response: ' + chunk);
      });
  });

  // post the data
  post_req.write(post_data);
  post_req.end();

}

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
