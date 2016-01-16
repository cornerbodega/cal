var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var request = require('request');
var cheerio = require('cheerio')
app.use(express.logger());

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies



// Confi  guration

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

app.post('/potnetApi/signIn', function(req, res) {
    console.log(req.body);
    // check provided information against what's in mongodb
    // if it matches, respond with {success:1} else {success:0}
})

app.post('/potnetApi/signUp', function(req, res) {
    console.log(req.body);
    // check username/ubi to make sure it's not in the db
    // try to log in to wslcb with provided info
    // if error, return it
    // if success, return it
    // profit
    // request({
    //     url: "https://wslcb.mjtraceability.com/serverjson.asp",
    //     method: "POST",
    //     json: true,   // <--Very important!!!
    //     body: req.body
    // }, function (error, response, body){
    //     res.send(body);
    // });
})

// default to this list
// try today in 011216 mmddyy format
// work backwards 30 days until you find a file
// http://www.liq.wa.gov/publications/Public_Records/2016%20MJ%20Applicants/MarijuanaApplicants011216.xls
// get the xls file, save it to a database
// XLSX = require('xlsx');
// var fs = require('fs');

// app.get('/potnetApi/licenses', function(req, res) {
//
//     var url = "http://www.liq.wa.gov/publications/Public_Records/2016%20MJ%20Applicants/MarijuanaApplicants011216.xls"
//     // var url = "http://www.liq.wa.gov/records/frequently-requested-lists"
//
//     /* DO SOMETHING WITH workbook HERE */
//     request(url, function(error, response, html){
//         console.log('licenses!!!!!!!!!!!');
//         // console.log(error);
//         // console.log(response);
//         // need to save physical file!! give xlsx the path
//         if(!error){
//             console.log(response.body);
//             fs.writeFile("test.xls", response.body, function(err) {
//                 if(err) return console.log(err);
//                 console.log("The file was saved!");
//             });
//
//             // var workbook = XLSX.read(bstr, {type:"binary"});
//
//             // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality
//
//             // var $ = cheerio.load(html);
//             // console.log($);
//             // Finally, we'll define the variables we're going to capture
//             // console.log($('.header'));
//             // console.log($('.html'));
//             // var title, release, rating;
//             // var json = { title : "", release : "", rating : ""};
//             // $('.body').filter(function(){
//             //
//             //     // Let's store the data we filter into a variable so we can easily see what's going on.
//             //
//             //     var data = $(this);
//             //
//             //     // In examining the DOM we notice that the title rests within the first child element of the header tag.
//             //     // Utilizing jQuery we can easily navigate and get the text by writing the following code:
//             //
//             //     title = data.children().first().text();
//             //
//             //     // Once we have our title, we'll store it to the our json object.
//             //
//             //     json.title = title;
//             // })
//         }
//
//     })
//     // response.render('index.html')
//     // res.send('Licenses!')
//     // request({
//
//     //     method: "GET",
//     //     json: true,   // <--Very important!!!
//     // }, function (error, response, body){
//     //   //   res.send(body);
//     //   console.log('got licenses!');
//     //       console.log(body);
//     //       res.send(response)
//     // });
//
// });


var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
