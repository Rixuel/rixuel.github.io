const searchInput = document.getElementById('search');
const suggestions = document.getElementById('suggestions');
const clearBtn = document.getElementById('clear-btn');
let debounceTimeout;
let selectedIndex = -1 // For Up and Down arrow keys
let activeModalSession = null;

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
        
        //Seven Nation Army feat. Chara -> n/a
        //Ryuusei Sentai Musumet --> n/a
        //Senpai wa Otokonoko. -> ok
        const defaultTitle = getTitle("Default");
        const synonymTitle = getTitle("Synonym");
        const foreignTitle = getTitle("Japanese");
        const englishTitle = getTitle("English");
        const studioNames = studios.map(item => 
            `<span class="badge bg-light text-dark me-2 rounded-pill">${item.name}</span>`
        ).join(""); // To show all studios of "studios": [..., ...]
        const genreNames = genres.map(item => 
            `<span class="badge bg-success me-2 rounded-pill">${item.name}</span>`
        ).join(""); // To show all genres of "genres": [..., ...]
        const themeNames = themes.map(item => 
            `<span class="badge bg-warning text-dark me-2 rounded-pill">${item.name}</span>`
        ).join(""); // To show all themes of "themes": [..., ...]
        /*console.log("Default:", defaultTitle);
        console.log("Synonym:", synonymTitle);
        console.log("Foreign:", foreignTitle);
        console.log("English:", englishTitle);
        console.log("studioName:", studioName);*/

        document.getElementById("animeImage").innerHTML = `<img src="${imageURL}" class="img-fluid rounded">`;
        document.getElementById("animeForeignTitles").innerHTML = `${foreignTitle} <span class="fs-5 fs-md-5 fs-lg-4 text-secondary">(${defaultTitle})</span>`;
        document.getElementById("animeEngTitles").innerHTML = `${englishTitle} <span class="fs-5 fs-md-5 fs-lg-4 text-secondary">(${synonymTitle})</span>`;
        document.getElementById("animeStudios").innerHTML = `Studio: ${studioNames}`;
        document.getElementById("animeGenres").innerHTML = `Genres: ${genreNames}`;
        document.getElementById("animeThemes").innerHTML = `Themes: ${themeNames}`;
        document.getElementById("animeAiredDates").innerHTML = `Aired: ${airedDates}`;
        document.getElementById("animeStats").innerHTML = `
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
        `;
        
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
            let vaHTML = '';
            // To get every item of "voice_actors": [...]
            voiceActors.forEach(va => {
                const vaName = va.person.name;
                const vaMalId = va.person.mal_id;
                const vaImage = va.person.images.jpg.image_url;
                const vaLang = va.language;

                vaHTML += `
                    <div class="d-flex align-items-center mt-2">
                        <img src="${vaImage}" alt="${vaName}" class="me-2 rounded" style="width: 40px; height: 40px; object-fit: cover;">
                        <div>
                            <div>
                                <a href="#" class="va-link text-decoration-none" data-bs-toggle="modal" data-bs-target="#vaModal" 
                                    data-name="${vaName}" data-image="${vaImage}" data-lang="${vaLang}" data-malid="${vaMalId}">
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
                <div class="card bg-dark text-light h-100">
                    <img src="${characterImage}" class="card-img-top" alt="${characterName}" loading="lazy">
                    <div class="card-body">
                        <h5 class="card-title custom-card-charname">${characterName}</h5>
                        <div>${vaHTML}</div>
                    </div>
                </div>
            `;
            container.appendChild(col);
        });
        
    } catch (error) {
        console.error("Failed to fetch characters:", error);
    }
}

/*
    For Modal
*/
document.addEventListener('click', function (e) {
    if (e.target.closest('.va-link')) {
        const link = e.target.closest('.va-link');
        const name = link.dataset.name;
        const malId = link.dataset.malid;
        const image = link.dataset.image;
        const lang = link.dataset.lang;

        // Update modal info
        document.getElementById('vaModalLabel').textContent = `${name} (${malId})`;
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
            checkTopCharacters(malId); // Call your function
        };

    }
});

async function checkTopCharacters(malId) {
    // For closing and opening another modal.
    activeModalSession = Date.now(); // create a new session token
    const session = activeModalSession; // capture it locally

    try {
        const mainCharacters = await getMainCharactersVoicedBy(malId);
        // Fetch favorites in parallel
        const charactersWithFavorites = [];

        const batchSize = 1; // batchSize number at a time

        for (let i = 0; i < mainCharacters.length; i += batchSize) {
            // modal was changed/closed when loading
            if (session !== activeModalSession) {
                console.log("modal was changed/closed when loading");
                return;
            }

            // slice(start, end) returns a shallow copy of the array from index start (inclusive) to index end (exclusive).
            // batchSize is how many characters you want to process in one go.
            // batch = mainCharacters = ['A', 'B', 'C'], after that = ['D', 'E', 'F']
            const batch = mainCharacters.slice(i, i + batchSize);
            // Creating a promise for each character in the batch that does some async operation.
            // Like fetching favorites from the API
            const batchPromises = batch.map(async char => {
                try {
                    const favorites = await getCharacterFavorites(char.id);
                    // ...char is a character object.
                    // You plug favorites to the character object.
                    // To preserve all existing properties from char, and adding a new property (favorites) to the new object.
                    // With ...char, favorites is merged at the same level as name, id, etc. from char object.
                    return { ...char, favorites };
                } catch (err) {
                    console.error(`Failed to fetch favorites for ${char.name}:`, err.message);
                    return { ...char, favorites: 0 };
                }
            });

            // Wait for all the asynchronous operations in the current batch to complete
            // and it returns their results as an array.
            const batchResults = await Promise.all(batchPromises);
            // uses the spread operator (...) to add all items from the batchResults array 
            // into the charactersWithFavorites array one by one.
            charactersWithFavorites.push(...batchResults);

            // Update progress UI
            if (session === activeModalSession) {
                document.getElementById("vaModalCharacters").innerHTML = `
                    <div>
                        <div class="spinner-border spinner-border-sm me-2" role="status"></div>
                        Compiling top 10 favorite main characters... (${Math.min(i + batchSize, mainCharacters.length)}/${mainCharacters.length})
                    </div>
                    <div id="rateLimitMsg" class="text-danger small mt-1"></div>
                `;
            }
            await delay(1000); // delay between batches to avoid rate limit
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
                            style="width: 50px; height: 50px; object-fit: cover; flex-shrink: 0;">

                        <div class="flex-grow-1 text-start" style="min-width: 0;">
                            <div><strong class="fs-6 text-break me-1">${char.name}</strong><span class="text-secondary small">(#${char.id})</span></div>
                            <div class="text-info text-break"><em>${char.animeTitle}</em></div>
                            <div class="text-warning small">❤ ${char.favorites.toLocaleString()} favorites</div>
                        </div>
                     </li>
                `)
                .join('');
            document.getElementById('vaModalCharacters').innerHTML = `
                <div class="fs-4 fs-md-3 fs-lg-2 mb-2 text-center text-warning">Top 10 main characters</div>
                <ul class="list-unstyled small">${listHTML}</ul>
            `;

            // Optional: Clear any rate limit message
            const rateLimitMsg = document.getElementById('rateLimitMsg');
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
async function getCharacterFavorites(malId, retry = 2) {
    if (favoritesCache[malId]) {
        return favoritesCache[malId]; // Return cached result if available
    }
    //console.log("Characters Info URL: ", `https://api.jikan.moe/v4/characters/${malId}`);
    console.log("Getting Character with favorites...");
    try {
        const response = await fetch(`https://api.jikan.moe/v4/characters/${malId}`);
        // Check for 429 Too Many Requests
        if (response.status === 429) {
            const rateLimitMsg = document.getElementById('rateLimitMsg');
            if (rateLimitMsg) {
                rateLimitMsg.innerHTML = `
                    <strong>Jikan API rate limit hit. Progressing slowly...</strong>
                `;
            }
            await delay(2500);
            if (retry > 0) return getCharacterFavorites(malId, retry - 1);
            return 0;
        }
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const fav = data.data.favorites || 0;
        favoritesCache[malId] = fav; // Store in cache
        return fav;
    } catch (error) {
        console.error("Error fetching favorites:", error.message);
        if (retry > 0) {
            await delay(1000);
            return getCharacterFavorites(malId, retry - 1);
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
