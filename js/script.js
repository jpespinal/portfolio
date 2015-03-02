var nav = $("#top nav ul").children();
var about = nav[0];

$(document).ready(function() {
  $(about).addClass("active");
});

// nav.click(function() {this.addClass("active")});

// var sections = $("#main").children();
// sections.addClass("hide-section");
// sections.click(sections.toggleClass("hide-section"));