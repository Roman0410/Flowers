const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute("href");
    document.querySelector("" + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
$(document).ready(function () {
  $(".header-burger").click(function (event) {
    $(".header-nav").toggleClass("active");
    $(".header-burger").toggleClass("active");
  });
  $(".guestion-item").click(function (event) {
    // $(".answer").toggleClass("open");
    $(this).closest("li").find(".answer").toggleClass("open");
    $(this).closest("li").find("img").toggleClass("open");
  });
  $(".description-top").click(function (event) {
    $(".description-body").toggleClass("open");
    $(".description-top").find("img").toggleClass("open");
  });
});

// const filterSlide = document.querySelectorAll(".swiper-slide");
// console.log(filterSlide);
// document.querySelector(".service-filter-list").addEventListener("click", (event) => {
//   if (event.target.tagName !== "LI") return false;
//   let filterClass = event.target.dataset["f"];
//   filterSlide.forEach((elem) => {
//     elem.style.display = "flex";
//     if (!elem.classList.contains(filterClass) && filterClass !== "All") {
//       elem.style.display = "none";
//     }
//   });
// });
