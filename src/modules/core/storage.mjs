// ======= CART STORAGE MODULE ======= //

const CART_KEY = "florarte_cart";

// Get the cart from localStorage
export function getCart() {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

// Save the cart to localStorage
export function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    }

// Add a product to cart
export function addToCart(product) {
const cart = getCart();

const existing = cart.find(item => item.id === product.id);

if (existing) {
        existing.qty++;
} else {
        cart.push({ ...product, qty: 1 });
}

saveCart(cart);
}

// Remove an item
export function removeFromCart(id) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== id);
    saveCart(cart);
}

// Update item quantity
export function updateQty(id, qty) {
    const cart = getCart();
    const item = cart.find(item => item.id === id);

    if (!item) return;

    if (qty <= 0) {
        removeFromCart(id);
    } else {
        item.qty = qty;
        saveCart(cart);
    }
}
