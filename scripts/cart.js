document.addEventListener("DOMContentLoaded", function () {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    const checkoutButton = document.getElementById("checkout");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function updateCartDisplay() {
        cartItemsContainer.innerHTML = "";
        let totalPrice = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
            checkoutButton.disabled = true; // Disable checkout if cart is empty
        } else {
            checkoutButton.disabled = false; // Enable checkout if there ar items 
            cart.forEach((item, index) => {
                totalPrice += parseFloat(item.price.replace("$", ""));

                const cartItem = document.createElement("div");
                cartItem.classList.add("cart-item");
                cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <p>${item.name} - ${item.price}</p>
                    <button class="remove-item" data-index="${index}">Remove</button>
                `;
                cartItemsContainer.appendChild(cartItem);
            });
        }

        totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;

        document.querySelectorAll(".remove-item").forEach(button => {
            button.addEventListener("click", function () {
                const index = this.getAttribute("data-index");
                cart.splice(index, 1);
                localStorage.setItem("cart", JSON.stringify(cart));
                window.dispatchEvent(new Event("cartUpdated"));
                updateCartDisplay();
            });
        });
    }

    updateCartDisplay();

    checkoutButton.addEventListener("click", function () {
        if (cart.length > 0) {
            window.location.href = "checkout.html";
        } else {
            alert("Your cart is empty!");
        }
    });
});
