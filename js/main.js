$(function () {

  // ===== SLIDESHOW =====
  let slides = $(".slide");
  let index = 0;

  setInterval(function () {
    slides.removeClass("active");
    index = (index + 1) % slides.length;
    slides.eq(index).addClass("active");
  }, 3000);

  // ===== MỞ LIGHTBOX =====
  $(".gallery-img").click(function () {
    let src = $(this).attr("src");
    $(".lightbox-img").attr("src", src);
    $(".lightbox").fadeIn();
  });

  // ===== ĐÓNG KHI CLICK NỀN =====
  $(".lightbox").click(function () {
    $(this).fadeOut();
  });

  // ===== KHÔNG ĐÓNG KHI CLICK ẢNH =====
  $(".lightbox-img").click(function (e) {
    e.stopPropagation();
  });

  // ===== ĐÓNG KHI CLICK ❌ =====
  $(".lightbox .close").click(function (e) {
    e.stopPropagation();
    $(".lightbox").fadeOut();
  });

});
let quoteIndex = 0;
let quotes = $(".quote-slide");
let dots = $(".quote-dots .dot");

function showQuote(index) {
  quotes.removeClass("active");
  dots.removeClass("active");

  quotes.eq(index).addClass("active");
  dots.eq(index).addClass("active");
}

setInterval(function () {
  quoteIndex = (quoteIndex + 1) % quotes.length;
  showQuote(quoteIndex);
}, 5000);

// Click dot
dots.click(function () {
  quoteIndex = $(this).index();
  showQuote(quoteIndex);
});
