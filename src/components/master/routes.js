// Paginas
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Articulos from './pages/Articulos';
import Fundamento from './pages/Fundamento';
import Articulo from './pages/Articulo';
import Recursos from './pages/Recursos';

// ERROR 404
import Error404 from './pages/Error404';

// Iconos
import HomeIcon from '@material-ui/icons/Home';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import DescriptionIcon from '@material-ui/icons/Description';
import BookIcon from '@material-ui/icons/Book';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';



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
        name: "Historia",
        path: "/fundamento/historia",
        component: Fundamento,
        exact: true,
        nav: false
    },
    {
        name: "Teologia",
        path: "/fundamento/teologia",
        component: Fundamento,
        exact: true,
        nav: false
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
        icon: DescriptionIcon,
        nav: false
    },
    {
        name: "Recursos",
        path: "/recursos",
        exact: true,
        component: Recursos,
        icon: InsertDriveFileIcon,
        nav: true
    },
    {
        path: "*",
        component: Error404
    },
]
export default routes;