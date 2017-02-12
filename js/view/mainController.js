var MainController = function(mainBody, firstView, secondView, thirdView, fourthView, fifthView, model) {
	var self = this;

	this.setFilteredDishHandlers = function() {
 		thirdView.find("#filteredDishes").find("img").click(function() {
 		model.setPendingDishId(this.id);
 		thirdView.css("display", "none");
 		fourthView.css("display", "block");
 	})
 	}

 	firstView.find("#createNewDinnerBtn").click(function(){
 		mainBody.css("background-image","none");
 		mainBody.find("#mainScreen").css("display", "block");
 		mainBody.find("#selectDishColumn").css("display", "block");

 		firstView.css("display", "none");
 		secondView.css("display", "block");
 		thirdView.css("display", "block");
 		self.setFilteredDishHandlers();
 	});

 	secondView.find("#confirmDinnerBtn").click(function() {
 		secondView.css("display", "none");
 		thirdView.css("display", "none");
 		fourthView.css("display", "none");	
 		fifthView.css("display", "block");

 	});

 	thirdView.find("#filteredDishes").bind("contentchanged", function() {
 		self.setFilteredDishHandlers();
 	})


}