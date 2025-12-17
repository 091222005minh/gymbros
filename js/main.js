$(function () {
  let slides = $(".slide");
  let index = 0;

  setInterval(function () {
    slides.removeClass("active");
    index = (index + 1) % slides.length;
    slides.eq(index).addClass("active");
  }, 3000);
});
