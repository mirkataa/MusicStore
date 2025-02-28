document.addEventListener("DOMContentLoaded", function () {
    const productImg = document.getElementById("product-img");
    const productName = document.getElementById("product-name");
    const productDescription = document.getElementById("product-description");
    const productPrice = document.getElementById("product-price");
    const addToCartButton = document.getElementById("add-to-cart");

    const productData = JSON.parse(localStorage.getItem("selectedProduct"));

    if (productData) {
        productImg.src = productData.image;
        productName.textContent = productData.name;
        productDescription.textContent = productData.description;
        productPrice.textContent = productData.price;
    } else {
        document.querySelector(".product-container").innerHTML = "<p>Product not found.</p>";
    }

    addToCartButton.addEventListener("click", function () {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push({
            name: productData.name,
            price: productData.price,
            image: productData.image,
        });

        localStorage.setItem("cart", JSON.stringify(cart));
        window.dispatchEvent(new Event("cartUpdated"));
        alert(`${productData.name} added to cart!`);
    });
});
