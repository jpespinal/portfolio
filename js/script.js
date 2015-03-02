// Create Variables pointing to all Nav links and the About section link.
var nav = $("#top nav ul").children();
var aboutLink = nav[0];

// Create Variables poingting to all Sections and the About section.
var sections = $("#main").children();
var aboutSection = sections[0];

// Hide all major sections by adding CSS class.
sections.addClass("hide-section");

// function activeNav() {
//   if(this.click().hasClass("active"))
// };

// Upon document being ready, make user "arrive" at the About section by removing the hide class on it.
// Add active class to About section link.
$(document).ready(function() {
  $(aboutLink).addClass("active");
  $(aboutSection).removeClass("hide-section");
});