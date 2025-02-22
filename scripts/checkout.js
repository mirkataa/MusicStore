document.addEventListener("DOMContentLoaded", function () {
    const orderSummaryContainer = document.getElementById("order-summary");
    const totalPriceElement = document.getElementById("total-price");
    const checkoutForm = document.getElementById("checkout-form");

    // Load cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalPrice = 0;

    function displayOrderSummary() {
        orderSummaryContainer.innerHTML = "";
        if (cart.length === 0) {
            orderSummaryContainer.innerHTML = "<p>Your cart is empty.</p>";
        } else {
            cart.forEach(item => {
                totalPrice += parseFloat(item.price.replace("$", ""));
                const itemElement = document.createElement("p");
                itemElement.textContent = `${item.name} - ${item.price}`;
                orderSummaryContainer.appendChild(itemElement);
            });
        }
        totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
    }

    displayOrderSummary();

    // form submission
    checkoutForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const address = document.getElementById("address").value;
        const cardNumber = document.getElementById("card-number").value;
        const expiry = document.getElementById("expiry").value;
        const cvv = document.getElementById("cvv").value;

        if (!name || !email || !address || !cardNumber || !expiry || !cvv) {
            alert("Please fill in all fields!");
            return;
        }

        // ne e impl oficialen checkout, simulirame successful order
        alert(`Thank you, ${name}! Your order has been placed.`);

        // Clear cart
        localStorage.removeItem("cart");
        window.location.href = "index.html"; // back to homepage
    });
});
