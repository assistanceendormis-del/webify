/* ============================================================
   WEBIFY MEAUX — form.js
   Validation formulaire + toast succès simulé
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const toast = document.getElementById('toast-success');

  function showError(field, message) {
    field.classList.add('is-invalid');
    let feedback = field.nextElementSibling;
    if (!feedback || !feedback.classList.contains('invalid-feedback')) {
      feedback = document.createElement('div');
      feedback.classList.add('invalid-feedback');
      field.after(feedback);
    }
    feedback.textContent = message;
  }

  function clearError(field) {
    field.classList.remove('is-invalid');
    const feedback = field.nextElementSibling;
    if (feedback && feedback.classList.contains('invalid-feedback')) {
      feedback.textContent = '';
    }
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePhone(phone) {
    return /^[\d\s\+\-\.]{7,}$/.test(phone);
  }

  /* Live validation */
  form.querySelectorAll('[required]').forEach(field => {
    field.addEventListener('blur', () => {
      if (!field.value.trim()) {
        showError(field, 'Ce champ est requis.');
      } else {
        clearError(field);
      }
    });
    field.addEventListener('input', () => clearError(field));
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;

    /* Réinitialiser */
    form.querySelectorAll('.is-invalid').forEach(f => f.classList.remove('is-invalid'));

    const nom = form.querySelector('#nom');
    const tel = form.querySelector('#tel');
    const email = form.querySelector('#email');
    const type = form.querySelector('#type');
    const consent = form.querySelector('#consent');

    if (!nom.value.trim()) { showError(nom, 'Votre nom est requis.'); valid = false; }
    if (!tel.value.trim()) {
      showError(tel, 'Votre téléphone est requis.'); valid = false;
    } else if (!validatePhone(tel.value)) {
      showError(tel, 'Numéro de téléphone invalide.'); valid = false;
    }
    if (!email.value.trim()) {
      showError(email, 'Votre email est requis.'); valid = false;
    } else if (!validateEmail(email.value)) {
      showError(email, 'Adresse email invalide.'); valid = false;
    }
    if (type && !type.value) { showError(type, 'Veuillez sélectionner un type de projet.'); valid = false; }
    if (consent && !consent.checked) { showError(consent, 'Vous devez accepter pour continuer.'); valid = false; }

    if (!valid) {
      const firstError = form.querySelector('.is-invalid');
      if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    /* Simulation envoi */
    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Envoi en cours…';

    setTimeout(() => {
      form.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = 'Envoyer ma demande';
      if (toast) {
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 5000);
      }
    }, 1200);
  });
});
