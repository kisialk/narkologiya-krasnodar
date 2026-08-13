(function () {
  var burger = document.querySelector("[data-burger]");
  var nav = document.querySelector("[data-mobile-nav]");
  if (burger && nav) {
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  document.querySelectorAll("[data-copy-phone]").forEach(function (el) {
    el.addEventListener("click", function () {
      var phone = el.getAttribute("data-copy-phone");
      if (navigator.clipboard && phone) {
        navigator.clipboard.writeText(phone).catch(function () {});
      }
    });
  });

  /* route-step highlight via CSS :focus-within — no JS layout thrash */

  document.querySelectorAll("[data-city-picker]").forEach(function (picker) {
    document.addEventListener("click", function (e) {
      if (!picker.open) return;
      if (!picker.contains(e.target)) picker.open = false;
    });
    picker.addEventListener("keydown", function (e) {
      if (e.key === "Escape") picker.open = false;
    });
  });
})();
