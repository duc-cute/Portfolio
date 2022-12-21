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
let swiperPortifolio = new Swiper(".portfolio__container", {
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
let swiperTestimonial = new Swiper(".testimonial__container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    568: { slidesPerView: 2 },
  },
});
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = $$("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeght = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    let sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeght) {
      $(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link");
    } else {
      $(".nav__menu a[href*=" + sectionId + "]").classList.remove(
        "active-link"
      );
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
const scrollHeader = () => {
  const nav = $("#header");

  if (this.scrollY >= 80) {
    nav.classList.add("scroll-header");
  } else {
    nav.classList.remove("scroll-header");
  }
};
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
const scrollUp = () => {
  const scrollUp = $("#scroll-up");

  if (this.scrollY >= 560) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
};
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = $("#theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

//Previously selected topic (Local storage)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () => {
  document.body.classList.contains(darkTheme) ? "dark" : "light";
};

const getCurrentIcon = () => {
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";
};

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  //Add or remove
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  //Save localStorage
  localStorage.setItem("selected-theme", getCurrentTheme);
  localStorage.setItem("selected-icon", getCurrentIcon);
});
