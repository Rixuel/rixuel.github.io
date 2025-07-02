async function viewJSON(){
    const resturl = document.getElementById("urlInput").value.trim();
    // Only want http or https links
    if (!resturl.startsWith('http://') && !resturl.startsWith('https://')) {
        return;
    }

    console.log(resturl);

    const response = await fetch(`${resturl}`);
    const json = await response.json();
    const formatted = JSON.stringify(json, null, 3);
    // Split lines
    const lines = formatted.split('\n');

    // Render each JSON line wrapped in a div for hover support
    const jsonbox = document.getElementById("jsonbox");
    jsonbox.innerHTML = lines.map(line => `<div class="json-line">${escapeHtml(line)}</div>`).join('');
}

function escapeHtml(text) {
    return text.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

function runScript(e) {
    if (e.keyCode == 13) viewJSON();
}
