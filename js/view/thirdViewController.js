var ThirdViewController = function (model, thirdView) {
	thirdView.find("#searchBtn").click(function() {
		model.notifyObservers();
	});

	
}