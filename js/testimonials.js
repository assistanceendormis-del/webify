/* ============================================================
   WEBIFY MEAUX — testimonials.js
   Slider témoignages (tactile + boutons)
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {
  const track = document.querySelector('.temoignage-track');
  if (!track) return;

  const cards = track.querySelectorAll('.temoignage-card');
  let current = 0;
  let autoTimer;

  function getVisibleCount() {
    if (window.innerWidth >= 992) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  }

  function getCardWidth() {
    const card = cards[0];
    if (!card) return 0;
    const style = getComputedStyle(card);
    return card.offsetWidth + parseInt(style.marginLeft) + parseInt(style.marginRight);
  }

  function goTo(index) {
    const visible = getVisibleCount();
    const max = Math.max(0, cards.length - visible);
    current = Math.max(0, Math.min(index, max));
    const offset = current * getCardWidth();
    track.style.transform = `translateX(-${offset}px)`;
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  const btnNext = document.getElementById('sliderNext');
  const btnPrev = document.getElementById('sliderPrev');
  if (btnNext) btnNext.addEventListener('click', next);
  if (btnPrev) btnPrev.addEventListener('click', prev);

  /* Auto-play */
  function startAuto() {
    autoTimer = setInterval(() => {
      const visible = getVisibleCount();
      if (current >= cards.length - visible) { goTo(0); } else { next(); }
    }, 4000);
  }
  function stopAuto() { clearInterval(autoTimer); }

  startAuto();
  if (btnNext) btnNext.addEventListener('click', () => { stopAuto(); startAuto(); });
  if (btnPrev) btnPrev.addEventListener('click', () => { stopAuto(); startAuto(); });

  /* Touch swipe */
  let startX = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) { diff > 0 ? next() : prev(); }
  });

  window.addEventListener('resize', () => goTo(0));
});
