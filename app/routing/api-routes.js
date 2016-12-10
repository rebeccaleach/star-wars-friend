console.log('api-routes.js is connected.');

var path = require('path');

module.exports = function(app) {

	app.get('/', function(req, res) {
		// res.send is working, but res.sendFile is not
		// - apparently it wasn't working because i didn't put require path in api-routes, even though it was server.js. why?
		// res.send('Is this thing on?????');
		res.sendFile(path.join(__dirname, '../public/index.html'));
	});

	app.get('/questions', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/questions.html'));
	});

};