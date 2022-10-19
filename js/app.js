const navToggler = document.querySelector(".nav-toggler");
const sidebar = document.querySelector(".sidebar");
const closeSidebar = document.querySelector(".close");
const sidebarLinks = document.querySelectorAll(".sidebar-links a");

navToggler.addEventListener("click", function (e) {
  sidebar.classList.toggle("show-sidebar");
  //   document.body.style.background = "rgba(0, 0, 0, .5)";
  e.stopPropagation();
});

function hideSidebar() {
  sidebar.classList.remove("show-sidebar");
  //   document.body.style.background = "#ffffff";
}

closeSidebar.addEventListener("click", hideSidebar);

window.addEventListener("click", hideSidebar);

sidebar.addEventListener("click", function (e) {
  e.stopPropagation();
});

sidebarLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    hideSidebar();
  });
});
