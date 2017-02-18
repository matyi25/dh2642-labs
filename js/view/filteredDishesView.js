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

	  	$("body").addClass("loading");
		model.getAllDishes(dishType, dishName, function(dishes) {
			$("body").removeClass("loading");
			if(dishes != undefined)
			{
				filteredDishesView.find("#filteredDishes").empty();
				var dishImageSection = ""
				for (var i = 0; i < dishes.results.length; i++) {
					if ((i%5 == 0) || (i==0)) {
						dishImageSection = dishImageSection + "<div class=\"row\">";
					}
					dishImageSection = dishImageSection + "<div class=\"col-md-2\" align=\"center\">\
			            <img src=\""+ dishes.baseUri + dishes.results[i].image + "\" id=\"" + dishes.results[i].id + "\"\
			            class=\"img-responsive\"><p></p>\
			            <p id=\"dishNameRow\" style=\"text-align: center\"><b>" + dishes.results[i].title + "</b></p>\
			          </div>"

			        if ((i%5 == 0) && (i!=0)) {
						dishImageSection = dishImageSection + "</div>"
						filteredDishesView.find("#filteredDishes").append(dishImageSection);
						dishImageSection = "";
					}
				}
				dishImageSection = dishImageSection + "</div>"
				filteredDishesView.find("#filteredDishes").append(dishImageSection);
				dishImageSection = "";
				filteredDishesView.find("#filteredDishes").trigger("contentchanged");
			}
		}, function() {
			alert("Data retrieval was faulty");
			$("body").removeClass("loading");
		});
	}

	model.addObserver(this);

}