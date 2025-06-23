async function generateFunFact() {
    const fact = document.getElementById("fun-fact");
    try {
        fact.textContent = "Loading...";
        const res = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en");
        const data = await res.json();
        fact.textContent = data.text;
    } catch {
        fact.textContent = "Couldn't load a fact. Try again!";
    }
}