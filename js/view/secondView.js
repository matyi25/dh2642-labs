//ExampleView Object constructor
var SecondView = function (container, model) {
	this.calcPrice = function(dish) {
		var price = 0;
		for (var i = 0; i < dish.ingredients.length; i++) {
				price = dish.ingredients[i].price + price;
			}
		return price * model.getNumberOfGuests();
	}

	this.update = function(obj) {	
		this.numberOfGuests = container.find("#numberOfGuests");
		this.numberOfGuests.val(model.getNumberOfGuests());

		var pendingDishId = model.getPendingDishId();
		var price = 0;
		var selectedDish = undefined;

		if (pendingDishId != undefined) {
			selectedDish = model.getSelectedDish(model.getDish(pendingDishId).type);
			var pendingDish = model.getDish(pendingDishId);
			price = this.calcPrice(pendingDish);
			container.find("#pendingCost").html(price);
		}
		else {
			container.find("#pendingCost").html("0");
		}

		if (selectedDish != undefined) {
			oldDishPrice = this.calcPrice(selectedDish);
			container.find("#totalCost").html(model.getTotalMenuPrice() + price - oldDishPrice);
		} else {
			container.find("#totalCost").html(model.getTotalMenuPrice() + price);
		}
	}

	model.addObserver(this);
	
}
 