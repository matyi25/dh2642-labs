//ExampleView Object constructor
var SecondView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.numberOfGuests.val(model.getNumberOfGuests());

	var selectedDish = model.getSelectedDish("starter");
	if (selectedDish != undefined) {
		var price = 0;
		for (var i = 0; i < selectedDish.ingredients.length; i++) {
			price = selectedDish.ingredients[i].price + price;
		}
		container.find("#pendingCost").html(price);
	}
	else {
		container.find("#pendingCost").html("0.00");
	}
	container.find("#totalCost").html(model.getTotalMenuPrice());
	
}
 