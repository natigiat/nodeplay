var express = require('express')
var http = require('http')
var app = express()
 
app.get('/', function (req, res) {
 	res.sendfile('index.html');
})
 
app.listen(3000)