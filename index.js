var bodyParser = require('body-parser');

var express = require('express');
var app = express();

const PORT = process.env.PORT||3000;
app.use(bodyParser.urlencoded({ extended:true }));
var router = require('./router/main')(app);
var db = require('./db');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


var server = app.listen(PORT, function(){
    console.log("server has started on port " + PORT)
})