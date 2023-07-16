// Swiper JS Code for hero banner
let swiper1 = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



// Swiper JS Code for slider
let swiper2 = new Swiper(".slide-container", {
  slidesPerView: 5,
  spaceBetween: 30,
  sliderPerGroup: 5,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    250: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 3,
    },
    750: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 5,
    },
  },
});