//ExampleView Object constructor
var SecondView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	console.log(this.numberOfGuests.val());
	this.numberOfGuests.val(model.getNumberOfGuests());
	
}
 