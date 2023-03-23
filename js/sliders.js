if ($(".home-works .swiper").length) {
  const swiper = new Swiper(".home-works .swiper", {
    slidesPerView: 1,
    watchOverflow: true,
    loop: false,
    grid: {
      rows: 3,
    },
    spaceBetween: 16,
    navigation: {
      nextEl: $(".home-works .swiper").closest(".swiper-container").find(".button-next")[0],
      prevEl: $(".home-works .swiper").closest(".swiper-container").find(".button-prev")[0],
    },
    breakpoints: {
      744: {
        loop: true,
        grid: {
          rows: 1,
        },
        slidesPerView: 3,
      },
    },
  });
}
if ($(".reviews .swiper").length) {
  const swiper = new Swiper(".reviews .swiper", {
    slidesPerView: 1,
    watchOverflow: true,
    loop: false,
    grid: {
      rows: 3,
    },
    spaceBetween: 16,
    navigation: {
      nextEl: $(".reviews .swiper").closest(".swiper-container").find(".button-next")[0],
      prevEl: $(".reviews .swiper").closest(".swiper-container").find(".button-prev")[0],
    },
    breakpoints: {
      744: {
        loop: true,
        grid: {
          rows: 1,
        },
        slidesPerView: 3,
      },
    },
  });
}
if ($(".gallery-swiper .swiper").length) {
  const swiper = new Swiper(".gallery-swiper .swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 16,
    navigation: {
      nextEl: $(".gallery-swiper .swiper").closest(".swiper-container").find(".button-next")[0],
      prevEl: $(".gallery-swiper .swiper").closest(".swiper-container").find(".button-prev")[0],
    },
    breakpoints: {
      450: {
        slidesPerView: 2,
      },
      744: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
  });
}
