const navToggler = document.querySelector(".nav-toggler");
const sideBar = document.querySelector(".sidebar");
const closeSidebar = document.querySelector(".close");

navToggler.addEventListener("click", function () {
  sideBar.classList.toggle("show-sidebar");
  document.body.style.background = "rgba(0, 0, 0, .4)";
});

closeSidebar.addEventListener("click", function () {
  sideBar.classList.remove("show-sidebar");
  document.body.style.background = "yellow";
});
