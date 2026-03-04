/* ============================================================
   WEBIFY MEAUX — faq.js
   Accordéon FAQ accessible (ARIA)
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {
  const questions = document.querySelectorAll('.faq-question');

  questions.forEach(btn => {
    btn.addEventListener('click', function () {
      const isOpen = this.classList.contains('open');
      const answerId = this.getAttribute('aria-controls');
      const answer = document.getElementById(answerId);

      /* Fermer tous les autres */
      questions.forEach(other => {
        if (other !== this) {
          other.classList.remove('open');
          other.setAttribute('aria-expanded', 'false');
          const otherId = other.getAttribute('aria-controls');
          const otherAnswer = document.getElementById(otherId);
          if (otherAnswer) otherAnswer.classList.remove('open');
        }
      });

      /* Basculer l'actuel */
      if (isOpen) {
        this.classList.remove('open');
        this.setAttribute('aria-expanded', 'false');
        if (answer) answer.classList.remove('open');
      } else {
        this.classList.add('open');
        this.setAttribute('aria-expanded', 'true');
        if (answer) answer.classList.add('open');
      }
    });

    /* Navigation clavier */
    btn.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });
});
