export function loadFooter() {
    const footer = document.querySelector("#footer");

    footer.innerHTML = `
        <footer class="site-footer">

            <div class="footer-content">

                <!-- LOGO + SLOGAN -->
                <div class="footer-brand">
                    <h2 class="footer-logo">FlorArte</h2>
                    <p class="footer-slogan">Crafting beauty, inspiring creativity 🌸</p>
                </div>

                <!-- QUICK LINKS -->
                <div class="footer-links">
                    <h3>Explore</h3>
                    <a href="/catalog.html">Catalog</a>
                    <a href="/diy.html">DIY Bouquet</a>
                    <a href="/support.html">Support</a>
                    <a href="/cart.html">Cart</a>
                </div>

                <!-- CONTACT -->
                <div class="footer-contact">
                    <h3>Contact</h3>
                    <p>Email: support@florarte.com</p>
                    <p>Phone: +56 9 1234 5678</p>
                </div>

                <!-- SOCIAL MEDIA -->
                <div class="footer-social">
                    <h3>Follow Us</h3>
                    <div class="social-icons">
                        <a href="#" aria-label="Instagram">📸</a>
                        <a href="#" aria-label="Facebook">📘</a>
                        <a href="#" aria-label="TikTok">🎵</a>
                    </div>
                </div>

            </div>

            <p class="footer-bottom">© 2025 FlorArte — Crafted with Love 💐</p>

        </footer>
    `;
}
