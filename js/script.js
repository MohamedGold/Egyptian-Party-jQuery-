"use strict";

// !loading ===>

$("document").ready(() => {
  $(".loading").fadeOut(2000, () => {
    $("body").css("overflow", "auto");
  });
});

//  *==============================>

// ! ===> side-nav <===

$(".side-nav i").click(() => {
  let left = $(".side-nav-inner").innerWidth();
  if ($(".side-nav").css("left") === "0px") {
    $(".side-nav").css("left", -left);
  } else {
    $(".side-nav").css("left", 0);
  }
});

$(".side-nav").css("left", -$(".side-nav-inner").innerWidth());

$(document).click((event) => {
  if (!$(event.target).closest(".side-nav, .side-nav i").length) {
    let left = $(".side-nav-inner").innerWidth();
    $(".side-nav").css("left", -left);
  }
});

$("#theme").click(() => {
  let mode = $("body").attr("data-bs-theme");
  if (mode === "dark") {
    $("body").attr("data-bs-theme", "light");
    $("#theme span").text("theme: Light");
  } else {
    $("body").attr("data-bs-theme", "dark");
    $("#theme span").text("theme: Dark");
  }
});

// * <==============================>

// ! ===> scroll-to-top <===

$(document).ready(() => {

  const checkScrollPosition = () => {
    let scrollPosition = $(window).scrollTop();
    let detailsOffsetTop = $("#details").offset().top;

    if (scrollPosition > detailsOffsetTop) {
      $(".icon-top").show(300);
    } else {
      $(".icon-top").hide(300);
    }
  };

  checkScrollPosition();

  $(window).scroll(checkScrollPosition);

  $(".icon-top").click(() => {
    $("html, body").animate({ scrollTop: 0 }, 200);
  });
});

// * <==============================>

// ! ===> details <===

$(".singer").click((e) => {
  let nextElement = $(e.currentTarget).next();
  $(e.currentTarget).next().slideToggle(300);
  $(".singer").next().not(nextElement).slideUp(300);
  $(".singer i").text(300);
});

let firstElement = $(".singer").nextAll().eq(0);
$(".singer").nextAll().not(firstElement).slideUp(0);

// * <==============================>

// ! ===> duration <===

let countDownDate = new Date("Dec 31 2024 23:59:59").getTime();
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDeff = countDownDate - dateNow;
  let days = Math.floor(dateDeff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDeff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDeff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDeff % (1000 * 60)) / 1000);

  $("#duration .days p").text(days);
  $("#duration .hours p").text(hours);
  $("#duration .minutes p").text(minutes);
  $("#duration .seconds p").text(seconds);
}, 1000);

// * <==============================>

// ! ===> contact <===

let maxLength = 100;
$("textarea").keyup((e) => {
  let length = $(e.currentTarget).val().length;
  let amountLeft = maxLength - length;

  if (length > maxLength) {
    $(e.currentTarget).val($(e.currentTarget).val().substring(0, maxLength));
    amountLeft = 0;
  }

  let message = amountLeft === 0 ? "You have reached the 100-character limit." : `${amountLeft} `;
  $("#contact form p span").text(message);
});

// * <==============================>
