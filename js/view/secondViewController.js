var SecondViewController = function (model, secondView) {
	secondView.find("#addNumberOfGuestsBtn").click(function() {
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	});

	secondView.find("#subNumberOfGuestsBtn").click(function() {
		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
	})
	
}