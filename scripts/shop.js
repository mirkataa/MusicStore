document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            const product = this.parentElement;
            const productName = product.querySelector("h2").textContent;
            const productPrice = product.querySelector("p").textContent;
            const productImage = product.querySelector("img").src;

            cart.push({ name: productName, price: productPrice, image: productImage });
            localStorage.setItem("cart", JSON.stringify(cart));

            alert(`${productName} added to cart!`);
        });
    });
});



