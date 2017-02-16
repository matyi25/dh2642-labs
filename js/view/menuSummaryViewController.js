var MenuSummaryViewController = function (model, menuSummaryView) {
	var menuSummaryViewContainer = menuSummaryView.getView();

	menuSummaryViewContainer.find("#addNumberOfGuestsBtn").click(function() {
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	});

	menuSummaryViewContainer.find("#subNumberOfGuestsBtn").click(function() {
		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
	});

	menuSummaryViewContainer.find("#numberOfGuests").change(function(){
		model.setNumberOfGuests(this.value);
	});

	menuSummaryViewContainer.find("#selectedDishesList").bind("contentchanged", function() {
		var menuDishesList = model.getFullMenu();
		for (var i = 0; i < menuDishesList.length; i++) {
			menuSummaryViewContainer.find("#"+menuDishesList[i].type).click(function(id){
				model.removeDishFromMenu(menuDishesList[i].type);
				menuSummaryViewContainer.find("#"+menuDishesList[i].type+ "Row").css("display","none");
			})
		}
	});
}