
  var swiper = new Swiper(".terimonial-card-cell", {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade:' true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
      0:{
        slidesPerView: 1,
      },
      520:{
        slidesPerView: 1,
      },
    }
  });