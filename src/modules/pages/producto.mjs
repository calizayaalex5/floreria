import { qs } from "../core/utils/dom.mjs";
import { getProductById, getProducts } from "../core/api.mjs";
import { formatPrice } from "../core/utils/formatting.mjs";
import { renderProductCard } from "../components/productCard.mjs";
import { addToCart } from "../core/storage.mjs";
import { showAlert } from "../ui/alerts.mjs";
import { updateCartBadge } from "../ui/cartBadge.mjs";
import { flyToCart } from "../ui/flyToCart.mjs";

export default async function initProductoPage() {
    console.log("Product page loaded");

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (!id) {
        qs("#product-details").innerHTML = "<p>Product not found.</p>";
        return;
    }

    const product = await getProductById(id);

    if (!product) {
        qs("#product-details").innerHTML = "<p>Product not found.</p>";
        return;
    }

    qs("#product-title").textContent = product.name;
    qs("#product-img").src = product.image;
    qs("#product-desc").textContent =
        product.description || "A beautiful floral arrangement from FlorArte.";
    qs("#product-price").textContent = formatPrice(product.price);

    qs("#add-to-cart").addEventListener("click", () => {
        addToCart(product);

        const img = qs("#product-img");
        flyToCart(img);

        updateCartBadge();
        showAlert("Added to cart! 💐");
    });

    const allProducts = await getProducts();
    const related = allProducts
        .filter((p) => p.id != product.id)
        .slice(0, 3);

    const relatedContainer = qs("#related-products");
    related.forEach((p) => {
        const card = renderProductCard(p);
        card.classList.add("fade-up");
        relatedContainer.appendChild(card);
    });
}
