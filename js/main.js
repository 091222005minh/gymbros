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
// CONTACT FORM VALIDATE
$("#contactForm").submit(function (e) {
  e.preventDefault();

  let name = $("#name").val().trim();
  let email = $("#email").val().trim();
  let phone = $("#phone").val().trim();
  let message = $("#message").val().trim();

  if (name === "" || email === "" || phone === "" || message === "") {
    $(".form-message").css("color", "red").text("Vui lòng nhập đầy đủ thông tin.");
    return;
  }

  if (!email.includes("@")) {
    $(".form-message").css("color", "red").text("Email không hợp lệ.");
    return;
  }

  $(".form-message")
    .css("color", "lightgreen")
    .text("Gửi liên hệ thành công! Chúng tôi sẽ phản hồi sớm.");

  // reset form
  $("#contactForm")[0].reset();
});
