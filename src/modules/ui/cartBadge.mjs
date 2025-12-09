import { getCart } from "../core/storage.mjs";

export function updateCartBadge() {
    const badge = document.querySelector("#cart-badge");
    if (!badge) return;

    const cart = getCart();
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

    badge.textContent = totalQty;

    // pequeña animación cada vez que cambia
    badge.classList.add("badge-bump");
    setTimeout(() => badge.classList.remove("badge-bump"), 300);
}
