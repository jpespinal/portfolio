// Store Site Nav in variable.
var siteNav = document.getElementsByClassName("site__header")[0];

// Store all Nav links and the About section link in variables.
var siteLinks = document.getElementsByClassName("site__header__navlink");
var aboutLink = siteNav[0];

// Store all Site "Pages" and the About section in variables.
var sitePages = document.getElementsByClassName("page");
var aboutPage = sitePages[0];

// Create Object literal that will store Site colors.
var siteColors = {
    aboutPage: {
        backgroundColorOne: "#DF4949",
        backgroundColorTwo: "#F35D5D",
        headingColor: "#EFC94C"
    },
    skillsPage: {
        backgroundColorOne: "#45B29D",
        backgroundColorTwo: "#59C6B1",
        headingColor: "#334D5C"
    },
    projectsPage: {
        backgroundColorOne: "#EFC94C",
        backgroundColorTwo: "#FFDD60",
        headingColor: "#DF4949"
    },
    contactPage: {
        backgroundColorOne: "#334D5C",
        backgroundColorTwo: "#476170",
        headingColor: "#45B29D"
    }
};

// Upon document being ready, make user "arrive" at the About
// section by removing the hide class on it.

// Hide all major sections by adding CSS class.
for (var i = 0; i < sitePages.length; i++) {
    sitePages[i].classList.add("hide");
}

// Add active class to About section link.
window.onload = function() {
    aboutLink.classList.add("active");
    aboutPage.classList.remove("hide");
};

// Give the site "multi-page" functionality
// by hiding and revealing the appropriate sections.
for (i = 0; i < siteLinks.length; i++) {

    // Capture click on Nav anchor.
    siteLinks[i].addEventListener("click", function() {

        // Identify proper section.
        // Get the href of the link that was clicked on.
        var hrefLink = this.getAttribute("href");

        // Remove the pound symbol.
        hrefLink = hrefLink.slice(1, hrefLink.length);

        // Remove active class from all links.
        for (var j = 0; j < siteLinks.length; j++) {
            siteLinks[j].classList.remove("active");
        }

        // Add active class to clicked link.
        this.classList.add("active");

        // Hide all other sections.
        for (var k = 0; k < sitePages.length; k++) {
            sitePages[k].classList.add("hide");
        }

        // Find proper section by using href, and reveal section by removing the css hide class.
        document.getElementById(hrefLink).classList.remove("hide");
    });
}

/*
siteNav.style.background("backgroundColorTwo");
document.getElementById(hrefLink).style.background("backgroundColorOne");
hrefLink.getElementsByClassName("title").style.color("headingColor");
hrefLink.getElementsByClassName("subtitle").style.color("headingColor");
*/