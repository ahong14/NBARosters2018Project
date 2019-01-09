var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var path = require("path");
var router = express.Router();
var players = require('./routes/players');
var teams = require('./routes/teams');


//connect mongoose database
mongoose.connect("mongodb://ahong14:6816782a@ds147344.mlab.com:47344/books");
mongoose.connection.on('error', function(error) {
    console.error('Database connection error:', error);
});

//setup express app
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

//serve react files
app.use(express.static(path.join(__dirname, 'frontend')));

//routes
app.use('/players', players);
app.use('/teams', teams);

//listen to requests
var PORT = process.env.PORT || 8080;
app.listen(PORT,function(){
    console.log(`Server started on port ${PORT}`);
});
