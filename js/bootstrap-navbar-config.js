// Bootstrap Navbar menu
function navbar() {
    "use strict";
    var menubar = `
        <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-custom-style setOpacity" data-bs-theme="dark">
            <div class="container testborder">
                <a class="navbar-brand user-select-nonee" href="index.html">
                    <img src="img/rixuel-logo.png" alt="Bootstrap" width="112" height="28">
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <i class="bi bi-list"></i>
                </button>

                <div class="offcanvas offcanvas-end navbar-custom-style" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                    <div class="offcanvas-body">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" id="menuHome" href="./"><i class="bi bi-house"></i> Home</a>
                            </li>
                            <li class="nav-item dropdown"> 
                                <a class="nav-link dropdown-toggle" id="menuProjects" href="projects.html" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <i class="bi bi-code-slash"></i> Projects
                                </a>
                                <ul class="dropdown-menu navbar-custom-style">
                                    <li><a class="dropdown-item" href="projects.html">Go to Projects page</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="app/cer"><i class="bi bi-currency-exchange"></i> Cash Exchange Rates</a></li>
                                    <li><a class="dropdown-item" href="app/crypto"><i class="bi bi-code-square"></i> Crypto</a></li>
                                    <li><a class="dropdown-item" href="app/sortlist"><i class="bi bi-list-ol"></i> Sort the List</a></li>
                                    <li><a class="dropdown-item" href="app/viewjson"><i class="bi bi-filetype-json"></i> View JSON</a></li>
                                </ul>
                            </li>
                        </ul>

                        <span class="navbar-text">
                            <a class="navbar-right-item" href="https://discord.gg/qhCsvqT"><i class="bi bi-discord"></i> Discord</a>
                            <a class="navbar-right-item" href="https://www.youtube.com/c/LordRixuel"><i class="bi bi-youtube"></i> Youtube</a>
                            <a class="navbar-right-item" href="https://github.com/Rixuel"><i class="bi bi-github"></i> Github</a>
                        </span>

                        <!--span class="d-flex">
                            <button class="btn btn-outline-success">Search</button>
                        </span-->

                        <!--ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link"><i class="bi bi-discord"></i> Discord</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link"><i class="bi bi-youtube"></i> Youtube</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link"><i class="bi bi-github"></i> Github</a>
                            </li>
                        </ul-->
                    </div>

                </div>

            </div>
        </nav>
    `;

    document.getElementById("menubar").innerHTML = menubar;
    checkPageWithMenu();
}

// To get the page file name at the end of the URL without the .html
function checkPageWithMenu() {
    "use strict";

    var n = window.location.href.lastIndexOf('/'),
         /*Get name.html */
        pageWithExt = window.location.href.substring(n + 1),

        ndot = window.location.href.lastIndexOf('.'),
        /*Get .html */
        Ext = window.location.href.substring(ndot),

        /*Get name */
        pageWithoutExt = pageWithExt.replace(Ext, "");

    if (pageWithoutExt.toString().toLowerCase() === "") {
        selectedMenu("menuHome");
    }
    if (pageWithoutExt.toString().toLowerCase() === "index") {
        selectedMenu("menuHome");
    }
    if (pageWithoutExt.toString().toLowerCase() === "projects") {
        selectedMenu("menuProjects");
    }
}

// CSS Style to underline the current menu choice.
function selectedMenu(id) {
    "use strict";
    var Style = document.getElementById(id).style;
    Style.color = "rgb(0, 204, 0)";
    Style.borderBottom = "4px solid rgb(0, 204, 0)";
    Style.paddingBottom = "4px";
}
