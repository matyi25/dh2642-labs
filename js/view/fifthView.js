var FifthView = function (headerContainer, dishesContainer, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = headerContainer.find("#numberOfGuests");
	this.numberOfGuests.html(model.getNumberOfGuests());

	var fullMenu = model.getFullMenu();
	for (var i = 0; i < fullMenu.length; i++) {
		var dishPrice = 0;
		for (var j = 0; j < fullMenu[i].ingredients.length; j++) {
			dishPrice = dishPrice + fullMenu[i].ingredients[j].price;
		}

		var dishImageSection = "<div class=\"col-md-3\" style=\"text-align: left\">\
            <img src=\"images/" + fullMenu[i].image + "\"\
            class=\"img-responsive\">\
            <p>" + fullMenu[i].name + "</p>\
            <div class=\"row\">\
              <div class=\"col-md-1\">"+ dishPrice+ "</div>\
              <div class=\"col-md-1\">SEK</div>\
              <div class=\"col-md-6\"></div>\
            </div>\
          </div>"
		dishesContainer.append(dishImageSection);
	}

	var dishPriceSection = "<div class=\"col-md-3\">\
            <div class=\"row\">\
              <div class=\"col-md-6\">Total cost:</div>\
              <div class=\"col-md-3\">" + model.getTotalMenuPrice() + "</div>\
              <div class=\"col-md-3\">SEK</div>\
            </div>\
          </div>"
    dishesContainer.append(dishPriceSection);

}