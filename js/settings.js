// ===== Settings Management =====

// Helper: show saved message
function showSaved(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 1500);
}

// ===== Tab Cloaking =====
const tabCloak = document.getElementById('tabCloak');
tabCloak.value = localStorage.getItem('nova-tab-cloak') || 'none';

tabCloak.addEventListener('change', () => {
  localStorage.setItem('nova-tab-cloak', tabCloak.value);
  showSaved('cloakSaved');

  // Apply immediately
  const cloaks = {
    google: { title: 'Google', icon: 'https://www.google.com/favicon.ico' },
    classroom: { title: 'Google Classroom', icon: 'https://ssl.gstatic.com/classroom/favicon.png' },
    drive: { title: 'Google Drive', icon: 'https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png' },
    docs: { title: 'Google Docs', icon: 'https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico' },
    canvas: { title: 'Dashboard', icon: 'https://du11hjcvx0uqb.cloudfront.net/dist/images/favicon-e10d657a73.ico' }
  };

  if (tabCloak.value !== 'none' && cloaks[tabCloak.value]) {
    document.title = cloaks[tabCloak.value].title;
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'icon';
    link.href = cloaks[tabCloak.value].icon;
    document.head.appendChild(link);
  } else {
    document.title = 'Nova - Settings';
    const link = document.querySelector("link[rel*='icon']");
    if (link) link.href = '/img/favicon.png';
  }
});

// ===== Search Engine =====
const searchEngine = document.getElementById('searchEngine');
searchEngine.value = localStorage.getItem('nova-search-engine') || 'google';

searchEngine.addEventListener('change', () => {
  localStorage.setItem('nova-search-engine', searchEngine.value);
  showSaved('engineSaved');
});

// ===== Panic Key =====
const panicKey = document.getElementById('panicKey');
panicKey.value = localStorage.getItem('nova-panic-key') || 'none';

panicKey.addEventListener('change', () => {
  localStorage.setItem('nova-panic-key', panicKey.value);
  showSaved('panicSaved');
});

// ===== Panic URL =====
const panicUrlInput = document.getElementById('panicUrl');
panicUrlInput.value = localStorage.getItem('nova-panic-url') || '';

panicUrlInput.addEventListener('input', () => {
  localStorage.setItem('nova-panic-url', panicUrlInput.value);
  showSaved('panicUrlSaved');
});

// ===== Open in about:blank =====
const openBlankBtn = document.getElementById('openBlank');
openBlankBtn.addEventListener('click', () => {
  const win = window.open('about:blank', '_blank');
  if (win) {
    win.document.write(`
      <!DOCTYPE html>
      <html>
      <head><title>${document.title}</title></head>
      <body style="margin:0;overflow:hidden;">
        <iframe src="${window.location.origin}" style="width:100vw;height:100vh;border:none;"></iframe>
      </body>
      </html>
    `);
    win.document.close();
  }
});

// ===== Theme =====
const themeSelect = document.getElementById('themeSelect');
themeSelect.value = localStorage.getItem('nova-theme') || 'default';

themeSelect.addEventListener('change', () => {
  const theme = themeSelect.value;
  localStorage.setItem('nova-theme', theme);

  if (theme === 'default') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', theme);
  }

  showSaved('themeSaved');
});

// ===== Apply theme on load =====
(function() {
  const theme = localStorage.getItem('nova-theme') || 'default';
  if (theme !== 'default') {
    document.documentElement.setAttribute('data-theme', theme);
  }
})();
