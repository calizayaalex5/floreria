import { defineConfig } from "vite"

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: "index.html",
                catalog: "catalog.html",
                product: "product.html",
                cart: "cart.html",
                diy: "diy.html",
                support: "support.html",
                checkout: "checkout.html",
                success: "success.html",
            },
        },
    },
});

