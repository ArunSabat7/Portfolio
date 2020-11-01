const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const brand = document.querySelector(".branding");
const items = document.querySelector(".items");
const list = document.querySelectorAll(".items-list");

// set initial state of menu
let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);
function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    brand.classList.add("show");
    items.classList.add("show");
    list.forEach((ele) => ele.classList.add("show"));
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    brand.classList.remove("show");
    items.classList.remove("show");
    list.forEach((ele) => ele.classList.remove("show"));
  }
}
