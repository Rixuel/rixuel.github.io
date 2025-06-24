const searchInput = document.getElementById('search');
const suggestions = document.getElementById('suggestions');
const clearBtn = document.getElementById('clear-btn');
let debounceTimeout;
let selectedIndex = -1 // For Up and Down arrow keys

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
                data.data.forEach((anime, index) => {
                    selectedIndex = -1; // to reset state
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
        selectedIndex = (selectedIndex - 1 + items.length) % items.length;
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
    console.log("anime.mal_id:", anime.mal_id);
    console.log("searchInput.value:", searchInput.value);
    document.getElementById("animeCharacters").innerHTML = ""; // To clear previous characters list
    getAnimeById(anime.mal_id);
    getAnimeCharacters(anime.mal_id);
}

async function getAnimeById(animeId) {
    console.log("Anime by Id URL: ", `https://api.jikan.moe/v4/anime/${animeId}`);
    try {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${animeId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const dataJSON = await response.json();
        const titles = dataJSON.data?.titles || [];
        const imageURL = dataJSON.data?.images.jpg.large_image_url;
        //console.log("imageURL: ", imageURL);

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
        /*console.log("Default:", defaultTitle);
        console.log("Synonym:", synonymTitle);
        console.log("Foreign:", foreignTitle);
        console.log("English:", englishTitle);*/

        document.getElementById("animeImage").innerHTML = `<img src="${imageURL}" class="img-fluid rounded">`;
        document.getElementById("animeForeignTitles").innerHTML = foreignTitle + " (" + defaultTitle + ")";
        document.getElementById("animeEngTitles").innerHTML = englishTitle + " (" + synonymTitle + ")";


        //document.getElementById("animeOutput").innerHTML = dataJSON.data.titles[0].title;
        
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
        const charactersLength = dataJSON.data.length;
        console.log("Total Characters: ", charactersLength);

        const container = document.getElementById("animeCharacters");

        // Add title header
        container.innerHTML = `<div class="fs-3 fs-md-2 fs-lg-1">List of characters</div>`;

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
            voiceActors.forEach(va => {
                const vaName = va.person.name;
                const vaImage = va.person.images.jpg.image_url;
                const vaLang = va.language;

                vaHTML += `
                    <div class="d-flex align-items-centerr mt-2">
                        <img src="${vaImage}" alt="${vaName}" class="me-2 rounded" style="width: 40px; height: 40px; object-fit: cover;">
                        <div>
                        <div><strong>${vaName}</strong></div>
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