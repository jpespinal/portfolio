var nav = $("#top nav ul").children();
nav[0].onload(addClass("active"));
nav.click(function() {this.addClass("active")});
var sections = $("#main").children();
sections.addClass("hide-section");
sections.click(sections.toggleClass("hide-section"));