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

/*==================== ACCORDION SKILLS ====================*/
const skillContents = $$(".skills__content");

skillContents.forEach((tab) => {
  tab.addEventListener("click", () => {
    tab.classList.toggle("active");
  });
});

/*==================== QUALIFICATION TABS ====================*/
const qualifiContents = $$(".qualification__content");
const qualifiBtns = $$(".qualification__button");

qualifiBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    let qualifiContent = qualifiContents[index];

    if (!btn.classList.contains("active")) {
      $(".qualification__button.active").classList.remove("active");
      $(".qualification__content.active").classList.remove("active");
      btn.classList.add("active");
      qualifiContent.classList.add("active");
    }
  });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = $$(".services__modal"),
  modalBtns = $$(".services__button"),
  modalContents = $$(".services__modal-content"),
  modalCloses = $$(".services__modal-close");

modalBtns.forEach((modalBtn, index) => {
  const modalView = modalViews[index];
  const modalClose = modalCloses[index];
  const modalContent = modalContents[index];

  modalBtn.addEventListener("click", () => {
    modalView.classList.add("active");
  });

  modalClose.addEventListener("click", () => {
    modalView.classList.remove("active");
  });

  modalView.addEventListener("click", () => {
    modalView.classList.remove("active");
  });

  modalContent.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});

// /*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
/*==================== TESTIMONIAL ====================*/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

/*==================== CHANGE BACKGROUND HEADER ====================*/

/*==================== SHOW SCROLL UP ====================*/

/*==================== DARK LIGHT THEME ====================*/
