var grizzly = new Monster("Grizzly Jenkins", "blue");
$(document).ready(function() {
	var home = new Page("home", shows);
	$(".addImage").click(function(e) {
		e.preventDefault();
		console.log($("input").val());
		grizzly.addImage($(".container"), grizzly);
	});
	home.addToDom($(".shows"), shows);
	$(".tweets").append(home.generateMarkup(tweets));
	
});