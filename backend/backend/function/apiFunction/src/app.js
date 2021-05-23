
var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});




app.get('/api', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

app.get('/api/*', function(req, res) {
 
  res.json({success: 'get call succeed!', url: req.url});
});



app.post('/api', function(req, res) {
 
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

app.post('/api/*', function(req, res) {

  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});



app.put('/api', function(req, res) {

  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/api/*', function(req, res) {
 
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});



app.delete('/api', function(req, res) {
 
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/api/*', function(req, res) {
 
  res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3000, function() {
    console.log("App started")
});

module.exports = app
