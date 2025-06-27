const searchInput = document.getElementById('search');
const suggestions = document.getElementById('suggestions');
const clearBtn = document.getElementById('clear-btn');
let debounceTimeout;
let selectedIndex = -1 // For Up and Down arrow keys in suggestion list
let activeModalSession = null;
const LOCAL_STORAGE_EXPIRE_TIME = 1000 * 60 * 60 * 24 * 7;

searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim();
    clearTimeout(debounceTimeout);
    suggestions.innerHTML = '';

    if (query.length < 2) return;

    debounceTimeout = setTimeout(() => {
        fetch(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&limit=5`)
            .then(res => res.json())
            .then(data => {
                suggestions.innerHTML = ''; // To avoid a duplicated list when you enter a title and you press backspace.
                selectedIndex = -1; // to reset state
                data.data.forEach((anime, index) => {
                    const li = document.createElement('li');
                    li.className = 'list-group-item bg-dark text-light suggestion-item custom-suggestion-list';

                    // Highlight matching part
                    const regex = new RegExp(`(${query})`, 'i');
                    const highlighted = anime.title.replace(regex, '<strong>$1</strong>');
                    li.innerHTML = highlighted;
                    
                    li.dataset.index = index;
                    li.addEventListener('click', () => {
                        selectSuggestion(anime); // Do something in that function
                    });
                    suggestions.appendChild(li);
                });
            });
    }, 300);
});

// Clear button click
clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    suggestions.innerHTML = '';
    searchInput.focus();
    console.log("Clear button clicked!");
});

// Hide suggestions on outside click
document.addEventListener('click', (e) => {
    if (!e.target.closest('#search') && !e.target.closest('#suggestions')) {
        suggestions.innerHTML = '';
    }
});

// For moving UP and DOWN with arrow keys
searchInput.addEventListener('keydown', (e) => {
    const items = suggestions.querySelectorAll('.suggestion-item');
    if (!items.length) return;

    if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedIndex = (selectedIndex + 1) % items.length;
        updateHighlight(items);
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (selectedIndex === -1) {
            selectedIndex = items.length - 1; // Jump to last if nothing is selected yet
        } else {
            selectedIndex = (selectedIndex - 1 + items.length) % items.length;
        }
        updateHighlight(items);
    } else if (e.key === 'Enter') {
        e.preventDefault();
        if (selectedIndex >= 0) {
            items[selectedIndex].click(); // simulate click
        }
    } else if (e.key === 'Escape') {
        suggestions.innerHTML = '';
    }
});

function updateHighlight(items) {
    items.forEach((item, index) => {
        item.classList.toggle('active', index === selectedIndex);
    });
}

function selectSuggestion(anime) {
    searchInput.value = anime.title;
    suggestions.innerHTML = '';
    // Optional: do something with anime.mal_id
    console.log("Anime MAL id:", anime.mal_id);
    console.log("Search input:", searchInput.value);
    document.getElementById("animeCharacters").innerHTML = ""; // To clear previous characters list
    getAnimeById(anime.mal_id);
    getAnimeCharacters(anime.mal_id);
}

async function getAnimeById(animeId) {
    console.log("Anime by id URL: ", `https://api.jikan.moe/v4/anime/${animeId}`);
    try {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${animeId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const dataJSON = await response.json();
        const titles = dataJSON.data?.titles || [];
        const studios = dataJSON.data?.studios || [];
        const genres = dataJSON.data?.genres || [];
        const themes = dataJSON.data?.themes || [];
        const airedDates = dataJSON.data?.aired.string || ["N/A"];
        const imageURL = dataJSON.data?.images.jpg.large_image_url;
        //console.log("imageURL: ", imageURL);
        const MALscore = dataJSON.data?.score || ["N/A"];
        const MALscoreUsers = dataJSON.data?.scored_by || ["N/A"];
        const MALrank = dataJSON.data?.rank || [""];
        const MALpopularity = dataJSON.data?.popularity || ["N/A"];
        /*console.log("MALscore: ", MALscore);
        console.log("MALscoreUsers: ", MALscoreUsers);
        console.log("MALrank: ", MALrank);
        console.log("MALpopularity: ", MALpopularity);*/

        // In the JSON, get every item of "titles": [...]. We want to get each title.
        const getTitle = (type) =>
            titles.find((item) => item.type === type)?.title || "N/A";
        
        const defaultTitle = getTitle("Default");
        const synonymTitle = getTitle("Synonym");
        const foreignTitle = getTitle("Japanese");
        const englishTitle = getTitle("English");
        // To show all studios of "studios": [..., ...]
        const studioNames = studios.map(item => 
            `<span class="badge bg-light text-dark me-2 rounded-pill">${item.name}</span>`
        ).join("");
        // To show all genres of "genres": [..., ...]
        const genreNames = genres.map(item => 
            `<span class="badge bg-success me-2 rounded-pill">${item.name}</span>`
        ).join("");
        // To show all themes of "themes": [..., ...]
        const themeNames = themes.map(item => 
            `<span class="badge bg-warning text-dark me-2 rounded-pill">${item.name}</span>`
        ).join("");
        /*console.log("Default:", defaultTitle);
        console.log("Synonym:", synonymTitle);
        console.log("Foreign:", foreignTitle);
        console.log("English:", englishTitle);
        console.log("studioName:", studioName);*/
        const animeDetailsHTML = `
            <div class="row mb-3 align-items-center">
                <div class="col-md-2">
                    <img src="${imageURL}" class="img-fluid rounded">
                </div>
                <div class="col-md-10 d-flex align-items-center">
                    <div class="w-100">
                        <div class="fs-3 fs-md-2 fs-lg-1">
                            ${foreignTitle} <span class="fs-5 fs-md-5 fs-lg-4 text-secondary">(${defaultTitle})</span>
                        </div>
                        <div class="fs-3 fs-md-2 fs-lg-1">
                            ${englishTitle} <span class="fs-5 fs-md-5 fs-lg-4 text-secondary">(${synonymTitle})</span>
                        </div>
                        <div class="mt-2">Studio: ${studioNames}</div>
                        <div>Genres: ${genreNames}</div>
                        <div>Themes: ${themeNames}</div>
                        <div>Aired: ${airedDates}</div>
                        <div class="bg-dark text-light my-2 p-2 d-flex flex-wrap gap-2 rounded">
                            <div>
                                MAL Score: <span class="badge bg-primary fs-6 rounded-pill">${MALscore}</span> 
                                <i>by ${MALscoreUsers} users</i> | 
                            </div>
                            <div>
                                Rank <span class="badge bg-secondary fs-6 rounded-pill">#${MALrank}</span> | 
                            </div>
                            <div>
                                Popularity: <span class="badge bg-secondary fs-6 rounded-pill">#${MALpopularity}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.getElementById("animeDetailsWrapper").innerHTML = animeDetailsHTML;
    } catch (error) {
        console.error("Error fetching anime data:", error.message);
    }
}

async function getAnimeCharacters(animeId) {
    console.log("Anime Characters URL: ", `https://api.jikan.moe/v4/anime/${animeId}/characters`);
    try {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${animeId}/characters`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const dataJSON = await response.json();
        const animeCharacters = dataJSON.data;
        const totalCharacters = animeCharacters.length;
        //console.log("Total Characters: ", totalCharacters);

        const container = document.getElementById("animeCharacters");

        // Add title header
        container.innerHTML = `<div class="fs-3 fs-md-2 fs-lg-1"><i class="bi bi-file-person me-1"></i>List of ${totalCharacters} characters</div>`;

        animeCharacters.forEach(entry => {
            const characterName = entry.character.name;
            const characterImage = entry.character.images.jpg.image_url;
            const voiceActors = entry.voice_actors;

            /*console.log("Name:", characterName);
            console.log("Image:", characterImage);
            console.log("-------------");*/

            const col = document.createElement("div");
            col.className = "col-12 col-sm-6 col-md-4 col-lg-3";

            // Build voice actors HTML
            let vaListHTML = "";
            // To get every item of "voice_actors": [...]
            voiceActors.forEach(va => {
                const vaName = va.person.name;
                const vaMalId = va.person.mal_id;
                const vaImage = va.person.images.jpg.image_url;
                const vaLang = va.language;

                vaListHTML += `
                    <div class="d-flex align-items-center mt-2">
                        <img src="${vaImage}" alt="${vaName}" class="me-2 rounded" style="width: 40px; height: 40px; object-fit: cover;" loading="lazy">
                        <div>
                            <div>
                                <a href="#" class="va-link text-decoration-none" data-bs-toggle="modal" data-bs-target="#vaModal" 
                                    data-name="${vaName}" data-image="${vaImage}" data-lang="${vaLang}" data-vamalid="${vaMalId}">
                                    <strong>${vaName}</strong>
                                </a>
                            </div>
                            <div class="small">${vaLang}</div>
                        </div>
                    </div>
                `;
            });

            // Final character card
            col.innerHTML = `
                <div class="card fade-in bg-dark text-light h-100">
                    <img src="${characterImage}" class="card-img-top" alt="${characterName}" loading="lazy">
                    <div class="card-body">
                        <h5 class="card-title custom-card-charname">${characterName}</h5>
                        <div>${vaListHTML}</div>
                    </div>
                </div>
            `;
            container.appendChild(col);

            // fade in when scrolling into view for that div card .fade-in
            const card = col.querySelector('.fade-in');
            if (card) observer.observe(card);
        });
    } catch (error) {
        console.error("Failed to fetch characters:", error);
    }
}

/*
    Fade-in animations when elements scroll into view
*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // optional: only once
        }
    });
});

/*
    For Modal
*/
document.addEventListener('click', function (e) {
    if (e.target.closest('.va-link')) {
        const link = e.target.closest('.va-link');
        const name = link.dataset.name;
        const vaMalId = link.dataset.vamalid;
        const image = link.dataset.image;
        const lang = link.dataset.lang;

        // Update modal info
        document.getElementById('vaModalLabel').textContent = `${name} (${vaMalId})`;
        document.getElementById('vaModalName').textContent = name;
        document.getElementById('vaModalImage').src = image;
        document.getElementById("vaModalImageLink").href = image;
        document.getElementById('vaModalLang').textContent = `Language dub: ${lang}`;
        document.getElementById('vaModalCharacters').innerHTML = ""; // Clear any old content

        // Show the button
        const topCharButton = document.getElementById('triggerTopCharacters');
        topCharButton.style.display = "inline-block";
        topCharButton.onclick = function () {
            topCharButton.style.display = "none"; // hide it after click
            checkTopCharacters(vaMalId); // Call your function
        };

    }
});

async function checkTopCharacters(vaMalId) {
    // For closing and opening another modal.
    activeModalSession = Date.now(); // create a new session token
    const session = activeModalSession; // capture it locally

    try {
        const mainCharacters = await getMainCharactersVoicedBy(vaMalId);
        // Fetch favorites in parallel
        const charactersWithFavorites = [];
        const vaModalCharactersProgress = document.getElementById("vaModalCharacters");
        vaModalCharactersProgress.innerHTML = `
            <div class="d-flex justify-content-center align-items-center">
                <div class="spinner-border spinner-border-sm me-2" role="status"></div>
                <span id="progressCount">Compiling top 10 main characters... (0/${mainCharacters.length})</span>
            </div>
            <div id="rateLimitMsg" class="text-danger small mt-1"></div>
        `;
        const progressCount = document.getElementById("progressCount");
        const rateLimitMsg = document.getElementById('rateLimitMsg');

        for (const char of mainCharacters) {
            // modal was changed/closed when loading
            if (session !== activeModalSession) {
                console.log("modal was changed/closed when loading");
                return;
            }

            // getCharacterFavorites will handle the delay to avoid hitting API limit rate.
            const favorites = await getCharacterFavorites(char.id);

            // You plug "favorites" to the char object.
            // With "...char", "favorites" is merged at the same level as name, id, etc. from char object.
            charactersWithFavorites.push({ ...char, favorites });

            // Progress UI update
            if (session === activeModalSession) {
                progressCount.textContent = `
                    Compiling top 10 main characters... (${charactersWithFavorites.length}/${mainCharacters.length})
                `;
            }
        }


        // final render after all fetched
        if (session === activeModalSession) {
            // Sort by favorites descending and take top 10
            const top10char = charactersWithFavorites
                .sort((a, b) => b.favorites - a.favorites)
                .slice(0, 10);
            
            // Generate Top Main Char row HTML
            const listHTML = top10char.map((char, index) => `
                    <li class="d-flex align-items-center mb-2 custom-top-char-row">
                        <div class="me-2 text-center" style="width: 40px; flex-shrink: 0;">
                            <span class="fs-5">${index + 1}</span>
                        </div>
                        <img src="${char.image}" alt="${char.name}" class="me-2 rounded"
                            style="width: 50px; height: 50px; object-fit: cover; flex-shrink: 0;" loading="lazy">

                        <div class="flex-grow-1 text-start" style="min-width: 0;">
                            <div><strong class="fs-6 text-break me-1">${char.name}</strong><span class="text-secondary small">(#${char.id})</span></div>
                            <div class="text-info text-break"><em>${char.animeTitle}</em></div>
                            <div class="text-warning small">❤ ${char.favorites.toLocaleString()} favorites</div>
                        </div>
                     </li>
                `)
                .join('');
            vaModalCharactersProgress.innerHTML = `
                <div class="fs-4 fs-md-3 fs-lg-2 mb-2 text-center text-warning">Top 10 main characters</div>
                <ul class="list-unstyled small">${listHTML}</ul>
            `;

            // Optional: Clear any rate limit message
            if (rateLimitMsg) rateLimitMsg.innerHTML = "";
        }
    } catch (err) {
        console.error("checkTopCharacters failed:", err);
        document.getElementById('vaModalCharacters').innerHTML = `
            <div class="text-danger">An error occurred while loading character data.</div>
        `;
    }
}

async function getMainCharactersVoicedBy(vaId) {
    console.log("Voiced Characters from VA: ", `https://api.jikan.moe/v4/people/${vaId}/voices`);
    try {
        const response = await fetch(`https://api.jikan.moe/v4/people/${vaId}/voices`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const dataJSON = await response.json();
        const allVoices = dataJSON.data || []; // At "data": [{...},{...}]

        // Use a Set to store unique character names
        const seen = new Set(); // Because we want to avoid duplicates
        const mainCharacters = [];

        allVoices.forEach(entry => {
            // Getting characters where the role is Main and the anime is popular
            if (entry.role === "Main") {
                const char = {
                    id: entry.character.mal_id,
                    name: entry.character.name,
                    animeTitle: entry.anime.title,
                    image: entry.character.images?.jpg?.image_url || ""
                };

                // If the character is not a duplicate, add it.
                if (!seen.has(char.id)) {
                    seen.add(char.id);
                    mainCharacters.push(char);
                }
            }
        });

        //console.log("Main characters:", mainCharacters);
        return mainCharacters;
    } catch (error) {
        console.error("Failed to fetch voice roles:", error.message);
        return [];
    }
}

// Gotta avoid 429 error and try not making too many requests
const favoritesCache = {};
async function getCharacterFavorites(charMalId, retry = 2) {
    // Use in-memory cache first
    if (favoritesCache[charMalId] !== undefined) {
        return favoritesCache[charMalId]; // Return cached result if available
    }

    // Check localStorage
    try {
        const stored = localStorage.getItem(`fav_of_character_${charMalId}`);
        if (stored) {
            const { value, timestamp } = JSON.parse(stored);
            const notExpired = Date.now() - timestamp < LOCAL_STORAGE_EXPIRE_TIME;
            if (notExpired) {
                favoritesCache[charMalId] = value;
                return value;
            }
            localStorage.removeItem(`fav_of_character_${charMalId}`);
        }
    } catch {
        localStorage.removeItem(`fav_of_character_${charMalId}`);
    }

    //console.log("Characters Info URL: ", `https://api.jikan.moe/v4/characters/${charMalId}`);
    console.log("Getting Character with favorites...");
    try {
        await delay(1000); // To avoid API rate limit
        const response = await fetch(`https://api.jikan.moe/v4/characters/${charMalId}`);
        // Check for 429 Too Many Requests
        if (response.status === 429) {
            const rateLimitMsg = document.getElementById('rateLimitMsg');
            if (rateLimitMsg) {
                rateLimitMsg.innerHTML = `
                    <strong>Jikan API rate limit hit. Progressing slowly...</strong>
                `;
            }
            await delay(1100);
            if (retry > 0) return getCharacterFavorites(charMalId, retry - 1);
            return 0;
        }
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const dataJSON = await response.json();
        const fav = dataJSON.data.favorites || 0;
        // Store in cache
        favoritesCache[charMalId] = fav;
        // Store in localStorage
        localStorage.setItem(`fav_of_character_${charMalId}`,
            JSON.stringify({ value: fav, timestamp: Date.now() })
        );
        return fav;
    } catch (error) {
        console.error("Error fetching favorites:", error.message);
        if (retry > 0) {
            await delay(1100);
            return getCharacterFavorites(charMalId, retry - 1);
        }
        return 0; // fallback if error occurs
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const vaModal = document.getElementById('vaModal');
// Fix accessibility warning by blurring the focused element before hiding
vaModal.addEventListener('hide.bs.modal', () => {
    // Move focus to body or blur the currently focused element
    if (document.activeElement && vaModal.contains(document.activeElement)) {
        document.activeElement.blur();
    }
});

// When the bootstrap modal is closed, making sure nothing in the background is still running.
document.getElementById('vaModal').addEventListener('hidden.bs.modal', () => {
    activeModalSession = null;
    document.getElementById('vaModalCharacters').innerHTML = ""; // clear old content
});

// Toast for the button Clear Local Storage
document.getElementById("clearCacheBtn").addEventListener("click", () => {
    Object.keys(localStorage).forEach(key => {
        if (key.startsWith("fav_of_character_")) {
            localStorage.removeItem(key);
        }
    });
    const toastEl = document.getElementById("clearToast");
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
});

// Toast for the button Check Local Storage Size
document.getElementById("checkStorageBtn").addEventListener("click", () => {
    let totalBytes = 0;
    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            const item = localStorage.getItem(key);
            totalBytes += key.length + item.length;
        }
    }
    const mb = (totalBytes / (1024 * 1024)).toFixed(2);

    const body = document.getElementById("storageToastBody");
    body.textContent = `Local Storage usage: ${mb} MB / 5 MB`;

    const toast = new bootstrap.Toast(document.getElementById("storageToast"));
    toast.show();
});
