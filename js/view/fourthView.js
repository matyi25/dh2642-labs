var FourthView = function (dishOverviewContainer, dishIngredientsContainer, dishPreparationContainer, totalPriceContainer, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	var dishId = 100;
	var dish = model.getDish(dishId);
  	var dishName = dish.name;
	var allDishes = model.getAllIngredients();
	var numOfGuests = model.numOfGuests;

	
	var dishOverviewSection = "<div class=\"col-md-12\" style=\"text-align: left\">\
	<h1>" + dishName + "</h1>\
	<img src=\"images/" + dish.image + "\"\
	class=\"img-responsive\">\
	<p>Some other stuff</p>\
	</div>"
	dishOverviewContainer.append(dishOverviewSection);

	var totalPrice = 0;

	var dishIngredientsSection = "<div class=\"col-md-12\" style=\"text-align: left\">\
	<h3>Ingredients for " + numOfGuests + " people</h3>"
	

	for (var i = dish.ingredients.length - 1; i >= 0; i--) {
		totalPrice += dish.ingredients[i].price*numOfGuests;
		dishIngredientsSection += "<div class=\"row\">\
		<div class=\"col-md-3\" style=\"text-align: left\">" + Math.round(dish.ingredients[i].quantity*numOfGuests) + "\
		 " + dish.ingredients[i].unit + "</div>\
		 <div class=\"col-md-6\" style=\"text-align: left\">" + dish.ingredients[i].name + "</div>\
		 <div class=\"col-md-1\" style=\"text-align: right\">SEK</div>\
		 <div class=\"col-md-2\" style=\"text-align: center\">" + dish.ingredients[i].price*numOfGuests + "</div>\</div>"
	};

	dishIngredientsContainer.append(dishIngredientsSection);
	totalPriceContainer.append("<b>SEK " + totalPrice +"</b>");



	var dishPreparationSection = "<div class=\"col-md-12\" style=\"text-align: left\">\
	<h1>Preparation</h1>\
	<p>"+dish.description+"</p>\
	</div>"
	dishPreparationContainer.append(dishPreparationSection);
	

	

}