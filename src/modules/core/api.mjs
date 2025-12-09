// ===========================
// API PERENUAL (Catálogo)
// ===========================
const PERENUAL_KEY = "sk-INT769370f0ba427713874";

export async function getProducts() {
    const cached = localStorage.getItem("florarte_catalog");

    if (cached) {
        return JSON.parse(cached);
    }

    const url = `https://perenual.com/api/v2/species-list?q=flower&page=1&hardiness=4-8&key=${PERENUAL_KEY}`;

    const res = await fetch(url);
    const data = await res.json();

    const flowers = data.data
        .filter(flower => flower.default_image)
        .map(flower => ({
            id: flower.id,
            name: flower.common_name || "Unknown Flower",
            image: flower.default_image.medium_url || flower.default_image.small_url,
            price: 6000 + Math.floor(Math.random() * 8000),
            description: flower.scientific_name?.join(", ") || "Beautiful flower"
        }));

    localStorage.setItem("florarte_catalog", JSON.stringify(flowers));

    return flowers;
}


// ===========================
// Buscar producto por ID
// ===========================
export async function getProductById(id) {
    const all = await getProducts();
    return all.find(p => p.id == id);
}

// ===========================
// DIY — Flores por unidad
// ===========================
export async function getDIYFlowers() {
    const res = await fetch("/src/data/diyFlowers.json");
    return res.json();
}

// ===========================
// UNSPLASH (OPCIONAL)
// ===========================
const UNSPLASH_KEY = "ijYEw_4DQcms6LZ3tv496hRdzWSPu7vm60dScp7at0o";

export async function getUnsplashFlowers(query = "flowers") {
    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${UNSPLASH_KEY}`;
    const res = await fetch(url);
    return res.json();
}

// ===========================
// FAKE STORE (OPCIONAL)
// ===========================
export async function getFakeStoreProducts() {
    const res = await fetch("https://fakestoreapi.com/products");
    return res.json();
}
