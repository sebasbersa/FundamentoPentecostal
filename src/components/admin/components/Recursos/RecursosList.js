import React, {useState, useEffect} from 'react';
import {Button, capitalize, Checkbox, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { getDateFormat } from '../../../../config/utilities';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import basePath from '../../../../config/serverConfig';

const RecursosList = () => {
    const [documentos, setDocumentos] = useState([])
    useEffect(() => {
        consumeApiPosts();
    }, []);
    const consumeApiPosts = async() => {
        await fetch(basePath + "/obtenerRecursosAll", {method: "POST"}).then(async ( res, err) => {
            const newDocuments = await res.json();
            setDocumentos(newDocuments);
        }).catch(()=>{
            console.log("not conected");
        });
    };
    const handleDelete = () => {
        console.log("Eliminar");
    }
    const handleHabilitar = (event) => {
        const id = event.target.name;
        const habilitado = event.target.checked;
        const cuerpo = {
            id: id,
            habilitado: habilitado
        }
        enableDisableResource(cuerpo);
    }
    const enableDisableResource = async(cuerpo) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cuerpo)
        };
        await fetch(basePath + "/ocultarMostrarRecurso", requestOptions);
        consumeApiPosts();
        console.log("listo")
    }
  return (
    <div>
        <TableContainer component={Paper}>
            <Table>
            <TableHead>
                <TableRow>
                <TableCell>Fecha</TableCell>
                <TableCell>Titulo</TableCell>
                <TableCell>Habilitar</TableCell>
                <TableCell>Eliminar</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {documentos.map((doc, index ) => {
                return (<TableRow key={index} id={index}>
                    <TableCell>{getDateFormat(doc.fecha)}</TableCell>
                    <TableCell>{capitalize(doc.titulo)}</TableCell>
                    <TableCell><Checkbox 
                                checked={doc.habilitado} 
                                color="primary" 
                                onChange={handleHabilitar} 
                                name={doc._id}
                            /></TableCell>
                    <TableCell>
                    <IconButton aria-label="delete" onClick={handleDelete}>
                    <DeleteIcon color="secondary" /></IconButton>
                    </TableCell>
                </TableRow>)
                })}
            </TableBody>
            </Table>
        </TableContainer>
    </div>
  );
};

export default RecursosList;
