var express = require('express');
var app = express();
var server = require('http').createServer(app);
var mongoose = require('mongoose');
var models = require('./lib/models')
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/ttladder_development');

var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function (callback) {
//     console.log("yay!")
//   });

app.use(express.static(__dirname + '/views'));

app.get('/', function(request, response){
  response.sendFile(__dirname + "/index.html");
});

server.listen(3000, function(){
  console.log('Server listening on port 3000');
});

module.exports = server;
