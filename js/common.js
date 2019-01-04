"use strict";
var link = document.querySelector(".booking-btn");
var popup = document.querySelector("form.booking-form");
popup.classList.remove("booking-form-on");
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("booking-show");
});