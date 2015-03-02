var nav = $("#top nav ul").children();
nav.click(function() {this.addClass("active")});
var sections = $("#main").children();
sections.addClass("hide-section");
sections.click(sections.toggleClass(removeClass("hide-section")));