import { create } from "../core/utils/dom.mjs";
import { formatPrice } from "../core/utils/formatting.mjs";

export function renderProductCard(product) {
    const card = create("div");
    card.classList.add("product-card");

    const image = product.image || "/public/img/placeholder-flower.jpg";

    card.innerHTML = `
        <img src="${image}" alt="${product.name}" class="product-img" />

        <div class="product-info-box">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">${formatPrice(product.price)}</p>

            <a href="/product.html?id=${product.id}" class="btn-view">
                View Details
            </a>
        </div>
    `;

    return card;
}
