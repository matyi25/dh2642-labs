var DishDetailsView = function (container,  model) {
	
	var dishDetailsViewContainer = container;

	this.getView = function() {
		return dishDetailsViewContainer;
	}

	this.update = function(obj) {

		var dish = model.getDish(model.getPendingDishId());
	  	if (dish != undefined) {
	  		var dishName = dish.name;
			var numOfGuests = model.getNumberOfGuests();

			dishDetailsViewContainer.find("#dishOverview").empty();
			dishDetailsViewContainer.find("#dishIngredients").empty();
			dishDetailsViewContainer.find("#dishPreparation").empty();
			dishDetailsViewContainer.find("#totalPrice").empty();


			var dishOverviewSection = "<div class=\"col-md-12\" style=\"text-align: left\">\
			<h1>" + dishName + "</h1>\
			<img src=\"images/" + dish.image + "\"\
			class=\"img-responsive\">\
			<p>Some other stuff</p>\
			</div>"
			dishDetailsViewContainer.find("#dishOverview").append(dishOverviewSection);

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

			dishDetailsViewContainer.find("#dishIngredients").append(dishIngredientsSection);
			dishDetailsViewContainer.find("#totalPrice").append("<b>SEK " + totalPrice +"</b>");



			var dishPreparationSection = "<div class=\"col-md-12\" style=\"text-align: left\">\
			<h1>Preparation</h1>\
			<p>"+dish.description+"</p>\
			</div>"
			dishDetailsViewContainer.find("#dishPreparation").append(dishPreparationSection);
		}
	}
	

	model.addObserver(this);

}