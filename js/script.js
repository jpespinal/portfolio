// Create Variables pointing to all Nav links and the About section link.
var siteNav = $("#top li").children();
var aboutLink = siteNav[0];

// Create Variables poingting to all Sections and the About section.
var siteSections = $("#main").children();
var aboutSection = siteSections[0];

// // Hide all major sections by adding CSS class.
siteSections.hide();

// Upon document being ready, make user "arrive" at the About section by removing the hide class on it.
// Add active class to About section link.
$(function() {
  $(aboutLink).addClass("active");
  $(aboutSection).show();
});

// 1. Capture click on Nav anchor.
$("#top a").click(function() {
  // 1.1 Remove active class from all links.
  siteNav.removeClass("active");
  // 1.2 Add active class to clicked link.
  $(this).addClass("active");
  // 1.3 Identify proper section.
  var hrefLink = $(this).attr("href");
  // 1.4 Hide all other sections.
  siteSections.hide();
  // 1.5 Find proper section, reveal it.
  siteSections.filter(hrefLink).show();
});