// Create Variables pointing to all Nav links and the About section link.
var siteNav = $("#top li").children();
var aboutLink = siteNav[0];

// Create Variables poingting to all Sections and the About section.
var siteSections = $("#main").children();
var aboutSection = siteSections[0];

// // Hide all major sections by adding CSS class.
siteSections.addClass("hide-section");

// Upon document being ready, make user "arrive" at the About section by removing the hide class on it.
// Add active class to About section link.
$(function() {
  $(aboutLink).addClass("active");
  $(aboutSection).removeClass("hide-section");
});

// 1. Capture click on Nav anchor.
  // 1.1 Add active class to clicked link. Reveal linked Section.
  // 1.2 Remove active class from previously clicked link. Hide all other Sections.