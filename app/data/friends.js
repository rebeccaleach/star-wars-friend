// app data

console.log('friends.js data file is connected.');

var friendsData = [
	{
		"name": "General Leia Organa",
		"photo": "",
		"scores": [5,1]
	},
	{
		"name": "Rey",
		"photo": "",
		"scores": [2, 3]
	}
];

// why do you need to export it if you're already requiring it in api-routes.js? does it not know what to do with the file unless you do module.exports?
// on a related note, i assume module.exports is essentially turning the file into a module? what is a module, exactly? just another JS file?
// - got an error until i matched the module.exports name with the var name, so apparently module.exports is exporting only that variable and not the entire file. which pretty much answers my question about require and module.exports and why you need them both
module.exports = friendsData;