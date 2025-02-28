document.addEventListener("DOMContentLoaded", function () {
    function updateCartCount() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        document.getElementById("cart-count").textContent = cart.length;
    }

    updateCartCount();

    window.addEventListener("cartUpdated", updateCartCount);
});
