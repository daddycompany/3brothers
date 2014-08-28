// mysql connect
var mysql = require('mysql');
var connection = mysql.createConnection({
    host    :" ",
    user : ' ',
    port:0000 ,
    password : ' ',
    database:" "
});

//////////////////////////////////////////////////////////

//express setting
global.client=connection;
global.client.connect();
var express = require('express');
var app = express();
var api= require('./public/api.js');
app.use(express.static(__dirname + '/public'));


//body-parser
var bodyParser = require('body-parser');
app.use(bodyParser());

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
var allowCrossDomain = function(req,res,next){
    res.header('Access-Control-Allow-Origin','+');
    res.header('Access-Control--sx-Allow-Headers','X-Requested-With');
    next();
};

var cors = require('cors');
app.use(cors());
app.use(allowCrossDomain);

app.use(function (req, res, next) {
    console.log(req.body);
    // populated!
    next()
});

//connect port setting
var server = app.listen( 0000 , function() {
    console.log('Listening on port %d', server.address().port);
});

/////////////////////////////////////////////////////////

app.post('/api/:api',function(req,res){
    api.handleAPI(req,res)
});
app.get('/api/:api',function(req,res){
    api.handleAPI(req,res)
});


// api devide
/*
 app.post('/api/:subapi/:api',function(req,res){
 harmony_subapi.handleAPI(req,res)
 });
 app.get('/api/:subapi/:api',function(req,res){
 harmony_subapi.handleAPI(req,res)
 });
 */
///////////////////////////////////

