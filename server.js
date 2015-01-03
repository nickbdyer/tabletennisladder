var express = require('express');
var app = express();
var server = require('http').createServer(app);
var config = require('./config');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bodyParser = require('body-parser');
var Player = require('./lib/models/Player.js');

 // set the 'dbUrl' to the mongodb url that corresponds to the
 // environment we are in
app.set('dbUrl', config.db[app.settings.env]);
 // connect mongoose to the mongo dbUrl
mongoose.connect(app.get('dbUrl'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/views'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/app/app.js', express.static(__dirname + '/app/app.js'));
app.use('/app/tableTennisLadderController.js', express.static(__dirname + '/app/tableTennisLadderController.js'));

app.set('view engine', 'ejs');

app.get('/', function(request, response){
  Player.find(function (err, players) {
    if(err) return next(err);
    response.render("index.ejs", {playerlist: players})
  });
});

app.post('/', function(request, response){
  var player = new Player();
  player.name = request.body.name
  player.save(function(err) {
    if (err) {
      response.send(err)
    }
    console.log("player created")
  })
  Player.find(function (err, players) {
    if(err) return next(err);
  });
  response.render("index.ejs", {playerlist: players});
});


var mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'connection error:'));
mdb.once('open', function (callback) {
    console.log("yay!")
  });


server.listen(3000, function(){
  console.log('Server listening on port 3000');
});

module.exports = server;
