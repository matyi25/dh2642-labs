$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	//And create the needed controllers and views
	var firstView = new FirstView($("#firstView"));
	var secondView = new SecondView($("#secondView"), model);
	var thirdView = new ThirdView($("#filteredDishes"), $("#inputDish"), model);
	var fourthView = new FourthView($("#dishOverview"), $("#dishIngredients"), $("#dishPreparation"), $("#totalPrice"), model);
	var fifthView = new FifthView($("#fifthViewHeader"), $("#fifthViewDishes"), model);
	var sixthView = new SixthView($("#sixthViewHeader"), $("#sixthViewDishes"), model);

	model.setNumberOfGuests(6);
	console.log(model.getNumberOfGuests());

	model.addDishToMenu(1);
	console.log(model.getFullMenu());

	model.setPendingDishId(2);

	model.addDishToMenu(2);

	model.addDishToMenu(100);
	
});