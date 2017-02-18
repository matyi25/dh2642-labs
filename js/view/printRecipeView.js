var PrintRecipeView = function (container, model) {
  var printRecipeView = container;

  this.getView = function() {
    return printRecipeView;
  }
	
  this.updateNumOfGuests = function() {
      printRecipeView.find("#numberOfGuests").html(model.getNumberOfGuests());
  }


  this.updateMenuView = function(obj) {
    printRecipeView.find("#printRecipeViewDishes").empty();

  	var fullMenu = model.getFullMenu();

  	for (var i = 0; i < fullMenu.length; i++) {
  		var dishImageSection = "<div class=\"row\">\
            <div class=\"col-md-6\">\
              <div class=\"col-md-6\">\
                <img src=\""+fullMenu[i].image+"\"\
                class=\"img-responsive\">\
              </div>\
              <div class=\"col-md-6\">\
                <div class=\"row\">\
                  <h3>"+fullMenu[i].title+"</h3>\
                </div>\
                <p></p>\
              </div>\
            </div>\
            <div class=\"col-md-6\">\
              <div class=\"row\">\
                <h3>Preparation</h3>\
              </div>\
              <p>"+fullMenu[i].instructions+"Some bullshit</p>\
            </div>\
          </div>\
          <div class=\"row\"><p></p></div>"
          
      printRecipeView.find("#printRecipeViewDishes").append(dishImageSection);
    }
	}

  this.update = function(obj) {
      this.updateNumOfGuests();
      this.updateMenuView();
  }

  model.addObserver(this);
}
 