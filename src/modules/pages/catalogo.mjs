import { qs } from "../core/utils/dom.mjs"
import { getProducts } from "../core/api.mjs"
import { renderProductCard } from "../components/productCard.mjs"
import { fadeIn } from "../core/animations.mjs";

export default async function initCatalogPage() {
    console.log("Catalog page loaded");

    const container = qs("#catalog-grid")
    container.innerHTML = ""

    try {
        const products = await getProducts()
        console.log("¿Qué trae getProducts()?:", products);

        if (!products || products.length === 0) {
            container.innerHTML = "<p>No products available at the moment.</p>"
            return
        }

        //renderizar cada producto
        products.forEach((product, index) => {
            const card = renderProductCard(product)
            fadeIn(card, 300 + index * 80)
            container.appendChild(card)
    })

    } catch (error) {
        console.error("Error loading products:", error)
        container.innerHTML = `<p class="error">Unable to load products. Please try again later.</p>`;
    }
}