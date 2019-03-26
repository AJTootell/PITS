const
path = require('path'),
express = require('express'),
app = express.Router(),
serverFunc = require('./serverFunctionality.js');

app.get('/test', function(req,res){
  serverFunc.test(req, res)
});

module.exports = app
