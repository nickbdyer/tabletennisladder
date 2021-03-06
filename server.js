var express = require('express');
var app = express();
var router = express.Router();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var server = require('http').createServer(app);
var database = require('./config/database');

app.set('dbUrl', database.db[app.settings.env]);
mongoose.connect(app.get('dbUrl'));

var mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'connection error:'));
mdb.once('open', function (callback) {
    console.log("yay!")
});

app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

app.use(express.static(__dirname + '/views'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/app/app.js', express.static(__dirname + '/app/app.js'));
app.use('/app/tableTennisLadderController.js', express.static(__dirname + '/app/tableTennisLadderController.js'));

require('./app/routes')(app, router);

app.get('*', function(request, response){
    response.sendFile(__dirname + '/public/index.html');
});

server.listen(3000, function(){
  console.log('Server listening on port 3000');
});



module.exports = server;
