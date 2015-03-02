var nav = $("#top nav ul").children();
var aboutLink = nav[0];

var sections = $("#main").children();
var aboutSection = sections[0];
sections.addClass("hide-section");

$(document).ready(function() {
  $(aboutLink).addClass("active");
  $(aboutSection).removeClass("hide-section");
});