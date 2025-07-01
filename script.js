document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');
  
  if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', function() {
          navMenu.classList.toggle('active');
          document.body.classList.toggle('menu-open');
      });
  }
  
  // Close mobile menu when clicking on a nav link
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
      link.addEventListener('click', function() {
          navMenu.classList.remove('active');
          document.body.classList.remove('menu-open');
      });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
              const headerHeight = document.querySelector('header').offsetHeight;
              const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
              
              window.scrollTo({
                  top: targetPosition,
                  behavior: 'smooth'
              });
          }
      });
  });
  
  // Active nav link on scroll
  const sections = document.querySelectorAll('section');
  
  function setActiveNavLink() {
      const scrollPosition = window.scrollY;
      const headerHeight = document.querySelector('header').offsetHeight;
      
      sections.forEach(section => {
          const sectionTop = section.offsetTop - headerHeight - 100;
          const sectionBottom = sectionTop + section.offsetHeight;
          const sectionId = section.getAttribute('id');
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
              document.querySelectorAll('.nav-menu a').forEach(link => {
                  link.classList.remove('active');
                  if (link.getAttribute('href') === `#${sectionId}`) {
                      link.classList.add('active');
                  }
              });
          }
      });
  }
  
  window.addEventListener('scroll', setActiveNavLink);
  setActiveNavLink();
  
  // Collapsible content
  const collapsibles = document.querySelectorAll('.collapsible');
  
  collapsibles.forEach(collapsible => {
      const button = collapsible.querySelector('.collapsible-btn');
      
      button.addEventListener('click', function() {
          collapsible.classList.toggle('active');
      });
  });
  
  // Header scroll effect
  const header = document.querySelector('header');
  
  function handleHeaderScroll() {
      if (window.scrollY > 100) {
          header.style.padding = '10px 0';
      } else {
          header.style.padding = '15px 0';
      }
  }
  
  window.addEventListener('scroll', handleHeaderScroll);
});