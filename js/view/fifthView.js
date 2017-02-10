var FifthView = function (headerContainer, dishesContainer, model) {
  

  this.updateNumOfGuests = function() {
    this.numberOfGuests = headerContainer.find("#numberOfGuests");
    this.numberOfGuests.html(model.getNumberOfGuests());

  }
 this.updateMenuView = function() {
    dishesContainer.empty();

    var fullMenu = model.getFullMenu();
    for (var i = 0; i < fullMenu.length; i++) {
      var dishPrice = 0;
      for (var j = 0; j < fullMenu[i].ingredients.length; j++) {
        dishPrice = dishPrice + fullMenu[i].ingredients[j].price;
      }

      var dishImageSection = "<div class=\"col-md-2\" align=\"center\">\
              <img src=\"images/" + fullMenu[i].image + "\"\
              class=\"img-responsive\">\
              <p id=\"dishNameRow\" style=\"text-align: center\"><b>" + fullMenu[i].name + "</b></p>\
              <div class=\"row\">\
                <div class=\"col-md-11\" style=\"text-align: right\">"+ dishPrice * model.getNumberOfGuests() + " SEK</div>\
                <div class=\"col-md-1\"></div>\
              </div>\
            </div>"
      dishesContainer.append(dishImageSection);
    }

    if (fullMenu.length != 0) {
      var dishPriceSection = "<div class=\"col-md-3\">\
              <div class=\"row\">\
                <div class=\"col-md-2\"></div>\
                <div class=\"col-md-4\"><b>Total cost:</b></div>\
                <div class=\"col-md-4\" style=\"text-align: right\">" + model.getTotalMenuPrice() + " SEK</div>\
              </div>\
            </div>"
      dishesContainer.append(dishPriceSection);
    }
  }

  this.update = function(obj) {
    if (Number.isInteger(obj)) {
      this.updateNumOfGuests();
      this.updateMenuView()
    } else {
      this.updateMenuView();
    }
  }

  model.addObserver(this);

}