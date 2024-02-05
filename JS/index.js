let navLinks = document.querySelectorAll('ul li a');
let nav = document.getElementById("navigation");

function scrollToSection(event) {
  event.preventDefault();
  let sectionId = this.getAttribute('href').substring(1);
  let section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      });;
  }
}

navLinks.forEach(function(link) {
  link.addEventListener('click', scrollToSection);
});

let state = 0;

window.addEventListener('scroll', function() {
  let home_menu = document.getElementById("home_menu");
  // console.log(home_menu)
  let scrollHeight = home_menu.getBoundingClientRect()
  // console.log(scrollHeight.y)
  if (scrollHeight.y < 48 && state == 0) {
    state = 1;
    nav.classList.toggle('navigation_active');
  }
  else if (scrollHeight.y >= 48 && state == 1) {
    state = 0;
    nav.classList.toggle('navigation_active');
  }
  let wh = document.documentElement.clientHeight
  let navActive = document.querySelectorAll(".navigation_active")[0];
  let opacity = 0;
  // console.log(wh)
  // console.log(scrollHeight.y);
  if (scrollHeight.y < 48 && scrollHeight.y > -22) {
    // console.log(scrollHeight.y);
    opacity = (48 - scrollHeight.y)/70;
    // console.log(`opacity ${opacity}`);
  }
  else if (scrollHeight.y < -22) {
    // console.log(scrollHeight.y);
    opacity = 1;
    // console.log(`opacity ${opacity}`);
  }
  navActive.style.opacity = opacity;
})

document.addEventListener("DOMContentLoaded", function () {
  // Когда документ загружен
  var logo = document.querySelector(".home_content");
  logo.classList.add("loaded"); // Добавьте класс loaded для активации анимации
});





