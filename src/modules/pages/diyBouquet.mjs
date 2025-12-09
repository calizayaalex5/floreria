import { qs } from "../core/utils/dom.mjs";
import { getDIYFlowers } from "../core/api.mjs";
import { formatPrice } from "../core/utils/formatting.mjs";
import { addToCart } from "../core/storage.mjs";
import { updateCartBadge } from "../ui/cartBadge.mjs";
import { showAlert } from "../ui/alerts.mjs";

let diyCart = [];

// ===============================
// INIT PAGE
// ===============================
export default async function initDIYPage() {
    console.log("DIY Page Loaded");

    const flowers = await getDIYFlowers();
    renderFlowers(flowers);
    updateDIYCart();

    // 👉 Listener agregado SOLO UNA VEZ
    qs("#diy-add-to-cart").addEventListener("click", addDIYBouquetToCart);
}

// ===============================
// RENDER FLOWERS
// ===============================
function renderFlowers(flowers) {
    const container = qs("#diy-flowers");

    container.innerHTML = flowers.map(flower => `
        <div class="diy-card">
            <img src="${flower.image}" alt="${flower.name}">
            <h3>${flower.name}</h3>
            <p>${formatPrice(flower.price)}</p>

            <div class="diy-controls">
                <button data-id="${flower.id}" data-action="dec">-</button>
                <span class="qty">0</span>
                <button data-id="${flower.id}" data-action="inc">+</button>
            </div>
        </div>
    `).join("");

    container.addEventListener("click", handleDIYAction);
}

// ===============================
// HANDLE + / -
// ===============================
function handleDIYAction(e) {
    if (!e.target.dataset.id) return;

    const id = Number(e.target.dataset.id);
    const action = e.target.dataset.action;

    let item = diyCart.find(i => i.id === id);

    if (action === "inc") {
        if (item) item.qty++;
        else diyCart.push({ id, qty: 1 });
    }

    if (action === "dec" && item) {
        item.qty--;
        if (item.qty <= 0) diyCart = diyCart.filter(i => i.id !== id);
    }

    updateDIYCart();
}

// ===============================
// GET USER OPTIONS
// ===============================
function getSelectedOptions() {
    const color = qs("#diy-color").value;
    const style = qs("#diy-style").value;
    return { color, style };
}

// ===============================
// RENDER DIY CART
// ===============================
async function updateDIYCart() {
    const container = qs("#diy-cart");
    const flowers = await getDIYFlowers();

    const selected = diyCart.map(i => {
        const flower = flowers.find(f => f.id === i.id);
        return { ...flower, qty: i.qty };
    });

    if (selected.length === 0) {
        container.innerHTML = `<p>No flowers selected yet 💐</p>`;
        qs("#diy-total").textContent = "$0";
        return;
    }

    container.innerHTML = selected.map(item => `
        <div class="diy-cart-item">
            <span>${item.name} x${item.qty}</span>
            <span>${formatPrice(item.price * item.qty)}</span>
        </div>
    `).join("");

    const total = selected.reduce((sum, item) => sum + item.price * item.qty, 0);
    qs("#diy-total").textContent = formatPrice(total);
}

// ===============================
// ADD DIY BOUQUET TO CART
// ===============================
async function addDIYBouquetToCart() {
    const flowers = await getDIYFlowers();

    const selected = diyCart.map(i => {
        const flower = flowers.find(f => f.id === i.id);
        return { ...flower, qty: i.qty };
    });

    if (selected.length === 0) {
        showAlert("Select at least one flower 🌸");
        return;
    }

    const total = selected.reduce((sum, item) => sum + item.price * item.qty, 0);

    const options = getSelectedOptions();

    const bouquet = {
        id: Date.now(),
        name: `Custom Bouquet (${options.style})`,
        price: total,
        image: "/src/img/diy-placeholder.jpg",
        description: `A ${options.color} bouquet in ${options.style} style, crafted with selected flowers.`,
        qty: 1
    };

    addToCart(bouquet);
    updateCartBadge();
    showAlert("Your custom bouquet was added! 💐");
}
