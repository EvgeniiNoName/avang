let navLinks = document.querySelectorAll('nav ul li a');

function scrollToSection(event) {
  event.preventDefault();
  let sectionId = this.getAttribute('href').substring(1);
  let section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
      });;
  }
}

navLinks.forEach(function(link) {
  link.addEventListener('click', scrollToSection);
});
