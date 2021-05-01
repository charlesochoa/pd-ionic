var express  = require('express');
var app      = express();                               
var morgan = require('morgan');            
var bodyParser = require('body-parser');    
var cors = require('cors');

app.use(morgan('dev'));
app.use(cors());
 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', '*');
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
 
app.use(express.static('www'));
app.set('port', process.env.PORT || 80);
app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});