import React from 'react';
import {TextField} from '@material-ui/core'; 

function EvaluarCreate(props){
    const contenido = props.contenido;

    if(contenido.type === "subtitulo"){
        return <TextField id="Subtitulo" label="Standard" />
    }
    else if (contenido.type === "parrafo"){
        return <TextField id="Parrafo" label="Standard" />
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

export default EvaluarCreate
