// // Runs as soon as the redirect page begins loading
// function autoClick() {
//     const link = document.querySelector("a[href^='http']");
//     if (link) {
//         console.log("Auto Redirecting to:", link.href);
//         window.location.href = link.href; // FASTEST possible redirect
//     } else {
//         // Retry quickly if Google's DOM loads slow
//         setTimeout(autoClick, 20);
//     }
// }

// autoClick();







// FASTEST redirect possible — no need to wait for DOM
(function () {
    const url = new URL(window.location.href);
    const target = url.searchParams.get("q");

    if (target && target.startsWith("http")) {
        console.log("Instant redirect:", target);
        window.location.replace(target); // faster than href=...
    } else {
        // fallback (if Google changes HTML structure)
        const tryClick = () => {
            const link = document.querySelector("a[href^='http']");
            if (link) window.location.replace(link.href);
            else setTimeout(tryClick, 10);
        };
        tryClick();
    }
})();
