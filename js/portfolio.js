$(document).ready(function(){
  $('.sidenav').sidenav();
  $('.tabs').tabs() // How to make work!!
  $('.parallax').parallax();
});

const navbar = document.querySelector('nav');
const navlink = document.getElementsByClassName('navlink');
const burgerIcon = document.querySelector('.sidenav-trigger');
const toObserve = document.querySelector('.parallax-container');
const options = {
  rootMargin: "-100px 0px 0px 0px"
};
const observer = new IntersectionObserver(function(entries, observer) {
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
}, options);

observer.observe(toObserve);

$(window).scroll(function(){
  $('.banner-text').css('opacity', 1 - $(window).scrollTop() / 200);
});

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