var ThirdView = function (filteredDishesContainer, inputDish, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	var dishType = inputDish.find("#dishType").val();
  	var dishName = inputDish.find("#dishName").val();
	var allDishes = model.getAllDishes(dishType, dishName);

	for (var i = 0; i < allDishes.length; i++) {
		var dishImageSection = "<div class=\"col-md-2\" align=\"center\">\
            <img src=\"images/" + allDishes[i].image + "\"\
            class=\"img-responsive\"><p></p>\
            <p id=\"dishNameRow\" style=\"text-align: center\"><b>" + allDishes[i].name + "</b></p>\
            <p style=\"text-align: left\" >" + allDishes[i].description + "</p>\
          </div>"
		filteredDishesContainer.append(dishImageSection);
	}

	

}