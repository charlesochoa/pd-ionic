const express = require('express');
const app = express();

// Run the app by serving the static files in the dist directory
app.use(express.static(__dirname + '/dist'));
app.use(express.static('www'));
var cors = require('cors');
                                 
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', '*');
    res.header("Access-Control-Allow-Headers", "*");
    next();
  });

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);