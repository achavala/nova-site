// ===== Games Data =====
const games = [
  { name: '2048', emoji: '🔢', url: 'https://play2048.co/' },
  { name: 'Slope', emoji: '⛷️', url: 'https://slope-game.github.io/' },
  { name: 'Cookie Clicker', emoji: '🍪', url: 'https://orteil.dashnet.org/cookieclicker/' },
  { name: 'Tetris', emoji: '🟦', url: 'https://tetris.com/play-tetris' },
  { name: 'Snake', emoji: '🐍', url: 'https://playsnake.org/' },
  { name: 'Pac-Man', emoji: '👻', url: 'https://freepacman.org/' },
  { name: 'Minecraft Classic', emoji: '⛏️', url: 'https://classic.minecraft.net/' },
  { name: 'Moto X3M', emoji: '🏍️', url: 'https://motox3m.io/' },
  { name: 'Run 3', emoji: '🏃', url: 'https://run3.io/' },
  { name: 'Basketball Stars', emoji: '🏀', url: 'https://basketballstars.io/' },
  { name: 'Flappy Bird', emoji: '🐦', url: 'https://flappybird.io/' },
  { name: 'Chess', emoji: '♟️', url: 'https://www.chess.com/play/computer' },
  { name: 'Wordle', emoji: '📝', url: 'https://www.nytimes.com/games/wordle/' },
  { name: 'Agar.io', emoji: '🟢', url: 'https://agar.io/' },
  { name: 'Slither.io', emoji: '🐛', url: 'https://slither.io/' },
  { name: 'Crossy Road', emoji: '🐔', url: 'https://crossyroad.io/' },
  { name: 'Geometry Dash', emoji: '🔷', url: 'https://geometrydash.io/' },
  { name: 'Retro Bowl', emoji: '🏈', url: 'https://retrobowl.io/' },
  { name: 'Drift Hunters', emoji: '🚗', url: 'https://drifthunters.io/' },
  { name: 'Paper.io', emoji: '📄', url: 'https://paper-io.com/' },
  { name: 'Subway Surfers', emoji: '🛹', url: 'https://subwaysurfers.io/' },
  { name: 'Among Us', emoji: '🚀', url: 'https://amongus.io/' },
  { name: 'Doodle Jump', emoji: '🟩', url: 'https://doodlejump.io/' },
  { name: 'Temple Run', emoji: '🏛️', url: 'https://templerun.io/' },
];

const gameGrid = document.getElementById('gameGrid');
const gameSearch = document.getElementById('gameSearch');
const resultsCount = document.getElementById('resultsCount');

function renderGames(filter = '') {
  const filtered = games.filter(g =>
    g.name.toLowerCase().includes(filter.toLowerCase())
  );

  gameGrid.innerHTML = '';
  filtered.forEach(game => {
    const card = document.createElement('a');
    card.className = 'game-card';
    card.href = game.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.innerHTML = `<span class="game-emoji">${game.emoji}</span>${game.name}`;
    gameGrid.appendChild(card);
  });

  if (filter) {
    resultsCount.textContent = `${filtered.length} result${filtered.length !== 1 ? 's' : ''} found`;
  } else {
    resultsCount.textContent = '';
  }
}

gameSearch.addEventListener('input', (e) => {
  renderGames(e.target.value);
});

// Initial render
renderGames();
