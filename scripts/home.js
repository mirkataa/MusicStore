document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const href = this.getAttribute("href");
            if (href.startsWith("#")) { 
                e.preventDefault();
                const sectionId = href.substring(1);
                document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Hero btn Click
    document.querySelector(".cta").addEventListener("click", function () {
        window.location.href = "shop.html"; 
    });

    // Search btnn Alert (Placeholder func)
    document.querySelector(".search-bar button").addEventListener("click", function () {
        let query = document.querySelector(".search-bar input").value;
        alert("You searched for: " + query);
    });
});
