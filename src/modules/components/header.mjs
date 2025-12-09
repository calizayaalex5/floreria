export function loadHeader() {
    const headerHTML = `
        <header class="site-header">
        <div class="header-container">

            <!-- LOGO -->
            <a href="/index.html" class="logo">FlorArte</a>

            <!-- NAVIGATION -->
            <nav class="nav">
            <ul class="nav-links">
                <li><a href="/catalog.html">Catalog</a></li>
                <li><a href="/diy.html">DIY Bouquet</a></li>
                <li><a href="/support.html">Support</a></li>
            </ul>
            </nav>

            <!-- CART -->
            <a href="/cart.html" class="cart-link">
            🛒
            <span id="cart-badge">0</span>
            </a>

            <!-- MOBILE MENU BUTTON -->
            <button class="menu-btn" id="menu-btn">
            ☰
            </button>

        </div>

        <!-- MOBILE NAV -->
        <nav class="mobile-nav" id="mobile-nav">
            <a href="/catalog.html">Catalog</a>
            <a href="/diy.html">DIY Bouquet</a>
            <a href="/support.html">Support</a>
            <a href="/cart.html">Cart</a>
        </nav>
    </header>
    `;
    
    document.querySelector("#header").innerHTML = headerHTML;

    // =============== MOBILE MENU TOGGLE ===============
    const menuBtn = document.querySelector("#menu-btn");
    const mobileNav = document.querySelector("#mobile-nav");

    menuBtn.addEventListener("click", () => {
        const isOpen = mobileNav.classList.toggle("open");
        mobileNav.style.display = isOpen ? "flex" : "none";
    });
}

