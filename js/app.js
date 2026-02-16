// ===== Search Functionality =====
const searchInput = document.getElementById('searchInput');
const loadingEl = document.getElementById('loading');

const searchEngines = {
  google: 'https://www.google.com/search?q=',
  bing: 'https://www.bing.com/search?q=',
  duckduckgo: 'https://duckduckgo.com/?q=',
  yahoo: 'https://search.yahoo.com/search?p='
};

function isUrl(str) {
  try {
    const url = new URL(str.includes('://') ? str : 'https://' + str);
    return url.hostname.includes('.');
  } catch {
    return false;
  }
}

function handleSearch(query) {
  if (!query.trim()) return;

  loadingEl.style.display = 'flex';

  const engine = localStorage.getItem('nova-search-engine') || 'google';
  const searchUrl = searchEngines[engine];

  let url;
  if (isUrl(query)) {
    url = query.includes('://') ? query : 'https://' + query;
  } else {
    url = searchUrl + encodeURIComponent(query);
  }

  setTimeout(() => {
    window.open(url, '_blank');
    loadingEl.style.display = 'none';
    searchInput.value = '';
  }, 400);
}

searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    handleSearch(searchInput.value);
  }
});

// ===== Panic Key =====
function setupPanicKey() {
  const panicKey = localStorage.getItem('nova-panic-key');
  const panicUrl = localStorage.getItem('nova-panic-url') || 'https://classroom.google.com';

  if (panicKey && panicKey !== 'none') {
    document.addEventListener('keydown', (e) => {
      if (e.key === panicKey) {
        window.location.replace(panicUrl);
      }
    });
  }
}

// ===== Tab Cloaking =====
function applyTabCloak() {
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
}

// ===== Theme =====
function applyTheme() {
  const theme = localStorage.getItem('nova-theme') || 'default';
  if (theme !== 'default') {
    document.documentElement.setAttribute('data-theme', theme);
  }
}

// ===== Init =====
applyTheme();
applyTabCloak();
setupPanicKey();
