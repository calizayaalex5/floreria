import { getProducts } from "../core/api.mjs";
import { renderProductCard } from "../components/productCard.mjs";

export default async function initHomePage() {
    console.log("Home Page Loaded");

    // 1. Cargar productos destacados
    await loadFeaturedProducts();

    // 2. Inicializar testimonials
    initTestimonials();
}

/* ==========================
   FEATURED PRODUCTS
========================== */
async function loadFeaturedProducts() {
    const container = document.querySelector("#featured-products");
    if (!container) return;

    const products = await getProducts();
    const featured = products.slice(0, 4); // primeros 4

    featured.forEach(p => {
        container.appendChild(renderProductCard(p));
    });
}

/* ==========================
   TESTIMONIALS CONTROLLER
========================== */
function initTestimonials() {
    const testimonials = document.querySelectorAll(".testimonial");
    const dots = document.querySelectorAll(".dot");

    if (testimonials.length === 0) return;

    let index = 0;

    function show(i) {
        testimonials.forEach(t => t.classList.remove("active"));
        dots.forEach(d => d.classList.remove("active"));

        testimonials[i].classList.add("active");
        dots[i].classList.add("active");
    }

    function next() {
        index = (index + 1) % testimonials.length;
        show(index);
    }

    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            index = i;
            show(i);
        });
    });

    show(0);
    setInterval(next, 5000);
}
