const
path = require('path'),
express = require('express'),
app = express.Router(),
serverFunc = require('./javascript/serverFunctionality.js');

app.get('/test', function(req,res){
  serverFunc.test(req, res)
});

module.exports = app
