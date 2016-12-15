// logic

console.log('Fascinating, Captain.');


// - create a function that runs when the user clicks the submit button
$('.submit').on('click', function() {

	// - store the user's information in a variable
	var newFriend = {
		// why are the keys not in quotes here but they are in friends.js (the data file)? shouldn't it be consistent across files?
		// try adding the quotes once the rest of the code is working
		// - use a jQuery selector to get the information
		"name": $('#name').val(),
		"photo": $('#photo').val(),
		"scores": [
			$('input[name=q1-answer]:checked').val(),
			$('input[name=q2-answer]:checked').val() //,
			// $('input[name=q3-answer]:checked').val(),
			// $('input[name=q4-answer]:checked').val(),
			// $('input[name=q5-answer]:checked').val(),
			// $('input[name=q6-answer]:checked').val(),
			// $('input[name=q7-answer]:checked').val(),
			// $('input[name=q8-answer]:checked').val(),
			// $('input[name=q9-answer]:checked').val(),
			// $('input[name=q10-answer]:checked').val()
			]

	};

	console.log(newFriend);

	// - this just gets the URL of the page the user is currently on. so it'd be localhost:3000 or http://www.rebeccasawesomestarwarsquiz.com or whatever
	var currentURL = window.location.origin;


	// - now the user's form input (which was saved into the object newFriend) is getting added to friends.js
	// so this code is:
	// 1) using AJAX to post
	// 2) taking in three arguments which are
	//  a) the URL to post to,
	//  b) the data being posted, and
	//  c) the callback function (a function that runs when the server sends a response)
	// so the callback function is just a function that sends up an alert when the browser receives a response from the server? and the response the browser receives is that res.json(true) from the api-routes.js file?
	// so data == true means that the browser has received a response from the server? which lets the browser know that the data successfully reached the server?
	$.post(currentURL + "/api/friends", newFriend, function(data) {
		if (data == true) {
			alert("Your form has been submitted!");
		}
		else {
			alert("Something went wrong and your form was not submitted.");
		}
		
	});

	// why is this here? when the user submits the form, return false? why? what does it do?
	return false;

});