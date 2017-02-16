$(function() {
	var model = new DinnerModel();

	//And create the needed controllers and views
	var startScreenView = new StartScreenView($("#startScreenView"), model);
	var menuSummaryView = new MenuSummaryView($("#menuSummaryView"), model);
	var filteredDishesView = new FilteredDishesView($("#filteredDishesView"), model);
	var dishDetailsView = new DishDetailsView($("#dishDetailsView"), model);
	var confirmDinnerView = new ConfirmDinnerView($("#confirmDinnerView"), model);
	var printRecipeView = new PrintRecipeView($("#printRecipeView"), model);

	var startScreenViewController = new StartScreenViewController(model, startScreenView);
	var menuSummaryViewController = new MenuSummaryViewController(model, menuSummaryView);
	var filteredDishesViewController = new FilteredDishesViewController(model, filteredDishesView);
	var dishDetailsViewController = new DishDetailsViewController(model, dishDetailsView);
	var confirmDinnerViewController = new ConfirmDinnerViewController(model, confirmDinnerView);
	var printRecipeViewController = new PrintRecipeViewController(model, printRecipeView);
	
	var mainController = new MainController($("#indexBody"), startScreenView, menuSummaryView, filteredDishesView, dishDetailsView, confirmDinnerView, printRecipeView, model);

});