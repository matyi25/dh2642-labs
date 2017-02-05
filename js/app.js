$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	model.setNumberOfGuests(5);
	console.log(model.getNumberOfGuests());

	model.addDishToMenu(1);
	console.log(model.getFullMenu());

	model.addDishToMenu(2);
	console.log(model.getFullMenu());

	model.addDishToMenu(100);
	console.log(model.getFullMenu());

	console.log(model.getTotalMenuPrice());

	//And create the needed controllers and views
	var firstView = new FirstView($("#firstView"));
	var secondView = new SecondView($("#secondView"), model);
	var fifthView = new FifthView($("#fifthViewHeader"), $("#fifthViewDishes"), model);
	var sixthView = new SixthView($("#sixthViewHeader"), $("#sixthViewDishes"), model);

});