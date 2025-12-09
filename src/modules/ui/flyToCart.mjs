export function flyToCart(imgElement) {
    const cartIcon = document.querySelector(".cart-link");
    if (!cartIcon || !imgElement) return;

    const imgRect = imgElement.getBoundingClientRect();

    // clone the image
    const clone = imgElement.cloneNode(true);
    clone.classList.add("flying-img");

    clone.style.left = imgRect.left + "px";
    clone.style.top = imgRect.top + "px";
    clone.style.width = imgRect.width + "px";
    clone.style.height = imgRect.height + "px";

    document.body.appendChild(clone);

    // target position
    const cartRect = cartIcon.getBoundingClientRect();

    // Move clone
    setTimeout(() => {
        spawnCartParticles(cartRect.left, cartRect.top);
        clone.remove();

        // bounce + glow on cart
        cartIcon.classList.add("cart-bounce", "cart-glow");
        setTimeout(() => {
            cartIcon.classList.remove("cart-bounce", "cart-glow");
        }, 600);

    }, 850);
}


// PARTICLE EFFECT
function spawnCartParticles(x, y) {
    for (let i = 0; i < 8; i++) {
        const p = document.createElement("div");
        p.classList.add("particle");

        p.style.left = x + "px";
        p.style.top = y + "px";

        document.body.appendChild(p);

        const angle = Math.random() * 2 * Math.PI;
        const distance = 30 + Math.random() * 20;

        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;

        p.animate(
            [
                { transform: "translate(0,0)", opacity: 1 },
                { transform: `translate(${dx}px, ${dy}px)`, opacity: 0 }
            ],
            { duration: 600, easing: "ease-out" }
        );

        setTimeout(() => p.remove(), 600);
    }
}