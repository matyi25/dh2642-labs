//ExampleView Object constructor
var SecondView = function (container, model) {
	
	this.update = function(obj) {	
		this.numberOfGuests = container.find("#numberOfGuests");
		this.numberOfGuests.val(model.getNumberOfGuests());

		var pendingDishId = model.getPendingDishId();
		if (pendingDishId != undefined) {
			var pendingDish = model.getDish(pendingDishId);
			var price = 0;
			for (var i = 0; i < pendingDish.ingredients.length; i++) {
				price = pendingDish.ingredients[i].price + price;
			}
			price = price * model.getNumberOfGuests();
			container.find("#pendingCost").html(price);
		}
		else {
			container.find("#pendingCost").html("0.00");
		}
		container.find("#totalCost").html(model.getTotalMenuPrice() + price);
	}

	model.addObserver(this);
	
}
 