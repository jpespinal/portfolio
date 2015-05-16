/**
 * Created by juanpespinal on 5/11/15.
 */

// Create Variables pointing to all Nav links and the About
// section link.
var siteNav = document.getElementsByClassName("n-link");
var aboutLink = siteNav[0];
console.log(siteNav);
console.log(aboutLink);

// Create Variables pointing to all Sections and the About
// section.
var siteSections = document.getElementsByTagName("section");
var aboutSection = siteSections[0];
console.log(siteSections);
console.log(aboutSection);

// // Hide all major sections by adding CSS class.
for (var i = 0; i < siteSections.length; i++) {
    siteSections[i].classList.add("hide");

}

// Upon document being ready, make user "arrive" at the About
// section by removing the hide class on it.

// Add active class to About section link.
window.onload = function() {
    aboutLink.classList.add("active");
    aboutSection.classList.remove("hide");

    // Give the site "multi-page" functionality
// by hiding and revealing the appropriate sections.
    for (i = 0; i < siteNav.length; i++) {

        // Capture click on Nav anchor.
        siteNav[i].addEventListener("click", function() {

            // Identify proper section.
            var hrefLink = this.getAttribute("href");
            hrefLink = hrefLink.slice(1, hrefLink.length);
            console.log(hrefLink);
            debugger;

            // Remove active class from all links.
            for (var j = 0; j < siteNav.length; j++) {
                siteNav[i].classList.remove("active");
            }

            // Add active class to clicked link.
            this.classList.add("active");

            // Hide all other sections.
            for (var k = 0; k < siteSections.length; k++) {
                this.classList.add("hide");
            }

            // Find proper section, reveal it.
            document.getElementById(hrefLink).classList.remove("hide");
        });
    }
}