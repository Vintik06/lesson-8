let hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", showHamburger);

function showHamburger () {
  let mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("mobile-menu-animation");
}


let paragraph = document.getElementById("p1").classList.toggle("paragraph-color");
