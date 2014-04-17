function Monster(name, color) {
	this.name = name;
	this.color = color;
}

Monster.prototype.addImage = function($el, monster) {
	  var imagePath = $("input").val();
	  var markupImage = "<img src=\"" + imagePath + "\" title=\"" + monster.name + "\">";
		$el.append(markupImage);
};


function Page(name, templates) {
		this.name = name; // name of page
		this.templates = templates; // templates object
}

Page.prototype.generateMarkup = function(data) {  // must be simple array
        var markup = "";
        var i;

        for(i = 0; i < data.length; i++) {
          markup += "<li>" + data[i] + "</li>";
          
        }

        return markup;

  };

Page.prototype.addToDom = function($el, data) {

		var generatedMarkupString = this.generateMarkup(data);

		$el.append(generatedMarkupString);




};