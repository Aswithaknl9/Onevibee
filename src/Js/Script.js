document.addEventListener("DOMContentLoaded", function () {
    const routes = {
        "index.html": "home",
        "about.html": "about",
        "Products.html": "products",
        "Referrals.html": "referrals",
        "Contact.html": "contact"
    };

    function navigateTo(url, event) {
        if (event) event.preventDefault(); // Prevent default link behavior
        const normalizedUrl = url.toLowerCase(); // Convert to lowercase
        const pageId = routes[normalizedUrl] || "home";

        showPage(pageId); // Function to handle page visibility
        history.pushState({ pageId }, "", url);
    }

    function showPage(pageId) {
        document.querySelectorAll(".page").forEach(page => {
            page.classList.add("hidden");
        });
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.remove("hidden");
        } else {
            console.error(`Page ID "${pageId}" not found.`);
        }
    }

    window.onpopstate = (event) => {
        const pageId = event.state ? event.state.pageId : "home";
        showPage(pageId);
    };

    function toggleMenu() {
        document.getElementById("mobileMenu").classList.toggle("active");
    }

    document.querySelector(".mobile-menu-icon").addEventListener("click", toggleMenu);
});
