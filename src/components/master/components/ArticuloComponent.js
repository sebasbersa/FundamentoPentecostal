import React from 'react'

function ArticuloComponent(props){
    return (
        <div>
            <h1>{props.titulo}</h1>
            {props.contenido.map((objeto, index) =>{
                return(<Evaluar key={index} contenido={objeto} />)
                
            })}
        </div>
    )
}

function Evaluar(props){
    const contenido = props.contenido;

    if(contenido.type === "subtitulo"){
        return <h2>{contenido.contenido}</h2>
    }
    else if (contenido.type === "parrafo"){
        return <p>{contenido.contenido}</p>
    }
    else if (contenido.type === "lista ordenada"){
        return(
            <ol>
                {contenido.contenido.map((part, index)=>{
                    return <li key={index}>{part}</li>
                })}
            </ol>
        )
    }
    else if (contenido.type === "lista desordenada"){
        return(
            <ul>
                {contenido.contenido.map((part, index)=>{
                    return <li key={index}>{part}</li>
                })}
            </ul>
        )
    }
    else{
        return null
    }

}


export default ArticuloComponent
