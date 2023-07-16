const header = document.querySelector("[data-header]");
const navbar = document.querySelector(".navbar");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

// sidebar open close js code
const navLinks = document.querySelector(".nav-links");
const menuOpenBtn = document.querySelector(".navbar .bx-menu");
const menuCloseBtn = document.querySelector(".navbar .bx-x");

menuOpenBtn.onclick = function () {
  navLinks.style.right = "0";
  menuCloseBtn.style.display = 'block'
  menuOpenBtn.style.display = 'none'
};

menuCloseBtn.onclick = function () {
  navLinks.style.right = "-100%";
  menuOpenBtn.style.display = 'block'
  menuCloseBtn.style.display = 'none'
};


// sidebar submenu open close js code
const htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function () {
  navLinks.classList.toggle("show1");
};

const moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function () {
  navLinks.classList.toggle("show2");
};

const jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function () {
  navLinks.classList.toggle("show3");
};
