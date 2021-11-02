// const articulos =  [
//     {
//         id: 1,
//         destacada: true,
//         imagen: "https://revistavive.com/wp-content/uploads/2018/04/rese%C3%B1a-pablo-apostol-de-cristo.jpg",
//         imageTitle: "Pablo apostol",
//         titulo: "El nuevo testamento",
//         texto: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
//         path: "/articulo/el-nuevo-testamento",
//         contenido: [
//             {
//                 type: "parrafo",
//                 contenido: "Este es un parrafo Este es un parrafo Este es un parrafo Este es un parrafo Este es un parrafo Este es un parrafo Este es un parrafo Este es un parrafo Este es un parrafo ",
//             },
//             {
//                 type: "subtitulo",
//                 contenido: "Este es un subtitulo",
//             },
            // {
            //     type: "lista ordenada",
            //     contenido: [
            //         "parte 1",
            //         "parte 2",
            //         "parte 3"
            //     ],
            // },
//             {
//                 type: "img",
//                 contenido: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/13470/images/opPMmmoKRc2c4mY0Albb_Screen_Shot_2019-07-14_at_12.24.31_AM.png"
//             },
//             {
//                 type: "lista desordenada",
//                 contenido: [
//                     "parte 1",
//                     "parte 2",
//                     "parte 3"
//                 ],
//             },
//         ],
//     },
//     {
//         id: 2,
//         destacada: true,
//         imagen: "https://www.umnews.org/-/media/umc-media/2019/10/21/19/40/spanish-bible-anniversary-hands-umnews-2019-3500.ashx?rev=a221171449c448779ed56f531127f745&la=es&h=800&w=1200&mw=1200&hash=0FE5DD3AC178534D11917716AF424E907234D92D",
//         imageTitle: "La biblia es inspirada por Dios",
//         titulo: "La biblia es inspirada",
//         texto: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
//         path: "/articulo/la-biblia-es-inspirada",
//         contenido: [],
//     },
//     {
//         id: 3,
//         destacada: true,
//         imagen: "http://2.bp.blogspot.com/-CALayP7kugI/UrF02kKq7yI/AAAAAAAATic/BadqKmeXDAg/s1600/PICT6504.JPG",
//         imageTitle: "La iglesia pentecostal",
//         titulo: "La iglesia pentecostal",
//         texto: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
//         path: "/articulo/la-iglesia-pentecostal",
//         contenido: [],
//     },
//     {
//         id: 4,
//         destacada: true,
//         imagen: "https://cdn.euroinnova.edu.es/img/subidasEditor/whatsapp%20image%202021-02-06%20at%2010-1612631721.52",
//         imageTitle: "El mundo donde vivimos",
//         titulo: "El mundo donde vivimos",
//         texto: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
//         path: "/articulo/el-mundo-donde-vivimos",
//         contenido: [],
//     },
//     {
//         id: 5,
//         destacada: false,
//         imagen: "https://wallpaperaccess.com/full/1811836.jpg",
//         imageTitle: "El mundo donde iremos",
//         titulo: "El mundo donde iremos",
//         texto: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
//         path: "/articulo/el-mundo-donde-iremos",
//         contenido: [],
//     }

// ]

import React, {useState, useEffect} from "react";
import Tarjetas from "../components/master/components/tarjetas/Tarjetas";

const Articulos = (props) => {
    const [posts, setposts] = useState([]);
    useEffect(() => {
        consumeApiPosts();
    }, [])

    const consumeApiPosts = async() => {
        const response = await fetch("http://localhost:3500/posts", {method: "POST"})
        const responseJson = await response.json();
        console.log(responseJson);
        setposts(responseJson)
    };
    return (
        <Tarjetas cantidad={props.cantidad} cards={posts} destacada={props.destacada}/>
        )
};
// console.log("nuevo");

// async function articulos2(){
//     await fetch("http://localhost:3500/posts", {method: "POST"})
//     .then(response => {
//         articulos.push(response.json());
//     })
//     .catch(err => {
//         console.log(err)
//     })
// }
// articulos2();
export default Articulos;