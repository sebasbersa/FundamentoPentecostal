import { CardMedia } from '@material-ui/core'
import React from 'react'
import Tarjeta from './Tarjeta'
import "./tarjetas.css"

function Tarjetas(props) {
    const cards =  [
        {
            id: 1,
            imagen: "https://revistavive.com/wp-content/uploads/2018/04/rese%C3%B1a-pablo-apostol-de-cristo.jpg",
            imageTitle: "Pablo apostol",
            titulo: "El nuevo testamento",
            texto: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
        },
        {
            id: 2,
            imagen: "https://www.umnews.org/-/media/umc-media/2019/10/21/19/40/spanish-bible-anniversary-hands-umnews-2019-3500.ashx?rev=a221171449c448779ed56f531127f745&la=es&h=800&w=1200&mw=1200&hash=0FE5DD3AC178534D11917716AF424E907234D92D",
            imageTitle: "La biblia es inspirada por Dios",
            titulo: "La biblia es inspirada",
            texto: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
        },
        {
            id: 3,
            imagen: "http://2.bp.blogspot.com/-CALayP7kugI/UrF02kKq7yI/AAAAAAAATic/BadqKmeXDAg/s1600/PICT6504.JPG",
            imageTitle: "La iglesia pentecostal",
            titulo: "La iglesia pentecostal",
            texto: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
        },
        {
            id: 4,
            imagen: "https://cdn.euroinnova.edu.es/img/subidasEditor/whatsapp%20image%202021-02-06%20at%2010-1612631721.52",
            imageTitle: "El mundo donde vivimos",
            titulo: "El mundo donde vivimos",
            texto: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
        }
    ]
    const tarjetas = cards.slice(0,props.cantidad)
    return (
        <div className="row" align="center">
            {tarjetas.map((card, index) => {
                return (
                    <div key={index} className="col-md">
                        <Tarjeta 
                            id={card.id}
                            imagen={card.imagen} 
                            imageTitle={card.imageTitle}
                            titulo={card.titulo}
                            texto={card.texto}/>
                    </div>
                    )            
            })}
        </div>
    )
}

export default Tarjetas
