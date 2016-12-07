console.log('api-routes.js is connected.');

module.exports = function(app) {

	app.get('/', function(req, res) {
		// res.send is working, but res.sendFile is not
		res.send('Is this thing on?????');
		// res.sendFile(path.join(__dirname, 'index.html'));
	});

};