// Create Variables pointing to all Nav links and the About
// section link.
var siteNav = $(".site__header__navlink");
var aboutLink = siteNav[0];

// Create Variables poingting to all Sections and the About
// section.
var siteSections = $(".site__main").children();
var aboutSection = siteSections[0];

// // Hide all major sections by adding CSS class.
siteSections.hide();

// Upon document being ready, make user "arrive" at the About 
// section by removing the hide class on it.

// Add active class to About section link.
$(function() {
  $(aboutLink).addClass("active");
  $(aboutSection).show();
});

// Give the site "multi-page" functionality
// by hiding and revealing the appropriate sections.

// Capture click on Nav anchor.
$(".site__header__navlink").click(function() {
  // Identifier of proper section.
  var hrefLink = $(this).attr("href");
  // Remove active class from all links.
  siteNav.removeClass("active");
  // Add active class to clicked link.
  $(this).addClass("active");
  // Hide all other sections.
  siteSections.hide();
  // Find proper section, reveal it.
  siteSections.filter(hrefLink).show();
});