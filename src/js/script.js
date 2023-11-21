(function () {
  const toggle_menu = document.getElementById("toggle_menu"),
    menu = document.getElementById("menu");
  toggle_menu.addEventListener("click", function () {
    toggle_menu.classList.toggle("active");
    menu.classList.toggle("active");
  });
  menu.addEventListener("click", function (evt) {
    if (!document.querySelector(".links").contains(evt.target)) {
      toggle_menu.classList.remove("active");
      menu.classList.remove("active");
    }
  });
  window.addEventListener("scroll", function () {
    toggle_menu.classList.remove("active");
    menu.classList.remove("active");
  });
})();
