// To keep an active tab after a page refresh
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