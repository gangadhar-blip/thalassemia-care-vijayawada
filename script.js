/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });


    /* Close menu after clicking a navigation link */

    const links = navLinks.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

        });

    });

}


/* =========================================
   SMOOTH SCROLLING
========================================= */

const navigationLinks = document.querySelectorAll('a[href^="#"]');

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================================
   FAQ
========================================= */

const faqItems = document.querySelectorAll(".faq-container details");

faqItems.forEach(function (item) {

    item.addEventListener("toggle", function () {

        if (item.open) {

            faqItems.forEach(function (otherItem) {

                if (otherItem !== item) {
                    otherItem.removeAttribute("open");
                }

            });

        }

    });

});


/* =========================================
   IMAGE FALLBACK
========================================= */

const profileImages = document.querySelectorAll("img[src='hema.jpg']");

profileImages.forEach(function (image) {

    image.addEventListener("error", function () {

        image.style.display = "none";

    });

});
