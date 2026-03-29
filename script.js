// script.js

// Smooth scrolling navigation
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll animations
const animatedElements = document.querySelectorAll('.animate');

const animateOnScroll = () => {
  const scrollPosition = window.scrollY + window.innerHeight;

  animatedElements.forEach(element => {
    if (scrollPosition > element.offsetTop + 100) {
      element.classList.add('fade-in');
    }
  });
};

window.addEventListener('scroll', animateOnScroll);

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
