
var express = require('express');
var bodyParser = require('body-parser');
var table = require('./routes/table');
var salary = require('./routes/salary');

var app = express();

var port = 5000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/table', table);
app.use('/salary', salary);

app.listen(port, function() {
	console.log('listening on port', port);
});