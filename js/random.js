// To keep an active tab after a page refresh
/*
// localStorage version
document.addEventListener('DOMContentLoaded', function () {
    // Store active tab on tab change
    document.querySelectorAll('button[data-bs-toggle="pill"]').forEach(function (tabLink) {
        tabLink.addEventListener('shown.bs.tab', function (event) {
            localStorage.setItem('lastActiveTab', event.target.getAttribute('id'));
        });
    });

    // Activate the last active tab after reload
    const lastTab = localStorage.getItem('lastActiveTab');
    if (lastTab) {
        const triggerEl = document.querySelector(`button[id="${lastTab}"]`);
        if (triggerEl) {
            new bootstrap.Tab(triggerEl).show();
        }
    }
});
*/
/*
// hash version
document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll('button[data-bs-toggle="pill"]');

    // Restore tab from URL hash
    if (window.location.hash) {
        const targetTab = document.querySelector(`button[data-bs-target="${window.location.hash}"]`);
        if (targetTab) {
            const tab = new bootstrap.Tab(targetTab);
            tab.show();
        }
    }

    // Update hash when tab changes
    tabButtons.forEach(button => {
        button.addEventListener('shown.bs.tab', function (event) {
            const target = event.target.getAttribute("data-bs-target");
            if (target) {
                history.replaceState(null, null, target); // updates URL hash
            }
        });
    });
});
*/
// sessionStorage version
document.addEventListener("DOMContentLoaded", function () {
    // Restore active pill from sessionStorage
    const savedPill = sessionStorage.getItem("activePill");
    if (savedPill) {
        const trigger = document.querySelector(`[data-bs-target="${savedPill}"]`);
        if (trigger) {
            const pill = new bootstrap.Tab(trigger);
            pill.show();
        }
    }

    // Save pill when clicked
    const triggers = document.querySelectorAll('button[data-bs-toggle="pill"]');
    triggers.forEach(trigger => {
        trigger.addEventListener("shown.bs.tab", function (event) {
            const target = event.target.getAttribute("data-bs-target");
            sessionStorage.setItem("activePill", target);
        });
    });
});