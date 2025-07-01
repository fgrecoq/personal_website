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
  
  // Form submission
  const contactForm = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');
  
  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          // Get form data
          const formData = {
              firstName: document.getElementById('firstName').value,
              lastName: document.getElementById('lastName').value,
              email: document.getElementById('email').value,
              phone: document.getElementById('phone').value,
              subject: document.getElementById('subject').value,
              message: document.getElementById('message').value
          };
          
          // In a real implementation, you would send this data to a server
          // For this demo, we'll just show a success message
          
          // Simulate form submission
          formMessage.textContent = 'Thank you for your message. I will get back to you soon.';
          formMessage.classList.add('success');
          
          // Reset form
          contactForm.reset();
          
          // Hide success message after 5 seconds
          setTimeout(() => {
              formMessage.textContent = '';
              formMessage.classList.remove('success');
          }, 5000);
          
          // In a real implementation, you would use something like:
          /*
          fetch('your-endpoint', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
          })
          .then(response => response.json())
          .then(data => {
              formMessage.textContent = 'Thank you for your message. I will get back to you soon.';
              formMessage.classList.add('success');
              contactForm.reset();
          })
          .catch(error => {
              formMessage.textContent = 'There was an error sending your message. Please try again.';
              formMessage.classList.add('error');
          });
          */
      });
  }
  
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