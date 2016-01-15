var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var request = require('request');
app.use(express.logger());

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies



// Configuration

// app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.configure(function(){
  app.set('views', __dirname + '/app');
  //app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/app'));
  app.use(app.router);
  app.engine('html', require('ejs').renderFile);
});

app.get('/', function(request, response) {
  response.render('index.html')
});

app.post('/potnetApi/postWrapper', function(req, res) {
    console.log(req.body);
    request({
        url: "https://wslcb.mjtraceability.com/serverjson.asp",
        method: "POST",
        json: true,   // <--Very important!!!
        body: req.body
    }, function (error, response, body){
        res.send(body);
    });
})

// default to this list
// try today in 011216 mmddyy format
// work backwards 30 days until you find a file
// http://www.liq.wa.gov/publications/Public_Records/2016%20MJ%20Applicants/MarijuanaApplicants011216.xls
// get the xls file, save it to a database
app.get('/potnetApi/licenses', function(req, res) {
  // response.render('index.html')
  // res.send('Licenses!')
  request({
      url: "http://www.liq.wa.gov/publications/Public_Records/2016%20MJ%20Applicants/MarijuanaApplicants011216.xls",
      method: "GET",
      json: true,   // <--Very important!!!
  }, function (error, response, body){
    //   res.send(body);
        console.log(body);
  });

});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
