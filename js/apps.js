// ===== App Cards - Open URL =====
document.querySelectorAll('.app-card').forEach(card => {
  card.addEventListener('click', (e) => {
    e.preventDefault();
    const url = card.getAttribute('data-url');
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  });
});

// ===== Apply theme on this page =====
(function() {
  const theme = localStorage.getItem('nova-theme') || 'default';
  if (theme !== 'default') {
    document.documentElement.setAttribute('data-theme', theme);
  }
})();
