import { qs } from "../core/utils/dom.mjs";
import { getCart, updateQty, removeFromCart } from "../core/storage.mjs";
import { formatPrice } from "../core/utils/formatting.mjs";
import { updateCartBadge } from "../ui/cartBadge.mjs";

// ===================================
// LISTENER GLOBAL (SE EJECUTA 1 SOLA VEZ)
// ===================================

const container = qs("#cart-items");

container.addEventListener("click", (e) => {
    
    if (e.target.classList.contains("qty-btn")) {
        const id = Number(e.target.dataset.id);
        const action = e.target.dataset.action;

        const cart = getCart();
        const item = cart.find(p => p.id === id);

        if (!item) return;

        if (action === "inc") item.qty++;
        if (action === "dec" && item.qty > 1) item.qty--;

        updateQty(id, item.qty);
        updateCartBadge()

        const qtyElement = e.target.closest(".qty-box").querySelector(".qty");
        qtyElement.classList.add("bump");
        setTimeout(() => qtyElement.classList.remove("bump"), 250);

        initCartPage(); 
    }

    if (e.target.classList.contains("remove-btn")) {
        const id = Number(e.target.dataset.id);
        const itemElement = e.target.closest(".cart-item");

        itemElement.classList.add("removing");

        setTimeout(() => {
            removeFromCart(id);
            updateCartBadge()

            initCartPage();
        }, 300); 
    }
});



// ===================================
// FUNCIÓN PRINCIPAL PARA RENDERIZAR EL CARRITO
// ===================================

export default function initCartPage() {
    console.log("Cart page loaded");

    const cart = getCart();

    if (!cart || cart.length === 0) {
        container.innerHTML = `<p class="cart-empty">Your cart is empty 💐</p>`
        qs("#cart-total").textContent = "$0";

        const checkoutBox = qs(".cart-actions");
        if (checkoutBox) checkoutBox.style.display = "none";

        return;
    }

    container.innerHTML = cart.map(item => `
        <div class="cart-item fade-up">
            <img src="${item.image}" class="cart-img" />

            <div class="cart-info">
                <h3>${item.name}</h3>
                <p>${formatPrice(item.price)}</p>

                <div class="qty-box">
                    <button class="qty-btn" data-id="${item.id}" data-action="dec">-</button>
                    <span class="qty">${item.qty}</span>
                    <button class="qty-btn" data-id="${item.id}" data-action="inc">+</button>
                </div>

                <button class="remove-btn" data-id="${item.id}">Remove</button>
            </div>
        </div>
    `).join("");

    const total = cart.reduce((acc, item) => acc + item.qty * item.price, 0);
    qs("#cart-total").textContent = formatPrice(total);
}
