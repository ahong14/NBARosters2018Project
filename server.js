var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect mongoose database
mongoose.connect("mongodb://ahong14:6816782a@ds147344.mlab.com:47344/books");
mongoose.connection.on('error', function(error) {
    console.error('Database connection error:', error);
});

var app = express();
app.use(bodyParser.json());
app.use(cors());

var PORT = process.env.PORT || 3000;
app.listen(PORT,function(){
    console.log(`Server started on port ${PORT}`);
});