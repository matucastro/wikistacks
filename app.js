var express = require("express");
var app = express();
var pg = require("pg");
var nunjucks = require("nunjucks")
var routes = require('./routes');
var path = require('path');
var bodyParser = require('body-parser');



app.use(express.static(path.join(__dirname, '/public')));


// body parsing middleware
app.use(bodyParser.urlencoded({ extended: true })); // para HTML form submits
app.use(bodyParser.json()); // seria para AJAX requests


// templating boilerplate setup
app.engine('html', nunjucks.render); // como renderear templates html
app.set('view engine', 'html'); // que extensiones de archivo tienen los templates
nunjucks.configure('views', { noCache: true }); // donde encontrar las views

app.get("/", function(req, res){
	res.send("index.html")
});

