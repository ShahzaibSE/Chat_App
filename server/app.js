///<referance path="./typings/tsd.d.ts"/>
"use strict";
var express = require('express');
var path = require('path');
var io = require('socket.io');
var app = express();
//Confuiguring Port.
var port = process.env.PORT | 3000;
//Configuring Server.
var server = app.listen(port, function () {
    var listening_port = server.address().port;
    console.log("Listining on" + " " + listening_port);
});
//app.get('/',routes);
//Configuring view engine.
//app.set('views','./views');
//app.set('view engine','ejs');
//Static file server.
app.use(express.static(path.resolve(__dirname, 'public')));
/*app.get('/',function(req,res){
    res.render('index');
})

app.get('/',function(req,res){
    res.sendFile('index.html');
})*/
/*io.on('connection',function(socket){
    console.log("User is connected");
})*/
var chatServer = require('./lib/chat_server');
chatServer.listen(server);
