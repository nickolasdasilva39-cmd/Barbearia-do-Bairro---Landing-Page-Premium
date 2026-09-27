document.addEventListener('DOMContentLoaded', () => {
  const yearTarget = document.getElementById('year');
  if (yearTarget) {
    yearTarget.textContent = new Date().getFullYear();
  }

  const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
  whatsappLinks.forEach((link) => {
    link.setAttribute('aria-label', 'Falar no WhatsApp');
  });
});
