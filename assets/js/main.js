const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = $(".nav__menu");
const navToggle = $(".nav__toggle");
const navClose = $(".nav__close");
const navItem = $$(".nav__item");

const hideMenu = () => {
  navMenu.classList.remove("show-menu");
};

const showMenu = () => {
  navMenu.classList.add("show-menu");
};

if (navToggle) {
  navToggle.addEventListener("click", showMenu);
}

if (navClose) {
  navClose.addEventListener("click", hideMenu);
}

navItem.forEach((element) => {
  element.addEventListener("click", hideMenu);
});
/*==================== REMOVE MENU MOBILE ====================*/

/*==================== ACCORDION SKILLS ====================*/

/*==================== QUALIFICATION TABS ====================*/

/*==================== SERVICES MODAL ====================*/

/*==================== PORTFOLIO SWIPER  ====================*/

/*==================== TESTIMONIAL ====================*/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

/*==================== CHANGE BACKGROUND HEADER ====================*/

/*==================== SHOW SCROLL UP ====================*/

/*==================== DARK LIGHT THEME ====================*/
