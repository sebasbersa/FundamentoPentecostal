import React, {useState, useEffect} from 'react';
import {TextField, makeStyles, Button} from '@material-ui/core';
import InputList from './InputList';
import foto from '../../../../../resources/images/emptyimage.jpg';
import axios from 'axios';
import basePath from '../../../../../config/serverConfig';

const useStyles = makeStyles((theme) => ({
    input:{
        width: "100%"
    }
}));

function Input(props){
    const adding = props.adding;
    const classes = useStyles();
    const propstype = props.editingObject.type;
    const [lista, setLista] = useState([]);
    const [item, setItem] = useState("");
    //imagen
    const [imagen, setImagen] = useState(props.editingObject.contenido && propstype === "img" ? props.editingObject.contenido : foto );
    const handleChange = (event) => {
        setItem(event.target.value);
        if(tipo === "subtitulo" || tipo === "parrafo" ){
            props.change(event.target.value)
        }
        //event.preventDefault();        
    }
    useEffect(() => {
        props.change(lista);
    }, [lista]);
    const tipo = props.type;

    const handleAdd = () => {
        if(item.length > 0){
            setLista((prev) => {
                return [...prev, item]
            });
        }            
        setItem("");
        const texto = document.getElementById("text");
        props.change(lista)
        texto.value = "";
        texto.focus();
    }
    const handleDelete = (id) =>{
        setLista((prev) => {
            return prev.filter((item, index) => {
                return index !== id;
            })
        })
    }
    const handleUploadImage = e => {
        const files = e.target.files;
        console.log(files[0].name)
        const data = new FormData();
        data.append('image', files[0]);
        axios.post(basePath + '/upload' , data)
            .then(res => {
                const path = res.data;
                setImagen(basePath + path);
                props.change(basePath + path);
            })
            .catch(err => {console.log(err)});
    }
    useEffect(() => {
        if(!adding){
            if(tipo === "lista ordenada" || tipo === "lista desordenada"){
                if(props.editingObject.type === "lista ordenada" || props.editingObject.type === "lista desordenada" ){
                    setLista(props.editingObject.contenido)
                }else{
                    setLista([]);
                }
            }else{
                setLista([]);
            }
        }
    }, [tipo]);

    if(tipo === "subtitulo"){
        return (
        <TextField 
        onChange={handleChange}
        id="text" 
        className={classes.input}
        defaultValue={!props.adding && (propstype === "lista ordenada" || propstype === "lista desordenada" ) ?  null : props.editingObject.contenido}
        label="Ingresar Subtitulo"/>)
    }
    else if (tipo === "parrafo"){
        return (<TextField 
        onChange={handleChange}
        multiline 
        rows={4}
        className={classes.input} 
        defaultValue={!props.adding && (propstype === "lista ordenada" || propstype === "lista desordenada" )  ?  null : props.editingObject.contenido}
        id="text" 
        label="Ingresar parrafo"/>
        );
    }
    else if (tipo === "img"){
        return (
        <div>
            <img 
            src={imagen}
            height="80" 
            width="80" />
            <input type='file'
                name='imagen'
                placeholder='Subir una imagen...'
                onChange={handleUploadImage}
                /> 
        </div>
        )
    }
    else if(tipo === "lista ordenada"){
        return (
        <div>
            <ol>
            {lista.map((item, index) => {
                return (<InputList key={index} id={index} content={item} onDeleteItem={handleDelete} />)
            })}
            </ol>
            <TextField onChange={handleChange} id="text" label="Ingresar punto"/>
            <Button  variant="contained" color="primary" onClick={handleAdd} >Añadir</Button>
        </div>
        )

    }
    else {
        return (<div>
            <ul>
                {lista.map((item, index) => {
                    return (<InputList key={index} id={index} content={item} onDeleteItem={handleDelete} />)
                })}
            </ul>
            <TextField onChange={handleChange} id="text" label="Ingresar punto"/>
            <Button  variant="contained" color="primary" onClick={handleAdd} >Add</Button>
        </div>) 
    }
}

export default Input