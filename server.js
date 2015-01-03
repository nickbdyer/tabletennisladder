var express = require('express');
var app = express();
var server = require('http').createServer(app);
var config = require('./config');
var mongoose = require('mongoose');

 // set the 'dbUrl' to the mongodb url that corresponds to the
 // environment we are in
 app.set('dbUrl', config.db[app.settings.env]);
 // connect mongoose to the mongo dbUrl
 mongoose.connect(app.get('dbUrl'));

var mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'connection error:'));
mdb.once('open', function (callback) {
    console.log("yay!")
  });

app.use(express.static(__dirname + '/views'));

app.get('/', function(request, response){
  response.sendFile(__dirname + "/index.html");
});

server.listen(3000, function(){
  console.log('Server listening on port 3000');
});

module.exports = server;
