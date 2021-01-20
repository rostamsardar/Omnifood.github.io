'use strict';

/*==========================================
            STICKY NAVBAR
========================================== */

const navBar = document.querySelector('.nav');
window.addEventListener('scroll', function () {
    if (window.scrollY >= 357) {
        navBar.classList.add("sticky");
    } else {
        navBar.classList.remove("sticky");
    }
});

/*==========================================
            MOBILE MENU
========================================== */

const navBtn = document.querySelector('.toggle-btn');
const mobileNav = document.querySelector('.main-nav');
navBtn.addEventListener('click', function () {
    mobileNav.classList.toggle("show-nav");
})
