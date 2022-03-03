import React from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { capitalize } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { getDateFormat } from '../../../../config/utilities';
import basePath from '../../../../config/serverConfig';

const useStyles = makeStyles( (theme) => ({
  breakpoint:{
    [theme.breakpoints.down('xs')]:{
      display: "none"
    }
  }
}));

function ResourcesList(props){
    const documentos = props.documentos;
    const classes = useStyles();
  return (
  <div>
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell className={classes.breakpoint}>Fecha</TableCell>
          <TableCell>Titulo</TableCell>
          <TableCell className={classes.breakpoint}>Descripción</TableCell>
          <TableCell>Descargar</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {documentos.map((doc, index ) => {
          return (<TableRow id={index}>
            <TableCell className={classes.breakpoint}>{getDateFormat(doc.fecha)}</TableCell>
            <TableCell>{capitalize(doc.titulo)}</TableCell>
            <TableCell className={classes.breakpoint}>{capitalize(doc.descripcion)}</TableCell>
            <TableCell>
                    <a href={doc.url} download>Descargar</a>
                    </TableCell>
          </TableRow>)
        })}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
  );
};

export default ResourcesList;
