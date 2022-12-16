$(function () {
  "use strict";

  const eyeIcon = $(".eye-icon");
  if (eyeIcon.length !== 0) {
    eyeIcon.on("click", function (e) {
      e.preventDefault();

      $(this).toggleClass("show");

      if ($(this).hasClass("show")) {
        $(this).next("input").attr("type", "text");
      } else {
        $(this).next("input").attr("type", "password");
      }
    });
  }
});
