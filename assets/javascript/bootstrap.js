$(".button-one").on("click", function() {
  $("html, body").animate({
    scrollTop: $("#about-section").offset().top
  }, 1000);
})

$(".button-two").on("click", function() {
  $("html, body").animate({
    scrollTop: $("#project-section").offset().top
  }, 1000);
})

$(".button-three").on("click", function() {
  $("html, body").animate({
    scrollTop: $("#contact-section").offset().top
  }, 1000);
})

