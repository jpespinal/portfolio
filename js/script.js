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
$("#top a").click(function() {
  siteNav.removeClass("active");
  $(this).addClass("active");
  // var notActive;
  // for(var i = 0; i < siteNav.length; i += 1) {
  //   if(siteNav[i].hasClass() === "active") {
  //     notActive = siteNav[i];
  //   }
  // }
  // notActive.removeClass("active");
  // $("siteNav").click(function() {
  //   this.addClass("active");
  // })
});
  // 1.1 Add active class to clicked link. Reveal linked Section.
  // 1.2 Remove active class from previously clicked link. Hide all other Sections.