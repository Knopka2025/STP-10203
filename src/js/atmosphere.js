import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

let mobileSwiper = null;

function initMobileSwiper() {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 375 && !mobileSwiper) {
    mobileSwiper = new Swiper('.swiper-events', {
      modules: [Navigation, Pagination],
      slidesPerView: 1.2,       //? 1 слайд + трохи наступного
      spaceBetween: 12,         //? відстань між картинками
      speed: 350,
      watchOverflow: true,
      navigation: {
        nextEl: '.swiper-events-button-next',
        prevEl: '.swiper-events-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletClass: 'custom-bullet',
        bulletActiveClass: 'custom-bullet-active',
      },
    });
  } else if (screenWidth > 375 && mobileSwiper) {
    mobileSwiper.destroy(true, true);
    mobileSwiper = null;
  }
}

window.addEventListener('load', initMobileSwiper);
window.addEventListener('resize', initMobileSwiper);