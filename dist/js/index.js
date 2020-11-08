// select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBrand = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// set initial state of menu
let showMenu = false;
menuBtn.addEventListener("click", toggle);
function toggle() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBrand.classList.add("show");
    navItems.forEach((e) => e.classList.add("show"));
    // set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBrand.classList.remove("show");
    navItems.forEach((e) => e.classList.remove("show"));
    // set menu state
    showMenu = false;
  }
}
