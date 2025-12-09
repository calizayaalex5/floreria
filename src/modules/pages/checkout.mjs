import { qs } from "../core/utils/dom.mjs";
import { getCart } from "../core/storage.mjs";
import { formatPrice } from "../core/utils/formatting.mjs";
import { showAlert } from "../ui/alerts.mjs";
import { updateCartBadge } from "../ui/cartBadge.mjs";

export default function initCheckoutPage() {
    console.log("Checkout loaded");

    const cart = getCart();
    const itemsContainer = qs("#summary-items");
    const totalElement = qs("#summary-total-value");

    // --------------------------
    // EMPTY CART HANDLING
    // --------------------------
    if (!cart.length) {
        itemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        totalElement.textContent = "$0";
        return;
    }

    // --------------------------
    // RENDER SUMMARY
    // --------------------------
    let total = 0;

    itemsContainer.innerHTML = cart
        .map(item => {
            const subtotal = item.qty * item.price;
            total += subtotal;

            return `
                <div class="summary-item">
                    <span>${item.name} (x${item.qty})</span>
                    <span>${formatPrice(subtotal)}</span>
                </div>`;
        })
        .join("");

    totalElement.textContent = formatPrice(total);

    // --------------------------
    // FORM SUBMISSION
    // --------------------------
    const form = qs("#checkout-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Show fast toast notification
        showAlert("Processing your order...");

        // Small delay to simulate processing
        setTimeout(() => {
            // Clear cart
            localStorage.removeItem("florarte_cart");
            updateCartBadge();

            // Redirect to order success page
            window.location.href = "/success.html";

        }, 1100);
    });
}
