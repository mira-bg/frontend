// autore.js

function getDataFromStorage(key) {
  try {
    const dataString = sessionStorage.getItem(key);
    return dataString ? JSON.parse(dataString) : null;
  } catch (error) {
    console.error('Errore nel recupero dati da storage:', error);
    return null;
  }
}

function handleImageError(img) {
  img.style.display = 'none';
  img.onerror = null;
  const placeholder = document.createElement('div');
  placeholder.style.cssText = `
    width: 100%; height: 300px; background: #333; 
    display: flex; align-items: center; justify-content: center; 
    color: #aaa; font-size: 18px; border-radius: 8px;
  `;
  placeholder.innerHTML = '📷<br>Immagine non disponibile';
  img.parentNode.insertBefore(placeholder, img);
}

function initializeAuthorPage() {
  const artist = getDataFromStorage('current_artist');

  if (!artist) {
    document.body.innerHTML = `
      <header>
        <nav>
          <div class="logo"><a href="./index.html">Mira-BG</a></div>
        </nav>
      </header>
      <div style="text-align:center; padding: 100px 20px;">
        <h2>Autore non trovato</h2>
        <p>Non è stato possibile caricare le informazioni dell'autore.</p>
        <a href="search.html" class="btn">Torna alla ricerca</a>
      </div>
      <footer>
        <p>© 2025 Mira-bg - Tutti i diritti riservati</p>
      </footer>
    `;
    return;
  }

  // Titolo e immagine
  const img = document.querySelector('.opera-image');
  if (img && artist.works?.[0]?.foto?.[0]) {
    img.src = artist.works[0].foto[0];
    img.alt = artist.nome_completo;
    img.onerror = () => handleImageError(img);
  }

  const title = document.querySelector('.opera-text h2');
  if (title) {
    title.textContent = artist.nome_completo || artist.pseudonimo || 'Artista sconosciuto';
  }

  // Biografia
  const bio = document.querySelector('#biografia p');
  if (bio) {
    bio.textContent = artist.biografia || 'Biografia non disponibile.';
  }

  // Opere
  const grid = document.querySelector('.autori-grid');
  if (grid) {
    grid.innerHTML = ''; // pulisci
    artist.works.forEach(opera => {
      const div = document.createElement('div');
      div.className = 'autore';
      div.style.cursor = 'pointer';
      div.style.transition = 'transform 0.3s ease';

      div.addEventListener('mouseenter', () => {
        div.style.transform = 'scale(1.05)';
      });

      div.addEventListener('mouseleave', () => {
        div.style.transform = 'scale(1)';
      });

      div.addEventListener('click', () => {
        sessionStorage.setItem('current_sculpture', JSON.stringify({
          id: opera.id_opera,
          name: opera.nome_opera,
          type: opera.tipologia,
          period: opera.periodo_realizzazione,
          description: opera.descrizione,
          materials: opera.materiali,
          location: opera.posizione,
          artist: opera.artista,
          photos: opera.foto
        }));
        window.location.href = `art.html?id=${opera.id_opera}`;
      });

      div.innerHTML = `
        <img src="${opera.foto?.[0] || './placeholder.jpg'}" 
             alt="${opera.nome_opera}" 
             onerror="this.onerror=null; this.src='./placeholder.jpg'" />
        <div class="autore-nome">${opera.nome_opera}</div>
      `;
      grid.appendChild(div);
    });
  }
}

// Menu toggle (hamburger)
function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  if (nav) {
    nav.classList.toggle('active');
  }
}

// Inizializza quando il DOM è pronto
document.addEventListener('DOMContentLoaded', initializeAuthorPage);

// Esporta se necessario
if (typeof window !== 'undefined') {
  window.AutorePage = {
    initializeAuthorPage,
    toggleMenu
  };
}
