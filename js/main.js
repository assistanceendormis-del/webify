/* ============================================================
   WEBIFY MEAUX — main.js
   Navigation, scroll effects, animations fade-in
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ----- Navbar sticky scroll shadow ----- */
  const nav = document.getElementById('mainNav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 30);
    });
  }

  /* ----- Active nav link ----- */
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/index.html';
  document.querySelectorAll('.nav-link[data-page]').forEach(link => {
    const page = link.getAttribute('data-page');
    if (currentPath.includes(page)) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  /* ----- Mobile drawer close on link click ----- */
  document.querySelectorAll('.navbar-collapse .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const collapse = document.getElementById('navbarCollapse');
      if (collapse && collapse.classList.contains('show')) {
        const toggler = document.querySelector('.navbar-toggler');
        if (toggler) toggler.click();
      }
    });
  });

  /* ----- Fade-in on scroll (IntersectionObserver) ----- */
  const fadeEls = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window && fadeEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    fadeEls.forEach(el => observer.observe(el));
  } else {
    fadeEls.forEach(el => el.classList.add('visible'));
  }

  /* ----- Smooth scroll for anchor links ----- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 120;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

});
