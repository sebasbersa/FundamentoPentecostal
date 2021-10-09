import React from 'react'

function ArticuloComponent(props){
    return (
        <div>
            <h1>{props.titulo}</h1>
            <p>{props.texto}</p>
        </div>
    )
}

export default ArticuloComponent
