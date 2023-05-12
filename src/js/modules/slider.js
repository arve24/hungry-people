import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css/bundle";

const menu = new Swiper(".menu-content", {
  modules: [Navigation],

  slidesPerView: 3,
  spaceBetween: 85,

  breakpoints: {
    992: {
      slidesPerView: 3
    },
    610: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    220: {
      slidesPerView: 1
    }
  },

  navigation: {
    nextEl: ".menu-content__button-next",
    prevEl: ".menu-content__button-prev"
  }
});
