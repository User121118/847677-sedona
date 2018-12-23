var link = document.querySelector(".booking-btn");
var popup = document.querySelector("form.booking-form");
 link.addEventListener("click", function (evt) {
evt.preventDefault();
      popup.classList.toggle("booking-show");
  });