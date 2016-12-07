//// dependencies

// so require is actually a function? where is the function defined? is it a node thing?
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path'); // not sure if this is necessary. is it a core module?


//// express app

var app = express();
var PORT = 3000;

// what is process.env.PORT? what is it doing? why use it?
// var PORT = process.env.PORT || 8080;



// why do we need the ./ here?
// why do we need (app)? is it talking to api-routes.js to tell it what "app" means? is this calling two functions at once?
// why did the hot restaurant activity not use the "var apiRoutes =" part of this require (below)?
// why is the server saying .get is undefined?
// - you have to call this function AFTER you define app (i.e., var app = express(); ). the below version defines apiRoutes and calles the express function (i think). alternately, you just just define it (var apiRoutes = require('...'); ) and then call it later ( apiRoutes(app); )
var apiRoutes = require('./app/routing/api-routes.js')(app);



// data parsing - what is this? what does all this code mean? what exactly is it doing?
// - https://www.npmjs.com/package/body-parser
// - what is middleware?
// - parsing the body of the request json object?

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));





//// starting the server

app.listen(PORT, function() {
	console.log('Star Wars Friend is listening on port ' + PORT);
});