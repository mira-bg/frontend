/**
 * MiraDB Sculptures Client
 * Handles API communication and UI updates for sculptures display
 */

class MiraDBClient {
    constructor(baseUrl) {
        this.baseUrl = baseUrl.endsWith('/') ? baseUrl : baseUrl + '/';
        this.apiUrl = this.baseUrl + 'api/';
    }

    /**
     * Fetch sculptures from API with optional search term
     */
    async fetchSculptures(limit = 100, offset = 0, searchTerm = '') {
        try {
            let url = `${this.apiUrl}opere-list?tipologia=Scultura&limit=${limit}&offset=${offset}`;
            
            if (searchTerm) {
                url += `&search=${encodeURIComponent(searchTerm)}`;
            }
            
            console.log('Fetching from URL:', url);
            
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('API Response:', data);
            return data;
        } catch (error) {
            console.error('Error fetching sculptures:', error);
            throw error;
        }
    }

    /**
     * Get all sculptures with automatic pagination
     */
    async getAllSculptures(searchTerm = '') {
        let allSculptures = [];
        let offset = 0;
        const limit = 100;
        let hasMore = true;

        try {
            while (hasMore) {
                console.log(`Fetching sculptures: offset ${offset}, limit ${limit}`);
                
                const response = await this.fetchSculptures(limit, offset, searchTerm);
                
                if (response.status === 'success' && response.data && response.data.opere) {
                    allSculptures = allSculptures.concat(response.data.opere);
                    hasMore = response.data.pagination?.has_more || false;
                    offset += limit;
                    
                    console.log(`Fetched ${response.data.opere.length} sculptures. Total: ${allSculptures.length}`);
                } else {
                    hasMore = false;
                }
            }

            return allSculptures;
        } catch (error) {
            console.error('Error getting all sculptures:', error);
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
            artist: {
                id: sculpture.artista?.id,
                fullName: sculpture.artista?.nome_completo || 'Unknown Artist',
                firstName: sculpture.artista?.nome,
                lastName: sculpture.artista?.cognome,
                pseudonym: sculpture.artista?.pseudonimo
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
 * Configuration - UPDATE THIS WITH YOUR API URL
 */
const API_CONFIG = {
    BASE_URL: 'http://your-api-domain.com' // REPLACE WITH YOUR ACTUAL API URL
};

/**
 * Initialize the application
 */
async function initializePage() {
    console.log('Initializing Mira-BG Sculptures page...');
    
    try {
        apiClient = new MiraDBClient(API_CONFIG.BASE_URL);
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
    const container = document.getElementById('sculptures-container');
    
    try {
        // Show loading state
        showLoading();
        
        console.log('Loading sculptures with search term:', searchTerm);
        
        // Fetch sculptures from API
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
            <div class="no-results">
                <h3>No sculptures found</h3>
                <p>Try adjusting your search terms or check back later.</p>
            </div>
        `;
        return;
    }

    // Create statistics info
    const statsHtml = `
        <div class="sculptures-stats">
            Found ${sculptures.length} sculpture${sculptures.length !== 1 ? 's' : ''}
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

        // Handle image display
        let imageHtml;
        if (sculpture.photos && sculpture.photos.length > 0) {
            imageHtml = `
                <img src="${sculpture.photos[0]}" 
                     alt="${sculpture.name}" 
                     onerror="handleImageError(this)"
                     loading="lazy">
                <div class="no-image" style="display: none;">
                    <span>📷</span><br>No image available
                </div>
            `;
        } else {
            imageHtml = `
                <div class="no-image">
                    <span>📷</span><br>No image available
                </div>
            `;
        }

        // Create artist display name
        const artistName = sculpture.artist.fullName || 
                          (sculpture.artist.pseudonym ? sculpture.artist.pseudonym : 'Unknown Artist');

        gridItem.innerHTML = `
            <h4 title="${sculpture.name}">${sculpture.name}</h4>
            ${imageHtml}
            <div class="artist-info">
                <p><strong>Artist:</strong> ${artistName}</p>
            </div>
            <p class="period-info"><strong>Period:</strong> ${sculpture.period}</p>
        `;

        // Add click event for future detail view
        gridItem.addEventListener('click', () => {
            console.log('Clicked sculpture:', sculpture);
            // Here you can add navigation to detail page
        });

        gridContainer.appendChild(gridItem);
    });

    // Update container
    container.innerHTML = statsHtml;
    container.appendChild(gridContainer);
}

/**
 * Show loading state
 */
function showLoading() {
    const container = document.getElementById('sculptures-container');
    container.innerHTML = '<div class="loading">Loading sculptures</div>';
}

/**
 * Show error message
 */
function showError(message) {
    const container = document.getElementById('sculptures-container');
    container.innerHTML = `
        <div class="error">
            <h3>⚠️ Error</h3>
            <p>${message}</p>
            <button onclick="loadSculptures()" style="margin-top: 10px; padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">
                Try Again
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
    event.preventDefault();
    
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim();
    
    console.log('Search submitted:', searchTerm);
    
    // Load sculptures with search term
    loadSculptures(searchTerm);
}

/**
 * Toggle menu function (placeholder for navigation)
 */
function toggleMenu() {
    console.log('Menu toggle clicked');
    // Add your menu toggle logic here
}

/**
 * Utility function to refresh the page data
 */
function refreshSculptures() {
    const searchInput = document.getElementById('searchInput');
    const currentSearch = searchInput ? searchInput.value.trim() : '';
    loadSculptures(currentSearch);
}

/**
 * Initialize when DOM is ready
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing page...');
    initializePage();
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
        toggleMenu
    };
}