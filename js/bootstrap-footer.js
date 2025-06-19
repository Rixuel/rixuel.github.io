// Bootstrap Navbar menu
function footer() {
    "use strict";
    var footer = `
        <div class="container mx-auto custom-container-width">
            <div class="row footer">
                <div class="col-md-4">
                    <h1>Links</h1>
                    <ul>
                        <li><a href="./">Home</a></li>
                        <li><a href="random.html">Random</a></li>
                        <li><a href="projects.html">Projects</a></li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h1>Social Network</h1>
                    <ul>
                        <li><a href="https://github.com/Rixuel">Github</a></li>
                        <li><a href="https://www.youtube.com/c/LordRixuel">YouTube</a></li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h1>Discord</h1>
                    <ul>
                        <li>Username: rixuel</li>
                        <li>Server: <b><a href="https://discord.gg/qhCsvqT">Ethelysium</a></b></li>
                    </ul>
                </div>
            </div>
        </div>
    `;

    document.getElementById("footer").innerHTML = footer;
}