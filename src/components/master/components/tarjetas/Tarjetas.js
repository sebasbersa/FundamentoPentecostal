import { CardMedia } from '@material-ui/core'
import React from 'react'
import Tarjeta from './Tarjeta'
import "./tarjetas.css"

function Tarjetas(props) {
    const cards = props.cards;
    
    const tarjetas = cards.slice(0,props.cantidad)
    return (
        <div className="row" align="center">
            {tarjetas.map((card, index) => {
                return (
                    <div key={index} className="col-md-3">
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
