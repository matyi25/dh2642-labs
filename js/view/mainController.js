var MainController = function(mainBody, startScreenView, menuSummaryView, filteredDishesView, dishDetailsView, confirmDinnerView, printRecipeView, model) {
	var self = this;

	var startScreenViewContainer = startScreenView.getView();
	var menuSummaryViewContainer = menuSummaryView.getView();
	var filteredDishesViewContainer = filteredDishesView.getView();
	var dishDetailsViewContainer = dishDetailsView.getView();
	var confirmDinnerViewContainer = confirmDinnerView.getView();
	var printRecipeViewContainer = printRecipeView.getView();

 	startScreenViewContainer.find("#createNewDinnerBtn").click(function(){
 		mainBody.css("background-image","none");
 		mainBody.find("#mainScreen").css("display", "block");
 		mainBody.find("#selectDishColumn").css("display", "block");

 		startScreenViewContainer.css("display", "none");
 		menuSummaryViewContainer.css("display", "block");
 		filteredDishesViewContainer.css("display", "block");
 	});

 	menuSummaryViewContainer.find("#confirmDinnerBtn").click(function() {
 		menuSummaryViewContainer.css("display", "none");
 		filteredDishesViewContainer.css("display", "none");
 		dishDetailsViewContainer.css("display", "none");	
 		confirmDinnerViewContainer.css("display", "block");
 	});

 	filteredDishesViewContainer.find("#filteredDishes").bind("contentchanged", function() {
 		filteredDishesViewContainer.find("#filteredDishes").find("img").click(function() {
 		filteredDishesViewContainer.css("display", "none");
 		dishDetailsViewContainer.css("display", "block");
 		model.setPendingDish(this.id, undefined, filteredDishesViewContainer.find("#dishType").val());
 	})
 	});

 	dishDetailsViewContainer.find("#backButton").click(function() {
 		filteredDishesViewContainer.css("display", "block");
 		dishDetailsViewContainer.css("display", "none");
 		model.setPendingDish(undefined, undefined, undefined);
 	});

 	dishDetailsViewContainer.find("#confirmButton").click(function() {
 		model.addDishToMenu(filteredDishesViewContainer.find("#dishType").val());

 		filteredDishesViewContainer.css("display", "block");
 		dishDetailsViewContainer.css("display", "none");	
 	})

 	confirmDinnerViewContainer.find("#backButton").click(function() {
 		filteredDishesViewContainer.css("display", "block");
 		menuSummaryViewContainer.css("display", "block");
 		confirmDinnerViewContainer.css("display", "none");
 	});

 	confirmDinnerViewContainer.find("#printButton").click(function() {
 		printRecipeViewContainer.css("display", "block");
 		confirmDinnerViewContainer.css("display", "none");
 	});

 	printRecipeViewContainer.find("#backButton").click(function() {
 		confirmDinnerViewContainer.css("display", "block");
 		printRecipeViewContainer.css("display", "none");
 	});


}