var FifthView = function (headerContainer, dishesContainer, model) {
  // Get all the relevant elements of the view (ones that show data
    // and/or ones that responed to interaction)
  this.numberOfGuests = headerContainer.find("#numberOfGuests");
  this.numberOfGuests.html(model.getNumberOfGuests());

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

  var dishPriceSection = "<div class=\"col-md-3\">\
            <div class=\"row\">\
              <div class=\"col-md-2\"></div>\
              <div class=\"col-md-4\"><b>Total cost:</b></div>\
              <div class=\"col-md-4\" style=\"text-align: right\">" + model.getTotalMenuPrice() + " SEK</div>\
            </div>\
          </div>"
    dishesContainer.append(dishPriceSection);

}