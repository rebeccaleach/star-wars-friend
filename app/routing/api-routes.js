console.log('api-routes.js is connected.');

// require path so that routes will work (/, /questions, etc.)
// - just kidding, DON'T use path because you don't want end users to be able to access dynamic files. otherwise they might be able to go in and change or delete shit.
// var path = require('path');

var friendsData = require('../data/friends.js');

module.exports = function(app) {

	// despite everything i just learned about how path and express.static work, the comments in the example exercise (Hot Restaurant) say that a user will be able to use the below routes to view a JSON object. so maybe that means that the JSON is just being generated and it's not the actual JS file that's being shown?

	// what is this code doing? is it just supposed to display the JSON if the user visits that route?
	// - YES. that is exactly what happened when i typed in that route and hit enter
	app.get('/api/friends', function(req, res) {
		res.json(friendsData);
	});

	// - this route is used for submitting the form. when the user visits this route (which is just them clicking the "Submit" button), the data they entered in the form will be pushed to the JS file.
	// - the code inside the function is what pushes the user's data to the JS file
	// so i guess it's okay that this is the same route as the one above because it's a post and not a get? you send and receive data from the same file, so you need the same route?
	app.post('/api/friends', function(req, res) {
		friendsData.push(req.body);
		// what does this do? code does not work without it. why is it needed? does the form info not get submitted without res.json(true)?
		// - it just shows me a blank page that reads "true" after clicking the submit button.
		// so could this be replaced with, say, a page that says "your form was successfully submitted!" or something like that? if so, why does the example code have res.json(true) when there'd be much better options? who the fuck designed this shit? :P
		// but since this whole route doesn't seem to work without res.json(true), what else is it doing besides displaying "true" on the page? what exactly is happening here?
		res.json(true);
	});

};