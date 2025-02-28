document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    document.querySelectorAll(".product").forEach(product => {
        const productName = product.querySelector("h2").textContent;
        const productPrice = product.querySelector("p").textContent;
        const productImage = product.querySelector("img").src;
        const productDescription = product.getAttribute("data-description") || "No description available.";

        product.querySelector(".view-details").addEventListener("click", function () {
            const productData = {
                name: productName,
                price: productPrice,
                image: productImage,
                description: productDescription,
            };

            localStorage.setItem("selectedProduct", JSON.stringify(productData));
            window.location.href = "product.html";
        });

        product.querySelector(".add-to-cart").addEventListener("click", function () {
            cart.push({ name: productName, price: productPrice, image: productImage });
            localStorage.setItem("cart", JSON.stringify(cart));
            window.dispatchEvent(new Event("cartUpdated"));
            alert(`${productName} added to cart!`);
        });
    });
});
