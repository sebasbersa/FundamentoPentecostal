import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Articulos from './pages/Articulos';
import Fundamento from './pages/Fundamento';

import HomeIcon from '@material-ui/icons/Home';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import DescriptionIcon from '@material-ui/icons/Description';
import BookIcon from '@material-ui/icons/Book';

const routes = [
    {
        name: "inicio",
        path: "/",
        component: Inicio,
        exact: true,
        icon: HomeIcon
    },
    {
        name: "fundamento",
        path: "/fundamento",
        component: Fundamento,
        exact: true,
        icon: BookIcon
    },    
    {
        name: "nosotros",
        path: "/nosotros",
        component: Nosotros,
        exact: true,
        icon: PeopleAltIcon
    },
    {
        name: "articulos",
        path: "/articulos",
        component: Articulos,
        exact: true,
        icon: DescriptionIcon
    }
]
export default routes;