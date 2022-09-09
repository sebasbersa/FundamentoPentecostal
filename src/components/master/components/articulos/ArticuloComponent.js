import React from 'react'
import './articulocomponent.css';
import ArticuloSidebar from './ArticulosSidebar';

function ArticuloComponent(props){
    return (
        <div className="artcomp_body">
            <div className="artcomp_content">
                <div align="center">
                        <img alt={props.titulo} className="artcomp_img" src={props.img}  />
                </div>
                <hr/>
                    <h1>{props.titulo}</h1>
                    {props.contenido.map((objeto, index) =>{
                        return(<Evaluar key={index} contenido={objeto} titulo={props.titulo} />)
                    })}
            </div>
            <div className="artcomp_sidebar" >
                <ArticuloSidebar />
            </div>
        </div>
    )
}

function Evaluar(props){
    const contenido = props.contenido;
    const titulo = props.titulo;

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
                <img alt={titulo} src={contenido.contenido} className="artcomp_content_img" />
            </div>
            
        )
    }
    else{
        return null
    }

}


export default ArticuloComponent
