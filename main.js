

$(window).on("load", function () {
  $(".loader").delay(3000).fadeOut("slow");
});

$(".next").on("click", function () {
  $(".step-1").css("transform", "translateX(-35em)");
  $(".step-2").css("transform", "translateX(0em)");
});

$(".back-small-1").on("click", function () {
  $(".step-1").css("transform", "translateX(0em)");
  $(".step-2").css("transform", "translateX(35em)");
});

$(".next-small-1").on("click", function () {
  $(".step-2").css("transform", "translateX(-35em)");
  $(".step-3").css("transform", "translateX(0em)");
});

$(".back-small-2").on("click", function () {
  $(".step-2").css("transform", "translateX(0em)");
  $(".step-3").css("transform", "translateX(35em)");
});

$(".next-small-2").on("click", function () {
  $(".step-3").css("transform", "translateX(-35em)");
  $(".step-4").css("transform", "translateX(0em)");
});

$(".back-small-3").on("click", function () {
  $(".step-3").css("transform", "translateX(0em)");
  $(".step-4").css("transform", "translateX(35em)");
});

$(".next-small-3").on("click", function () {
  $(".step-4").css("transform", "translateX(-35em)");
  $(".step-5").css("transform", "translateX(0em)");
});

$(".back-small-4").on("click", function () {
  $(".step-4").css("transform", "translateX(0em)");
  $(".step-5").css("transform", "translateX(35em)");
});

$(".next-small-4").on("click", function () {
  $(".step-5").css("transform", "translateX(-35em)");
  $(".step-6").css("transform", "translateX(0em)");
});


$("input").on("blur", function () {
  let summary = "";
  $("input").each(function () {
    summary += $(this).val() + " ";
  });
  $(".field-overflow").text(summary);
});


$("#container").scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".up-arrow-container").css({
      "opacity": "1", 
      "pointer-events": "all"
    });
  } else {
    $(".up-arrow-container").css({
      "opacity": "0", 
      "pointer-events": "none"
    });
  }
});