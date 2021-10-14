import React from 'react';
import './articulosidebar.css'
import articulos from '../../../../utilities/articulos';

function ArticulosSidebar(){
    const _articulos = articulos.slice(0, 4);
    return (
        <div className="artsid_div">
            <h3 className="artsid_h3">Otros articulos</h3>
            <hr />
            {articulos.map((art) => {
                return(
                    <a href={art.path}>
                        <p>{art.titulo}</p>
                    </a>
                )
            })}
            <a href="/articulos">
                <p>Ver todos</p>
            </a>
        </div>
    )
}
export default ArticulosSidebar;