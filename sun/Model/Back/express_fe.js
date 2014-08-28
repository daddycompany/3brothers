/**
 * Created by kimsunchul on 2014. 8. 28..
 */
var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var basic_api = require('./include/basic_api');  //경로 지정
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var allowCrossDomain = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
}
var cors = require('cors');
app.use(cors());
app.use(allowCrossDomain);                      //crossdomain 방지

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//file 저장 path
global.filedir = "/file/";                      //경로지정(file 저장에 관한)
app.use(express.static(global.filedir));

app.use('/', routes);
app.use('/users', users);

app.get('/api/:apiname', function(req, res){
    console.info("get api : " + req.params.apiname);
    basic_api.apiHandler(req,res);
});
app.post('/api/:apiname', function(req, res){
    console.log("post api : " + req.params.apiname);
    basic_api.apiHandler(req,res);
});

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('null', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
var server = app.listen(00000, function() {
    console.log('Listening on port %d', server.address().port);
});

//mysql setup
var mysql      = require('mysql');
global.connection = mysql.createConnection({
    host     : 'id',
    user     : 'root',
    password : 'password',
    database : 'database name '
});
global.connection.connect();
