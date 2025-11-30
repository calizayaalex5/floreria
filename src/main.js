import { loadHeader} from './modules/components/header.mjs'
import { loadFooter } from './modules/components/footer.mjs'

//cargar header y footer
loadHeader();
loadFooter();

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
    default:
        break;
}