var FilteredDishesViewController = function (model, filteredDishesView) {
	var filteredDishesViewContainer = filteredDishesView.getView();

	filteredDishesViewContainer.find("#searchBtn").click(function() {
		filteredDishesView.update();
	});

	
}