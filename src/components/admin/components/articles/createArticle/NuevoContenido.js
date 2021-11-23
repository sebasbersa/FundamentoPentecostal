import React from 'react';
import Input from './Input';

function NuevoContenido(props){
    const type = props.type;
    const changeContenido = (contenido) => {
        if(contenido.length > 0 && !adding){
            props.cambio(contenido);
        }
        else if(contenido.length <= 0 && !adding){
            if(props.editingObject.type === "lista ordenada" ||props.editingObject.type === "lista desordenada" ){
                if(type === "lista ordenada" || type === "lista desordenada" ){
                    props.cambio(props.editingObject.contenido);
                }
                else{
                    props.cambio(contenido);
                }
            }else{
                if(props.editingObject.type !== "lista ordenada" ||props.editingObject.type !== "lista desordenada" ){
                    if(type === "lista ordenada" || type === "lista desordenada" ){
                        props.cambio(contenido);
                    }else{
                        props.cambio(props.editingObject.contenido);
                    }
                }
            }
        }
        else{
            props.cambio(contenido);
        }
    }
    const adding = props.adding;

    if(type === "subtitulo"){
        return (<Input change={changeContenido} adding={adding} estado={props.estado} type={type} editingObject={props.editingObject} />)
    }else if(type === "parrafo"){
        return (<Input change={changeContenido} adding={adding} estado={props.estado} type={type} editingObject={props.editingObject}  />)
    }else if(type === "lista ordenada"){
        return (<Input change={changeContenido} adding={adding} estado={props.estado} type={type} editingObject={props.editingObject}  />)
    }else if(type === "lista desordenada"){
        return (<Input change={changeContenido} adding={adding} estado={props.estado} type={type} editingObject={props.editingObject}  />)
    }else if(type === "img"){
        return (<Input change={changeContenido} adding={adding} estado={props.estado} type={type} editingObject={props.editingObject}   />)
    }else{
        return(<div></div>)
    }
}


export default NuevoContenido;
