var app = require('express')();
var http = require('http').Server(app);
// var io = require('socket.io')(http);


app.get('/', function(req, res){
    res.sendFile('/var/www/potnet.net/index.html');
});


http.listen(3000, function(){
    console.log('listening on *:3000');
});

http.get('/getData', function()){
    console.log('get data please');
}

// io.on('connection', function(socket){
//     console.log('a user connected');
//     socket.on('disconnect', function(){
//         console.log('user disconnected');
//     });
//     socket.on('chat message', function(msg){
//         console.log('message: ' + msg);
//         io.emit('chat message', msg);
//     });
// });
