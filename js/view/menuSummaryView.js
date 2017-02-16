var MenuSummaryView = function (container, model) {
	var menuSummaryView = container;
	
	this.getView = function () {
		return menuSummaryView;
	}

	this.calcPrice = function(dish) {
		var price = 0;
		for (var i = 0; i < dish.ingredients.length; i++) {
				price = dish.ingredients[i].price + price;
			}
		return price * model.getNumberOfGuests();
	}

	this.update = function(obj) {	
		this.numberOfGuests = menuSummaryView.find("#numberOfGuests");
		this.numberOfGuests.val(model.getNumberOfGuests());

		var pendingDishId = model.getPendingDishId();
		var oldDish = undefined;
		var menuDishesList = model.getFullMenu();

		menuSummaryView.find("#selectedDishesList").empty();

		for (i=0; i<menuDishesList.length; i++) {
			actualType = menuDishesList[i].type;
			var menuDishesListSection = "<div class=\"row\" id=\""+ actualType+ "Row\" style=\"background-color:#f5f5ef;display:block\">\
              <div class=\"col-md-6\">\
                <a><h4 id=\""+actualType+"\">"+menuDishesList[i].name+"</h4></a>\
              </div>\
              <div class=\"col-md-3\">\
                <h4 id=\""+actualType+"Cost\">"+this.calcPrice(menuDishesList[i])+"</h4>\
              </div>\
              <div class=\"col-md-3\">\
                <h4>SEK</h4>\
              </div>\
            </div>";
            menuSummaryView.find("#selectedDishesList").append(menuDishesListSection);
		}

        var pendingCost = 0;
        var pendingName = "Pending"
		if (pendingDishId != undefined) {
			oldDish = model.getSelectedDish(model.getDish(pendingDishId).type);
			var pendingDish = model.getDish(pendingDishId);

			pendingCost = this.calcPrice(pendingDish);
			pendingName = pendingDish.name;
		}

		var menuPendingDishSection = "<div class=\"row\" id=\"pendingRow\" style=\"background-color:#f5f5ef;display:block\">\
              <div class=\"col-md-6\">\
                <a><h4 id=\"pendingName\">"+pendingName+"</h4></a>\
              </div>\
              <div class=\"col-md-3\">\
                <h4 id=\"pendingCost\">"+pendingCost+"</h4>\
              </div>\
              <div class=\"col-md-3\">\
                <h4>SEK</h4>\
              </div>\
            </div>";
        menuSummaryView.find("#selectedDishesList").append(menuPendingDishSection);


		if (oldDish != undefined) {
			oldDishPrice = this.calcPrice(oldDish);
			menuSummaryView.find("#totalCost").html(model.getTotalMenuPrice() + pendingCost - oldDishPrice);
		} else {
			menuSummaryView.find("#totalCost").html(model.getTotalMenuPrice() + pendingCost);
		}

		menuSummaryView.find("#selectedDishesList").trigger("contentchanged");
	}

	model.addObserver(this);
	
}
 