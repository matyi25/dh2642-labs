//ExampleView Object constructor
var SixthView = function (headerContainer, dishesContainer, model) {
	
	this.numberOfGuests = headerContainer.find("#numberOfGuests");
	this.numberOfGuests.html(model.getNumberOfGuests());

	var fullMenu = model.getFullMenu();
	for (var i = 0; i < fullMenu.length; i++) {
		var dishImageSection = "<div class=\"row\">\
          <div class=\"col-md-6\">\
            <div class=\"col-md-6\">\
              <img src=\"images/"+fullMenu[i].image+"\"\
              class=\"img-responsive\">\
            </div>\
            <div class=\"col-md-6\">\
              <div class=\"row\">\
                <h3>"+fullMenu[i].name+"</h3>\
              </div>\
              <p>Some other stuff</p>\
            </div>\
          </div>\
          <div class=\"col-md-6\">\
            <div class=\"row\">\
              <h3>Preparation</h3>\
            </div>\
            <p>"+fullMenu[i].description+"Some bullshit</p>\
          </div>\
        </div>\
        <div class=\"row\"><p></p></div>"
        
        dishesContainer.append(dishImageSection);
	}
}
 