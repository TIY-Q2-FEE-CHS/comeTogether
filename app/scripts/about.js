$(document).ready(function() {

	var about = new Page("about", tweets);
	var $tweets = $(".tweets");
	about.addToDom($tweets, tweets);


});