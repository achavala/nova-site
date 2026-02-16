// ===== Mobile Navigation Toggle =====
const menuBtn = document.getElementById('menuBtn');
const navUl = document.querySelector('.nav-links ul');

if (menuBtn && navUl) {
  menuBtn.addEventListener('click', () => {
    navUl.classList.toggle('show');
  });

  // Close menu when clicking a link
  document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', () => {
      navUl.classList.remove('show');
    });
  });
}

// ===== Apply theme and cloak on all pages =====
(function() {
  const theme = localStorage.getItem('nova-theme') || 'default';
  if (theme !== 'default') {
    document.documentElement.setAttribute('data-theme', theme);
  }

  const cloak = localStorage.getItem('nova-tab-cloak') || 'none';
  const cloaks = {
    google: { title: 'Google', icon: 'https://www.google.com/favicon.ico' },
    classroom: { title: 'Google Classroom', icon: 'https://ssl.gstatic.com/classroom/favicon.png' },
    drive: { title: 'Google Drive', icon: 'https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png' },
    docs: { title: 'Google Docs', icon: 'https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico' },
    canvas: { title: 'Dashboard', icon: 'https://du11hjcvx0uqb.cloudfront.net/dist/images/favicon-e10d657a73.ico' }
  };

  if (cloak !== 'none' && cloaks[cloak]) {
    document.title = cloaks[cloak].title;
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'icon';
    link.href = cloaks[cloak].icon;
    document.head.appendChild(link);
  }

  // Panic key
  const panicKey = localStorage.getItem('nova-panic-key');
  const panicUrl = localStorage.getItem('nova-panic-url') || 'https://classroom.google.com';
  if (panicKey && panicKey !== 'none') {
    document.addEventListener('keydown', (e) => {
      if (e.key === panicKey) {
        window.location.replace(panicUrl);
      }
    });
  }
})();
