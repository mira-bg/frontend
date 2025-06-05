/**
 * MiraDB Sculptures Client - Mock Version
 * Uses local mock data instead of external API
 */

// Mock Database - Embedded directly in the script
const MOCK_DATABASE = {
  "opere": [
    {
      "id_opera": 1,
      "nome_opera": "Monumento ai Caduti",
      "tipologia": "Scultura", 
      "periodo_realizzazione": "1924",
      "descrizione": "Imponente monumento commemorativo dedicato ai caduti della Prima Guerra Mondiale, situato in una delle piazze centrali di Bergamo.",
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
        "biografia": "Giuseppe Riva (1834-1916) è stato uno scultore italiano di grande prestigio, particolarmente attivo nel territorio bergamasco durante la fine del XIX secolo. Nato a Bergamo, si distinse per la sua capacità di realizzare monumenti commemorativi di notevole impatto emotivo e artistico.",
        "foto_autore": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
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
        "biografia": "Francesco Jerace (1853-1937) è stato uno scultore italiano di origine calabrese. Si trasferì a Roma dove sviluppò il suo stile artistico, diventando uno dei più apprezzati scultori del suo tempo per monumenti pubblici e commemorativi.",
        "foto_autore": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
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
        "biografia": "Le maestranze medievali bergamasche erano gruppi di artigiani specializzati che operavano nel territorio di Bergamo durante il periodo medievale. Questi artisti-artigiani erano responsabili della realizzazione di opere architettoniche e scultoree per edifici religiosi e civili.",
        "foto_autore": "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop"
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
        "biografia": "Scultore anonimo attivo durante il dominio veneziano su Bergamo. Come molti artisti dell'epoca, la sua identità si è persa nel tempo, ma la qualità delle sue opere testimonia un'elevata competenza tecnica e artistica tipica delle botteghe veneziane del XV secolo.",
        "foto_autore": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
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
        "biografia": "Enrico Butti (1847-1932) è stato uno scultore italiano di grande fama, particolarmente noto per i suoi monumenti pubblici. Nato a Viggiù, sviluppò uno stile che combinava il realismo con elementi simbolici, diventando uno dei più apprezzati scultori del periodo post-unitario italiano.",
        "foto_autore": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face"
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
        "biografia": "Andrea del Verrocchio (1435-1488) è stato uno dei più grandi maestri del Rinascimento italiano. Scultore, pittore e orafo, fu maestro di Leonardo da Vinci. La sua bottega a Firenze era una delle più prestigiose dell'epoca, e le sue opere scultoree sono considerate capolavori assoluti dell'arte rinascimentale.",
        "foto_autore": "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face"
      },
      "foto": [
        "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop"
      ]
    }
  ],
  "metadata": {
    "total_opere": 6,
    "tipologie": ["Scultura"],
    "periodi": ["XII secolo", "XIV secolo", "XV secolo", "XVI secolo", "1883", "1897", "1924", "1928", "1965", "1967", "1975"],
    "last_updated": "2025-01-15"
  }
};

class MiraDBClient {
    constructor() {
        console.log('MiraDB Mock Client initialized');
    }

    /**
     * Mock fetch sculptures - simulates API call with local data
     */
    async fetchSculptures(limit = 100, offset = 0, searchTerm = '') {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 300));

        try {
            let filteredOpere = [...MOCK_DATABASE.opere];

            // Apply search filter if provided
            if (searchTerm && searchTerm.trim() !== '') {
                const searchLower = searchTerm.toLowerCase().trim();
                filteredOpere = filteredOpere.filter(opera => {
                    return (
                        opera.nome_opera.toLowerCase().includes(searchLower) ||
                        opera.artista.nome_completo.toLowerCase().includes(searchLower) ||
                        opera.periodo_realizzazione.toLowerCase().includes(searchLower) ||
                        opera.descrizione.toLowerCase().includes(searchLower) ||
                        (opera.artista.pseudonimo && opera.artista.pseudonimo.toLowerCase().includes(searchLower))
                    );
                });
            }

            // Apply pagination
            const startIndex = offset;
            const endIndex = offset + limit;
            const paginatedOpere = filteredOpere.slice(startIndex, endIndex);

            // Create response in expected API format
            const response = {
                status: 'success',
                data: {
                    opere: paginatedOpere,
                    pagination: {
                        total: filteredOpere.length,
                        limit: limit,
                        offset: offset,
                        has_more: endIndex < filteredOpere.length
                    }
                },
                message: `Found ${filteredOpere.length} sculptures${searchTerm ? ` matching "${searchTerm}"` : ''}`
            };

            console.log('Mock API Response:', response);
            return response;

        } catch (error) {
            console.error('Error in mock fetch:', error);
            throw error;
        }
    }

    /**
     * Get all sculptures with automatic pagination (mock version)
     */
    async getAllSculptures(searchTerm = '') {
        try {
            const response = await this.fetchSculptures(100, 0, searchTerm);
            
            if (response.status === 'success' && response.data && response.data.opere) {
                return response.data.opere;
            } else {
                return [];
            }
        } catch (error) {
            console.error('Error getting all sculptures:', error);
            throw error;
        }
    }

    /**
     * Get sculpture by ID
     */
    async getSculptureById(id) {
        try {
            const allSculptures = await this.getAllSculptures();
            return allSculptures.find(sculpture => sculpture.id_opera === parseInt(id));
        } catch (error) {
            console.error('Error getting sculpture by ID:', error);
            throw error;
        }
    }

    /**
     * Get artist by ID
     */
    async getArtistById(id) {
        try {
            const allSculptures = await this.getAllSculptures();
            const sculpture = allSculptures.find(s => s.artista.id === parseInt(id));
            return sculpture ? sculpture.artista : null;
        } catch (error) {
            console.error('Error getting artist by ID:', error);
            throw error;
        }
    }

    /**
     * Get sculptures by artist ID
     */
    async getSculpturesByArtistId(artistId) {
        try {
            const allSculptures = await this.getAllSculptures();
            return allSculptures.filter(sculpture => sculpture.artista.id === parseInt(artistId));
        } catch (error) {
            console.error('Error getting sculptures by artist ID:', error);
            throw error;
        }
    }

    /**
     * Format sculptures data for display
     */
    formatSculpturesData(sculptures) {
        return sculptures.map(sculpture => ({
            id: sculpture.id_opera,
            name: sculpture.nome_opera || 'Unknown Title',
            type: sculpture.tipologia,
            period: sculpture.periodo_realizzazione || 'Unknown Period',
            description: sculpture.descrizione || '',
            location: sculpture.posizione || {},
            artist: {
                id: sculpture.artista?.id,
                fullName: sculpture.artista?.nome_completo || 'Unknown Artist',
                firstName: sculpture.artista?.nome,
                lastName: sculpture.artista?.cognome,
                pseudonym: sculpture.artista?.pseudonimo,
                biography: sculpture.artista?.biografia || '',
                photo: sculpture.artista?.foto_autore || ''
            },
            photos: sculpture.foto || []
        }));
    }
}

// Global variables
let apiClient;
let allSculptures = [];
let isLoading = false;

/**
 * Data Storage Utilities
 * Usati per passare dati tra le pagine (temporaneo, in futuro sarà sostituito da chiamate API)
 */
function saveDataToStorage(key, data) {
    try {
        // Usa sessionStorage per dati temporanei della sessione
        const dataString = JSON.stringify(data);
        sessionStorage.setItem(key, dataString);
        console.log(`Data saved to storage with key: ${key}`);
    } catch (error) {
        console.error('Error saving data to storage:', error);
    }
}

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

/**
 * Navigation Functions
 */
function navigateToArt(sculptureId) {
    console.log('Navigating to art page for sculpture ID:', sculptureId);
    
    // Trova la scultura specifica
    const sculpture = allSculptures.find(s => s.id === sculptureId);
    
    if (sculpture) {
        // Salva i dati della scultura per la pagina art.html
        saveDataToStorage('current_sculpture', sculpture);
        
        // Naviga alla pagina art.html
        window.location.href = `art.html?id=${sculptureId}`;
    } else {
        console.error('Sculpture not found with ID:', sculptureId);
        alert('Errore: Opera non trovata!');
    }
}

function navigateToAuthor(artistId) {
    console.log('Navigating to author page for artist ID:', artistId);
    
    // Trova l'artista specifico
    const artistSculpture = allSculptures.find(s => s.artist.id === artistId);
    
    if (artistSculpture) {
        const artist = artistSculpture.artist;
        
        // Trova tutte le opere dell'artista
        const artistWorks = allSculptures.filter(s => s.artist.id === artistId);
        
        // Prepara i dati dell'artista
        const artistData = {
            ...artist,
            works: artistWorks
        };
        
        // Salva i dati dell'artista per la pagina autore.html
        saveDataToStorage('current_artist', artistData);
        
        // Naviga alla pagina autore.html
        window.location.href = `autore.html?id=${artistId}`;
    } else {
        console.error('Artist not found with ID:', artistId);
        alert('Errore: Artista non trovato!');
    }
}

/**
 * Initialize the application
 */
async function initializePage() {
    console.log('Initializing Mira-BG Sculptures page with mock data...');
    
    try {
        apiClient = new MiraDBClient();
        await loadSculptures();
    } catch (error) {
        console.error('Failed to initialize page:', error);
        showError('Failed to initialize the application. Please refresh the page.');
    }
}

/**
 * Load and display sculptures
 */
async function loadSculptures(searchTerm = '') {
    if (isLoading) return;
    
    isLoading = true;
    
    try {
        // Show loading state
        showLoading();
        
        console.log('Loading sculptures with search term:', searchTerm);
        
        // Fetch sculptures from mock API
        const rawSculptures = await apiClient.getAllSculptures(searchTerm);
        
        // Format data
        allSculptures = apiClient.formatSculpturesData(rawSculptures);
        
        console.log('Formatted sculptures:', allSculptures);
        
        // Display sculptures
        displaySculptures(allSculptures);
        
    } catch (error) {
        console.error('Failed to load sculptures:', error);
        showError(`Error loading sculptures: ${error.message}`);
    } finally {
        isLoading = false;
    }
}

/**
 * Display sculptures in the grid
 */
function displaySculptures(sculptures) {
    const container = document.getElementById('sculptures-container');
    
    if (!sculptures || sculptures.length === 0) {
        container.innerHTML = `
            <div class="no-results" style="text-align: center; padding: 60px 20px; color: var(--color-muted-text);">
                <h3 style="color: var(--color-text); margin-bottom: 15px;">🔍 Nessuna scultura trovata</h3>
                <p>Prova a modificare i termini di ricerca o controlla più tardi.</p>
            </div>
        `;
        return;
    }

    // Create statistics info
    const statsHtml = `
        <div class="sculptures-stats" style="text-align: center; margin-bottom: 30px; color: var(--color-accent); font-size: 18px; font-weight: 500;">
            🎨 Trovate ${sculptures.length} scultura${sculptures.length !== 1 ? 's' : ''} di Bergamo
        </div>
    `;

    // Create grid container
    const gridContainer = document.createElement('div');
    gridContainer.className = 'grid-container';

    // Create grid items
    sculptures.forEach((sculpture, index) => {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.style.animationDelay = `${(index % 6) * 0.1}s`;
        gridItem.style.cursor = 'pointer';
        gridItem.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';

        // Add hover effects
        gridItem.addEventListener('mouseenter', () => {
            gridItem.style.transform = 'translateY(-5px)';
            gridItem.style.boxShadow = '0 8px 25px rgba(212, 175, 55, 0.3)';
        });

        gridItem.addEventListener('mouseleave', () => {
            gridItem.style.transform = 'translateY(0)';
            gridItem.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
        });

        // Handle image display
        let imageHtml;
        if (sculpture.photos && sculpture.photos.length > 0) {
            imageHtml = `
                <img src="${sculpture.photos[0]}" 
                     alt="${sculpture.name}" 
                     onerror="handleImageError(this)"
                     loading="lazy"
                     style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 15px;">
                <div class="no-image" style="display: none; height: 200px; background: var(--color-dark-section); border-radius: 8px; display: none; align-items: center; justify-content: center; flex-direction: column; color: var(--color-muted-text); margin-bottom: 15px;">
                    <span style="font-size: 40px; margin-bottom: 8px;">📷</span>
                    <span>Immagine non disponibile</span>
                </div>
            `;
        } else {
            imageHtml = `
                <div class="no-image" style="height: 200px; background: var(--color-dark-section); border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-direction: column; color: var(--color-muted-text); margin-bottom: 15px;">
                    <span style="font-size: 40px; margin-bottom: 8px;">📷</span>
                    <span>Immagine non disponibile</span>
                </div>
            `;
        }

        // Create artist display name
        const artistName = sculpture.artist.fullName || 
                          (sculpture.artist.pseudonym ? sculpture.artist.pseudonym : 'Artista Sconosciuto');

        gridItem.innerHTML = `
            <h4 style="margin: 0 0 15px 0; color: var(--color-text); font-size: 18px; font-weight: 600; line-height: 1.3; min-height: 48px; display: flex; align-items: center;" title="${sculpture.name}">
                ${sculpture.name}
            </h4>
            ${imageHtml}
            <div class="artist-info" style="margin-bottom: 10px;">
                <p style="margin: 0; color: var(--color-accent); font-weight: 500; cursor: pointer;" 
                   onclick="event.stopPropagation(); navigateToAuthor(${sculpture.artist.id})"
                   onmouseover="this.style.textDecoration='underline'"
                   onmouseout="this.style.textDecoration='none'"
                   title="Clicca per vedere la pagina dell'artista">
                   <strong>👨‍🎨 Artista:</strong> ${artistName}
                </p>
            </div>
            <p class="period-info" style="margin: 0; color: var(--color-muted-text); font-size: 14px;"><strong>📅 Periodo:</strong> ${sculpture.period}</p>
        `;

        // Add click event to navigate to art page
        gridItem.addEventListener('click', () => {
            console.log('Clicked sculpture:', sculpture);
            navigateToArt(sculpture.id);
        });

        gridContainer.appendChild(gridItem);
    });

    // Update container
    container.innerHTML = statsHtml;
    container.appendChild(gridContainer);
}

/**
 * Show sculpture details (placeholder for future implementation)
 */
function showSculptureDetails(sculpture) {
    alert(`Dettagli per: ${sculpture.name}\n\nArtista: ${sculpture.artist.fullName}\nPeriodo: ${sculpture.period}\n\n${sculpture.description}`);
}

/**
 * Show loading state
 */
function showLoading() {
    const container = document.getElementById('sculptures-container');
    container.innerHTML = `
        <div class="loading" style="text-align: center; padding: 60px 20px; color: var(--color-accent);">
            <div style="font-size: 24px; margin-bottom: 15px;">🔄</div>
            <div style="font-size: 18px;">Caricamento sculture...</div>
        </div>
    `;
}

/**
 * Show error message
 */
function showError(message) {
    const container = document.getElementById('sculptures-container');
    container.innerHTML = `
        <div class="error" style="text-align: center; padding: 60px 20px; color: var(--color-text);">
            <h3 style="color: #ff6b6b; margin-bottom: 15px;">⚠️ Errore</h3>
            <p style="margin-bottom: 20px; color: var(--color-muted-text);">${message}</p>
            <button onclick="loadSculptures()" style="padding: 12px 24px; background: var(--color-accent); color: var(--color-background); border: none; border-radius: 5px; cursor: pointer; font-size: 16px; font-weight: 500; transition: background 0.3s ease;">
                Riprova
            </button>
        </div>
    `;
}

/**
 * Handle image loading errors
 */
function handleImageError(img) {
    img.style.display = 'none';
    const noImageDiv = img.nextElementSibling;
    if (noImageDiv && noImageDiv.classList.contains('no-image')) {
        noImageDiv.style.display = 'flex';
    }
}

/**
 * Handle search form submission
 */
function handleSearch(event) {
    if (event) event.preventDefault();
    
    const searchInput = document.querySelector('.search-bar');
    const searchTerm = searchInput ? searchInput.value.trim() : '';
    
    console.log('Search submitted:', searchTerm);
    
    // Load sculptures with search term
    loadSculptures(searchTerm);
}

/**
 * Toggle menu function (placeholder for navigation)
 */
function toggleMenu() {
    console.log('Menu toggle clicked');
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

/**
 * Utility function to refresh the page data
 */
function refreshSculptures() {
    const searchInput = document.querySelector('.search-bar');
    const currentSearch = searchInput ? searchInput.value.trim() : '';
    loadSculptures(currentSearch);
}

/**
 * Initialize when DOM is ready
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing page...');
    initializePage();

    // Add search functionality
    const searchForm = document.querySelector('.search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', handleSearch);
    }

    // Add real-time search (optional)
    const searchInput = document.querySelector('.search-bar');
    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                handleSearch();
            }, 500); // Wait 500ms after user stops typing
        });
    }
});

/**
 * Handle window errors
 */
window.addEventListener('error', function(event) {
    console.error('Global error:', event.error);
});

/**
 * Export functions for external use (if needed)
 */
if (typeof window !== 'undefined') {
    window.MiraBG = {
        loadSculptures,
        refreshSculptures,
        handleSearch,
        toggleMenu,
        showSculptureDetails,
        navigateToArt,
        navigateToAuthor,
        saveDataToStorage,
        getDataFromStorage
    };
}