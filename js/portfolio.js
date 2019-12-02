$(document).ready(function(){
  $('.sidenav').sidenav();
  $('.tabs').tabs() // How to make work!!
  $('.parallax').parallax();
});

// Navbar changes when parallax container goes off screen
const navbar = document.querySelector('nav');
const navlink = document.getElementsByClassName('navlink');
const burgerIcon = document.querySelector('.sidenav-trigger');
const parallaxContainer = document.querySelector('.parallax-container');
const aboutOptions = {
  rootMargin: "-100px 0px 0px 0px"
};
const navObserver = new IntersectionObserver(function(entries, navObserver) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      navbar.classList.add("nav-scrolled");
      [...navlink].forEach(link => {
        link.classList.add("navlink-scrolled");
      });
      burgerIcon.classList.add("burger-scrolled");
    } else {
      navbar.classList.remove("nav-scrolled");
      [...navlink].forEach(link => {
        link.classList.remove("navlink-scrolled");
      });
      burgerIcon.classList.remove("burger-scrolled");
    }
  });
}, aboutOptions);

navObserver.observe(parallaxContainer);

// Fade banner text on scroll
$(window).scroll(function(){
  $('.banner-text').css('opacity', 1 - $(window).scrollTop() / 200);
});

// Animate "Projects" header when projects container goes on screen
const projectsHeader = document.querySelector('.projects-header');
const projectsContainer = document.querySelector('.projects-container');
const projectsHeaderOptions = {
  rootMargin: "500px 0px 0px 0px"
};
const projectsHeaderObserver = new IntersectionObserver(function(entries, projectsHeaderObserver) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      projectsHeader.classList.add("slideInRight");
    } else {
      projectsHeader.classList.remove("slideInRight");
    }
  });
}, projectsHeaderOptions);

projectsHeaderObserver.observe(projectsContainer);


// Form replacement
$('form').on('submit', () => {
  $('contact-container').html(`
    <h6 class="submit-success">Thanks for reaching out! I'll be in contact with you shortly.</h6>
  `);
  $('.submit-success').css({
    "position": "relative",
    "top": "60px",
    "color": "white",
  })
})







// TODO 
// Tabs on nav links