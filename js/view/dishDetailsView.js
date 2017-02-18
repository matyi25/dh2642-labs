var DishDetailsView = function (container,  model) {
	
	var dishDetailsViewContainer = container;

	this.getView = function() {
		return dishDetailsViewContainer;
	}

	this.update = function(obj) {
		var pendingDishId = model.getPendingDishId();
		if (pendingDishId != undefined) {
			$("body").addClass("loading");
			model.getDish(pendingDishId, function(dish) {
				$("body").removeClass("loading");

				if (dish != undefined) {
			  		var dishName = dish.title;
					var numOfGuests = model.getNumberOfGuests();

					dishDetailsViewContainer.find("#dishOverview").empty();
					dishDetailsViewContainer.find("#dishIngredients").empty();
					dishDetailsViewContainer.find("#dishPreparation").empty();
					dishDetailsViewContainer.find("#totalPrice").empty();


					var dishOverviewSection = "<div class=\"col-md-12\" style=\"text-align: left\">\
					<h1>" + dishName + "</h1>\
					<img src=\"" + dish.image + "\"\
					class=\"img-responsive\">\
					<p></p>\
					</div>"
					dishDetailsViewContainer.find("#dishOverview").append(dishOverviewSection);

					var totalPrice = 0;

					var dishIngredientsSection = "<div class=\"col-md-12\" style=\"text-align: left\">\
					<h3>Ingredients for " + numOfGuests + " people</h3>"
					

					for (var i = dish.extendedIngredients.length - 1; i >= 0; i--) {
						totalPrice += dish.extendedIngredients[i].amount*numOfGuests;
						dishIngredientsSection += "<div class=\"row\">\
						<div class=\"col-md-3\" style=\"text-align: left\">" + Math.round(dish.extendedIngredients[i].amount*numOfGuests*1000) /1000 + "\
						 " + dish.extendedIngredients[i].unitShort + "</div>\
						 <div class=\"col-md-6\" style=\"text-align: left\">" + dish.extendedIngredients[i].name + "</div>\
						 <div class=\"col-md-1\" style=\"text-align: right\">SEK</div>\
						 <div class=\"col-md-2\" style=\"text-align: center\">" + Math.round(dish.extendedIngredients[i].amount*numOfGuests*1000)/1000 + "</div>\</div>"
					};

					dishDetailsViewContainer.find("#dishIngredients").append(dishIngredientsSection);
					dishDetailsViewContainer.find("#totalPrice").append("<b>SEK " + totalPrice +"</b>");



					var dishPreparationSection = "<div class=\"col-md-12\" style=\"text-align: left\">\
					<h1>Preparation</h1>\
					<p>"+dish.instructions+"</p>\
					</div>"
					dishDetailsViewContainer.find("#dishPreparation").append(dishPreparationSection);
				}

			}, function() {
				$("body").removeClass("loading");
				alert("Data retrieval was faulty");
			});
		}
	}
	

	model.addObserver(this);

}