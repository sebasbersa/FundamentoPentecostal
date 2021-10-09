import React from 'react'
import Tarjetas from '../components/tarjetas/Tarjetas';
import articulos from '../../../utilities/articulos';

const Articulos = () => {
    const __cards = articulos;
    return (
        <div>
            <div style={{height: "20px"}}></div>
            <h1 className="body__title" align="center">NUESTROS ARTICULOS</h1>
            <p align="center">Mira nuestros articulos que te serán de mucha ayuda, conocimiento, y bendición</p>
            <Tarjetas cards={__cards}/>
            
        </div>
    )
}

export default Articulos
