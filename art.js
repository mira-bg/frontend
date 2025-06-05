/**
 * Art Page Handler
 * Gestisce la visualizzazione dei dettagli dell'opera d'arte
 */

// Mock Database - Same as in search.js for consistency
const MOCK_DATABASE = {
  "opere": [
    {
      "id_opera": 1,
      "nome_opera": "Monumento ai Caduti",
      "tipologia": "Scultura", 
      "periodo_realizzazione": "1924",
      "descrizione": "Imponente monumento commemorativo dedicato ai caduti della Prima Guerra Mondiale, situato in una delle piazze centrali di Bergamo.",
      "materiali": "Bronzo e pietra calcarea",
      "posizione": {
        "latitudine": 45.6947,
        "longitudine": 9.6711,
        "indirizzo": "Piazza Matteotti, Bergamo"
      },
      "artista": {
        "id": 1,
        "nome": "Giuseppe",
        "cognome": "Riva",
        "nome_completo": "Giuseppe Riva",
        "pseudonimo": null,
        "biografia": "Giuseppe Riva (1834-1916) è stato uno scultore italiano di grande talento, noto per le sue opere commemorative e monumentali. Nato a Bergamo, ha dedicato la sua carriera alla realizzazione di sculture che celebrano la storia e i valori della sua città natale."
      },
      "foto": [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop"
      ]
    },
    {
      "id_opera": 2,
      "nome_opera": "Statua di Gaetano Donizetti",
      "tipologia": "Scultura",
      "periodo_realizzazione": "1897",
      "descrizione": "Statua dedicata al celebre compositore bergamasco Gaetano Donizetti, opera di grande valore artistico e simbolico per la città.",
      "materiali": "Bronzo patinato",
      "posizione": {
        "latitudine": 45.6956,
        "longitudine": 9.6692,
        "indirizzo": "Teatro Donizetti, Bergamo"
      },
      "artista": {
        "id": 2,
        "nome": "Francesco",
        "cognome": "Jerace",
        "nome_completo": "Francesco Jerace",
        "pseudonimo": null,
        "biografia": "Francesco Jerace (1853-1937) è stato uno scultore italiano di origine calabrese, formatosi all'Accademia di Belle Arti di Napoli. È considerato uno dei maggiori scultori italiani dell'Ottocento, autore di numerose opere pubbliche e monumenti commemorativi."
      },
      "foto": [
        "https://images.unsplash.com/photo-1594736797933-d0e501ba2fe6?w=400&h=300&fit=crop"
      ]
    },
    {
      "id_opera": 3,
      "nome_opera": "Fontana del Delfino",
      "tipologia": "Scultura",
      "periodo_realizzazione": "1342",
      "descrizione": "Antica fontana medievale con sculture raffiguranti delfini, esempio di arte scultorea medievale bergamasca.",
      "materiali": "Pietra arenaria locale",
      "posizione": {
        "latitudine": 45.7036,
        "longitudine": 9.6581,
        "indirizzo": "Piazza Vecchia, Città Alta"
      },
      "artista": {
        "id": 3,
        "nome": "Maestranze",
        "cognome": "Medievali",
        "nome_completo": "Maestranze Medievali Bergamasche",
        "pseudonimo": null,
        "biografia": "Le maestranze medievali bergamasche erano gruppi di artigiani specializzati che operavano nella città durante il periodo medievale. Questi artisti anonimi hanno lasciato testimonianze straordinarie dell'arte scultorea dell'epoca, caratterizzata da grande maestria tecnica e simbolismo religioso."
      },
      "foto": [
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop"
      ]
    },
    {
      "id_opera": 4,
      "nome_opera": "Leone di San Marco",
      "tipologia": "Scultura",
      "periodo_realizzazione": "XV secolo",
      "descrizione": "Scultura del Leone alato simbolo della Repubblica di Venezia, testimonianza del dominio veneziano su Bergamo.",
      "materiali": "Pietra d'Istria",
      "posizione": {
        "latitudine": 45.7040,
        "longitudine": 9.6575,
        "indirizzo": "Palazzo della Ragione, Città Alta"
      },
      "artista": {
        "id": 4,
        "nome": "Anonimo",
        "cognome": "Veneziano",
        "nome_completo": "Anonimo Scultore Veneziano",
        "pseudonimo": null,
        "biografia": "Gli scultori veneziani anonimi del XV secolo erano maestri nell'arte della scultura in pietra, specializzati nella realizzazione di simboli della Serenissima Repubblica. Le loro opere si caratterizzavano per l'eleganza delle forme e la precisione dei dettagli decorativi."
      },
      "foto": [
        "https://images.unsplash.com/photo-1586537119028-638f14f2c5c1?w=400&h=300&fit=crop"
      ]
    },
    {
      "id_opera": 5,
      "nome_opera": "Monumento a Vittorio Emanuele II",
      "tipologia": "Scultura",
      "periodo_realizzazione": "1883",
      "descrizione": "Statua equestre dedicata al primo re d'Italia, simbolo dell'unificazione nazionale nella piazza principale di Bergamo bassa.",
      "materiali": "Bronzo su basamento in granito",
      "posizione": {
        "latitudine": 45.6954,
        "longitudine": 9.6773,
        "indirizzo": "Largo Porta Nuova, Bergamo"
      },
      "artista": {
        "id": 5,
        "nome": "Enrico",
        "cognome": "Butti",
        "nome_completo": "Enrico Butti",
        "pseudonimo": null,
        "biografia": "Enrico Butti (1847-1932) è stato uno scultore italiano, allievo di Vincenzo Vela. Si è specializzato in monumenti pubblici e sculture commemorative, diventando uno dei più apprezzati scultori dell'Italia post-unitaria per la sua capacità di coniugare realismo e simbolismo patriottico."
      },
      "foto": [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop"
      ]
    },
    {
      "id_opera": 6,
      "nome_opera": "Statua di Bartolomeo Colleoni",
      "tipologia": "Scultura",
      "periodo_realizzazione": "1516",
      "descrizione": "Copia della famosa statua del condottiero bergamasco, opera che celebra uno dei più importanti personaggi storici di Bergamo.",
      "materiali": "Bronzo dorato",
      "posizione": {
        "latitudine": 45.7042,
        "longitudine": 9.6583,
        "indirizzo": "Cappella Colleoni, Città Alta"
      },
      "artista": {
        "id": 6,
        "nome": "Andrea",
        "cognome": "Verrocchio",
        "nome_completo": "Andrea del Verrocchio",
        "pseudonimo": "Verrocchio",
        "biografia": "Andrea del Verrocchio (1435-1488) è stato uno dei più grandi scultori e pittori del Rinascimento italiano. Maestro di Leonardo da Vinci, è famoso per le sue sculture in bronzo caratterizzate da straordinario realismo e perfezione tecnica. La sua opera più celebre è la statua equestre del Colleoni a Venezia."
      },
      "foto": [
        "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop"
      ]
    }
  ]
};

// Utility functions
function getDataFromStorage(key) {
    try {
        const dataString = sessionStorage.getItem(key);
        if (dataString) {
            return JSON.parse(dataString);
        }
        return null;
    } catch (error) {
        console.error('Error getting data from storage:', error);
        return null;
    }
}

function saveDataToStorage(key, data) {
    try {
        const dataString = JSON.stringify(data);
        sessionStorage.setItem(key, dataString);
        console.log(`Data saved to storage with key: ${key}`);
    } catch (error) {
        console.error('Error saving data to storage:', error);
    }
}

function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function findSculptureById(id) {
    return MOCK_DATABASE.opere.find(opera => opera.id_opera === parseInt(id));
}

function findSculpturesByArtist(artistId) {
    return MOCK_DATABASE.opere.filter(opera => opera.artista.id === parseInt(artistId));
}

function navigateToAuthor(artistId) {
    console.log('Navigating to author page for artist ID:', artistId);
    
    // Recupera tutte le opere dell'artista
    const artistWorks = findSculpturesByArtist(artistId);
    
    if (artistWorks.length > 0) {
        // Prepara i dati dell'artista con tutte le sue opere
        const artistData = {
            ...artistWorks[0].artista, // Prende i dati dell'artista dalla prima opera
            works: artistWorks // Tutte le opere dell'artista
        };
        
        // Salva i dati dell'artista nel sessionStorage
        saveDataToStorage('current_artist', artistData);
        
        // Naviga alla pagina dell'autore
        window.location.href = `autore.html?id=${artistId}`;
    } else {
        console.error('No works found for artist ID:', artistId);
        alert('Informazioni sull\'artista non disponibili al momento.');
    }
}

function toggleMenu() {
    console.log('Menu toggle clicked');
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

function handleImageError(img) {
    img.style.display = 'none';
    img.onerror = null; // Prevent infinite loop
    console.log('Image failed to load:', img.src);
    
    // Optionally show placeholder
    const placeholder = document.createElement('div');
    placeholder.style.cssText = `
        width: 100%; 
        height: 300px; 
        background: var(--color-dark-section); 
        display: flex; 
        align-items: center; 
        justify-content: center; 
        color: var(--color-muted-text); 
        font-size: 18px;
        border-radius: 8px;
    `;
    placeholder.innerHTML = '📷<br>Immagine non disponibile';
    img.parentNode.insertBefore(placeholder, img);
}

function initializeArtPage() {
    console.log('Initializing art page...');
    
    // Prova prima a recuperare l'ID dall'URL
    const sculptureId = getUrlParameter('id');
    let sculpture = null;
    
    if (sculptureId) {
        // Cerca la scultura nel database mock usando l'ID dall'URL
        sculpture = findSculptureById(sculptureId);
        
        if (sculpture) {
            // Salva nel sessionStorage per coerenza
            const formattedSculpture = {
                id: sculpture.id_opera,
                name: sculpture.nome_opera,
                type: sculpture.tipologia,
                period: sculpture.periodo_realizzazione,
                description: sculpture.descrizione,
                materials: sculpture.materiali,
                location: sculpture.posizione,
                artist: sculpture.artista,
                photos: sculpture.foto
            };
            saveDataToStorage('current_sculpture', formattedSculpture);
            sculpture = formattedSculpture;
        }
    } else {
        // Fallback: prova a recuperare dal sessionStorage
        sculpture = getDataFromStorage('current_sculpture');
    }
    
    if (!sculpture) {
        console.error('No sculpture data found');
        document.body.innerHTML = `
            <header>
                <nav>
                    <div class="logo"><a href="./index.html">Mira-BG</a></div>
                </nav>
            </header>
            <div style="text-align: center; padding: 100px 20px; color: var(--color-text);">
                <h2>Opera non trovata</h2>
                <p>Non è stato possibile caricare i dettagli dell'opera.</p>
                <a href="search.html" class="btn">Torna alla ricerca</a>
            </div>
            <footer>
                <p>© 2025 Mira-bg - Tutti i diritti riservati</p>
            </footer>
        `;
        return;
    }
    
    console.log('Loaded sculpture:', sculpture);
    populateArtPage(sculpture);
}

function populateArtPage(sculpture) {
    // Aggiorna il titolo della pagina
    document.title = `${sculpture.name} - Mira-BG`;
    
    // Popola l'immagine principale
    const operaImage = document.querySelector('.opera-image');
    if (operaImage && sculpture.photos && sculpture.photos.length > 0) {
        operaImage.src = sculpture.photos[0];
        operaImage.alt = sculpture.name;
        operaImage.onerror = () => handleImageError(operaImage);
    }
    
    // Popola il titolo dell'opera
    const operaTitle = document.querySelector('.opera-text h2');
    if (operaTitle) {
        operaTitle.textContent = sculpture.name;
    }
    
    // Popola la descrizione
    const operaDescription = document.querySelector('.opera-text p:first-of-type');
    if (operaDescription) {
        operaDescription.textContent = sculpture.description;
    }
    
    // Popola i materiali
    const materialsP = document.querySelector('.opera-text p:last-of-type');
    if (materialsP) {
        materialsP.textContent = sculpture.materials || 'Non specificato';
    }
    
    // Aggiorna la mappa
    const mapIframe = document.querySelector('iframe');
    if (mapIframe && sculpture.location) {
        const { latitudine, longitudine } = sculpture.location;
        mapIframe.src = `https://www.google.com/maps?q=${latitudine},${longitudine}&z=16&output=embed`;
    }
    
    // Popola la sezione autori
    populateAuthorSection(sculpture);
}

function populateAuthorSection(sculpture) {
    const autoriGrid = document.querySelector('.autori-grid');
    if (!autoriGrid || !sculpture.artist) return;
    
    // Pulisci il contenuto esistente
    autoriGrid.innerHTML = '';
    
    // Crea l'elemento autore
    const autoreDiv = document.createElement('div');
    autoreDiv.className = 'autore';
    autoreDiv.style.cursor = 'pointer';
    autoreDiv.style.transition = 'transform 0.3s ease';
    
    // Aggiungi effetti hover
    autoreDiv.addEventListener('mouseenter', () => {
        autoreDiv.style.transform = 'scale(1.05)';
    });
    
    autoreDiv.addEventListener('mouseleave', () => {
        autoreDiv.style.transform = 'scale(1)';
    });
    
    // Gestisci il click per navigare alla pagina dell'autore
    autoreDiv.addEventListener('click', () => {
        navigateToAuthor(sculpture.artist.id);
    });
    
    const artistName = sculpture.artist.nome_completo || 
                      (sculpture.artist.pseudonimo ? sculpture.artist.pseudonimo : 'Artista Sconosciuto');
    
    // Usa un'immagine placeholder per gli artisti
    const artistImageUrl = sculpture.photos && sculpture.photos.length > 0 
        ? sculpture.photos[0] 
        : 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=300&fit=crop';
    
    autoreDiv.innerHTML = `
        <img src="${artistImageUrl}" 
             alt="${artistName}" 
             onerror="handleImageError(this)" />
        <div class="autore-nome">${artistName}</div>
    `;
    
    autoriGrid.appendChild(autoreDiv);
    
    
}

// Inizializza la pagina quando il DOM è pronto
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing art page...');
    initializeArtPage();
});

// Gestisci errori globali
window.addEventListener('error', function(event) {
    console.error('Global error in art page:', event.error);
});

// Esporta funzioni per uso esterno
if (typeof window !== 'undefined') {
    window.ArtPage = {
        navigateToAuthor,
        toggleMenu,
        initializeArtPage,
        populateArtPage
    };
}