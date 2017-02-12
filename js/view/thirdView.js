var ThirdView = function (filteredDishesContainer, inputDish, model) {
	var allDishesTypes = model.getAllDishesType();

	for (var i = 0; i < allDishesTypes.length; i++) {
		var dishesOption = inputDish.find("#dishType")
		dishesOption.append("<option>" + allDishesTypes[i] + "</option");
	}

	this.update = function(obj) {
		var dishType = inputDish.find("#dishType").val();
	  	var dishName = inputDish.find("#dishName").val();
		var allDishes = model.getAllDishes(dishType, dishName);

		filteredDishesContainer.empty();
		for (var i = 0; i < allDishes.length; i++) {
			var dishImageSection = "<div class=\"col-md-2\" align=\"center\">\
	            <img src=\"images/" + allDishes[i].image + "\" id=\"" + allDishes[i].id + "\"\
	            class=\"img-responsive\"><p></p>\
	            <p id=\"dishNameRow\" style=\"text-align: center\"><b>" + allDishes[i].name + "</b></p>\
	            <p style=\"text-align: left\" >" + allDishes[i].description + "</p>\
	          </div>"
			filteredDishesContainer.append(dishImageSection);
		}
		filteredDishesContainer.trigger("contentchanged");
	}

	model.addObserver(this);

}