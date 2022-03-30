// Paginas
import Inicio from './pages/Inicio';
import Articulos from './pages/Articulos';
//import Articulo from './pages/Articulo';
import CrearArticulo from './pages/CrearArticulo';
import Recursos from './pages/Recursos';
import NuevoRecurso from './components/Recursos/NuevoRecurso';
import Usuarios from './pages/Usuarios';

// ERROR 404
import Error404 from './pages/Error404';

// Iconos
import HomeIcon from '@material-ui/icons/Home';
import DescriptionIcon from '@material-ui/icons/Description';
// import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
// import DescriptionIcon from '@material-ui/icons/Description';
import BookIcon from '@material-ui/icons/Book';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import GroupIcon from '@material-ui/icons/Group';
import PersonAddIcon from '@material-ui/icons/PersonAdd';


const routes = [
    {
        name: "Escritorio",
        path: "/admin/",
        component: Inicio,
        exact: true,
        icon: HomeIcon,
        nav: true
    },
    {
        name: "Articulos",
        path: "/admin/articulos",
        component: Articulos,
        exact: true,
        icon: BookIcon,
        nav: true
    },
    {
        name: "Nuevo Articulo",
        path: "/admin/nuevo-articulo",
        component: CrearArticulo,
        exact: true,
        icon: DescriptionIcon,
        nav: true
    },
    {
        name: "Recursos",
        path: "/admin/recursos",
        component: Recursos,
        exact: true,
        icon: InsertDriveFileIcon,
        nav: true
    },
    {
        name: "Nuevo Recursos",
        path: "/admin/nuevo-recurso",
        component: NuevoRecurso,
        exact: true,
        icon: FileCopyIcon,
        nav: true
    },
    {
        name: "Editar Articulo",
        path: "/admin/editar/:postId",
        component: CrearArticulo,
        nav: false
    },
    // {
    //     name: "Usuarios",
    //     path: "/admin/usuarios",
    //     component: Usuarios,
    //     icon: GroupIcon,
    //     nav: true
    // },
    // {
    //     name: "Nuevo usuario",
    //     path: "/admin/crear-usuario",
    //     component: Usuarios,
    //     icon: PersonAddIcon,
    //     nav: true
    // },
    {
        path: "*",
        component: Error404
    },
]
export default routes;