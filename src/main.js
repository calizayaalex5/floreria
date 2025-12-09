import "./css/base.css";
import "./css/layout.css";
import "./css/components.css";
import "./css/pages.css";

import { loadHeader} from './modules/components/header.mjs'
import { loadFooter } from './modules/components/footer.mjs'
import { updateCartBadge } from "./modules/ui/cartBadge.mjs";

//cargar header y footer
loadHeader();
loadFooter();

requestAnimationFrame(() => {
    updateCartBadge();
});



//sistema de deteccion de pagina actual
const currentPage = document.body.dataset.page 

//Lazy-lad controller por paginas
switch (currentPage) {
    case "catalog":
        import("./modules/pages/catalogo.mjs").then(module => module.default());
        break;
    case "product":
        import("./modules/pages/producto.mjs").then(module => module.default());
        break;
    case "cart":
        import("./modules/pages/carrito.mjs").then(module => module.default());
        break;
    case "support":
        import("./modules/pages/soporte.mjs").then(module => module.default());
        break;
    case "diy":
        import("./modules/pages/diyBouquet.mjs").then(module => module.default());
        break;
    case "checkout":
        import("./modules/pages/checkout.mjs").then((m) => m.default());
    break;
    case "success":
    break;
    case "home":
        import("./modules/pages/home.mjs").then(m => m.default());
    break;
    default:
    break;
}