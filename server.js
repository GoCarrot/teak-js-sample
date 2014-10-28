var express = require('express');
var fs = require('fs');
var exec = require('child_process').exec;

var facebook_app_id = process.env.FACEBOOK_APP_ID,
    carrot_app_secret = process.env.CARROT_APP_SECRET;

var app = express();

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.set('view options', {
    layout: false
  });
});

function renderIndex(request, response) {
  response.render('index', {
    facebook_app_id: facebook_app_id,
    carrot_app_secret: carrot_app_secret
  });
}

app.post('/', function(request, response) {
  renderIndex(request, response);
});

app.get('/', function(request, response) {
  renderIndex(request, response);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
