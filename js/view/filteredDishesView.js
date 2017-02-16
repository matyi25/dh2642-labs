var FilteredDishesView = function (container, model) {
	var filteredDishesView = container;
	var allDishesTypes = ["None"].concat(model.getAllDishesType());

	for (var i = 0; i < allDishesTypes.length; i++) {
		var dishesOption = filteredDishesView.find("#dishType")
		dishesOption.append("<option>" + allDishesTypes[i] + "</option");
	}

	this.getView = function() {
		return filteredDishesView;
	}

	this.update = function(obj) {
		var dishType = filteredDishesView.find("#dishType").val();
	  	var dishName = filteredDishesView.find("#dishName").val();
	  	if (dishName == "None") {
	  		dishType = undefined;
	  	}
		var allDishes = model.getAllDishes(dishType, dishName);

		filteredDishesView.find("#filteredDishes").empty();
		for (var i = 0; i < allDishes.length; i++) {
			var dishImageSection = "<div class=\"col-md-2\" align=\"center\">\
	            <img src=\"images/" + allDishes[i].image + "\" id=\"" + allDishes[i].id + "\"\
	            class=\"img-responsive\"><p></p>\
	            <p id=\"dishNameRow\" style=\"text-align: center\"><b>" + allDishes[i].name + "</b></p>\
	            <p style=\"text-align: left\" >" + allDishes[i].description + "</p>\
	          </div>"
			filteredDishesView.find("#filteredDishes").append(dishImageSection);
		}
		filteredDishesView.find("#filteredDishes").trigger("contentchanged");
	}

	model.addObserver(this);

}