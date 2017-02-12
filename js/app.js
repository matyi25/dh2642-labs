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

	var mainController = new MainController($("#indexBody"), $("#firstView"),$("#secondView"), $("#thirdView"), $("#fourthView"), $("#fifthView"), $("#sixthView"), model);
	var firstViewController = new FirstViewController(model, $("#firstView"));
	var secondViewController = new SecondViewController(model, $("#secondView"));
	var thirdViewController = new ThirdViewController(model, $("#thirdView"));
	var fourthViewController = new FourthViewController(model, $("#fourthView"));
	var fifthViewController = new FifthViewController(model, $("#fifthView"));
	var sixthViewController = new SixthViewController(model, $("#sixthView"));
});