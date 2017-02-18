var MenuSummaryView = function (container, model) {
	var menuSummaryView = container;
	var self = this;
	
	this.getView = function () {
		return menuSummaryView;
	}

	this.calcPrice = function(dish) {
		var price = 0;
		for (var i = 0; i < dish.extendedIngredients.length; i++) {
				price = dish.extendedIngredients[i].amount + price;
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
			actualId = menuDishesList[i].id;
			var menuDishesListSection = "<div class=\"row\" id=\""+ actualId+ "Row\" style=\"background-color:#f5f5ef;display:block\">\
              <div class=\"col-md-6\">\
                <a><h4 id=\""+actualId+"\">"+menuDishesList[i].title+"</h4></a>\
              </div>\
              <div class=\"col-md-3\">\
                <h4 id=\""+actualId+"Cost\">"+this.calcPrice(menuDishesList[i])+"</h4>\
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
			model.getDish(pendingDishId, function(pendingDish) {
				oldDish = model.getSelectedDish(pendingDish.dishTypes[0]);

				pendingCost = self.calcPrice(pendingDish);
				pendingName = pendingDish.title;
				self.pendingSectionFill(pendingName, pendingCost, oldDish);
			}, function() {
				$("body").removeClass("loading");
				alert("Data retrieval was faulty");
			});
		}
		else {
			this.pendingSectionFill(pendingName, pendingCost, oldDish);
		}

	}

	this.pendingSectionFill = function(pendingName, pendingCost, oldDish) {
		var menuPendingDishSection = "<div class=\"row\" id=\"pendingRow\" style=\"background-color:#f5f5ef;display:block\">\
              <div class=\"col-md-6\">\
                <h4 id=\"pendingName\">"+pendingName+"</h4>\
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
 