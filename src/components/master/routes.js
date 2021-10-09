// Paginas
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Articulos from './pages/Articulos';
import Fundamento from './pages/Fundamento';

// ERROR 404
import Error404 from './pages/Error404';

// Iconos
import HomeIcon from '@material-ui/icons/Home';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import DescriptionIcon from '@material-ui/icons/Description';
import BookIcon from '@material-ui/icons/Book';
import Articulo from './pages/Articulo';

const routes = [
    {
        name: "Inicio",
        path: "/",
        component: Inicio,
        exact: true,
        icon: HomeIcon,
        nav: true
    },
    {
        name: "Fundamento",
        path: "/fundamento",
        component: Fundamento,
        exact: true,
        icon: BookIcon,
        nav: true
    },    
    {
        name: "Nosotros",
        path: "/nosotros",
        component: Nosotros,
        exact: true,
        icon: PeopleAltIcon,
        nav: true
    },
    {
        name: "Articulos",
        path: "/articulos",
        component: Articulos,
        exact: true,
        icon: DescriptionIcon,
        nav: true
    },
    {
        name: "Articulo",
        path: "/articulo",
        exact: false,
        component: Articulo,
        icon: null,
        nav: false
    },
    {
        path: "*",
        component: Error404
    },
]
export default routes;