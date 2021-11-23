import React from 'react';

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
    else if(contenido.type === "img"){
        return (
            <div align="center">
                <img alt="imagen" src={contenido.contenido} className="artcomp_content_img" />
            </div>
            
        )
    }
    else{
        return null
    }

}

export default Evaluar;