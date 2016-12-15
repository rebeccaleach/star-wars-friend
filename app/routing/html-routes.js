console.log('html-routes.js is connected.');

// - path creates a direct route to the specified file, but not to anything else. apparently not even to files that are linked from the HTML file that is displayed when going to a certain route. this is because no public directory has been created UNLESS you also include app.use(express.static('app/public')); in the server file, which creates an entire public directory of files that can then be accessed by the end user. app.use(express.static('app/public')); only defines a public directory. it doesn't create a link to take you to any of the files
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

	// - app.use is apparently a catchall that will run on any HTTP route (GET, POST, etc.). so if a user types in a route that doesn't exist, app.use can be used to redirect them to somewhere else (or maybe display a 404? and probably other things?)
	// - http://stackoverflow.com/questions/15601703/difference-between-app-use-and-app-get-in-express-js
	// - so the below code redirects the user to the home page if a nonexistent path is typed in. it basically sets a default route

	// app.use(function(req, res) {
	// 	res.sendFile(path.join(__dirname + '/../public/index.html'));
	// });
};