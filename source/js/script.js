var open = document.querySelector(".main-nav__mobile-menu");
var modalPurchase = document.querySelector(".mobile__container");
var modalOverlay = document.querySelector(".mobile");
var close = document.querySelector(".mobile__close");

if (open) {
  open.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalOverlay.classList.remove("visually-hidden");
  });
}

if (close) {
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalOverlay.classList.add("visually-hidden");
  });
}

modalOverlay.addEventListener(
  "click",
  function (evt) {
    if (evt.currentTarget !== evt.target) {
      return;
    }

    modalOverlay.classList.add("visually-hidden");
  },
  false
);
