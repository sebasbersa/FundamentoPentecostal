import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {ListItemAvatar, Avatar, Button, 
  ListItemText, Checkbox, Tooltip} 
    from '@material-ui/core';
import {Table, TableHead, TableBody, TableCell, 
  TableContainer,TableRow, TableFooter, TablePagination} from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const useStyles1 = makeStyles((theme) => ({
    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5),
    },
  }));

function TablePaginationActions(props) {
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;
  
    const handleFirstPageButtonClick = (event) => {
      onPageChange(event, 0);
    };
  
    const handleBackButtonClick = (event) => {
      onPageChange(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onPageChange(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
      <div className={classes.root}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
  
function ArticlesTable(props) {
    const posts = props.rows;
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(posts.length);
  
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, posts.length - page * rowsPerPage);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };

    return (
    <TableContainer component={Paper}>
        <Table aria-label="Articulos">
            <TableHead>
                <TableRow>
                    <TableCell scope="col">#</TableCell>
                    <TableCell scope="col">Articulo</TableCell>
                    <TableCell scope="col">Destacado</TableCell>
                    <TableCell scope="col">Habilitado</TableCell>
                    <TableCell scope="col">Eliminar</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {(rowsPerPage > 0
            ? posts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : posts
          ).map((article, index) => {
                return(
                <TableRow key={index}>
                    <TableCell component="th" scope="row">
                        <Button>
                            <ListItemAvatar>
                                <Avatar src={article.imagen}/>
                            </ListItemAvatar>
                        </Button>
                    </TableCell>
                    <TableCell>
                        <Button>
                            <ListItemText id={index} primary={article.titulo} />
                        </Button>
                    </TableCell>
                    <TableCell>
                      <Tooltip title="Destacar en inicio">
                            <Checkbox 
                              icon={<FavoriteBorder />} 
                              checkedIcon={<Favorite />} 
                              checked={article.destacada} 
                              onChange={props.destacar} 
                              name={article._id}
                            />
                        </Tooltip>
                    </TableCell>
                    <TableCell>
                      <Tooltip title={article.habilitado ? "Deshabilitar" : "Habilitar"}>
                            <Checkbox 
                                checked={article.habilitado} 
                                color="primary" 
                                onChange={props.habilitar} 
                                name={article._id}
                                />
                        </Tooltip>
                    </TableCell>
                    <TableCell>
                        <Button component="button" variant="contained" color="secondary" onClick={props.eliminar} >
                            <span id={article._id} >Eliminar</span>
                        </Button>
                    </TableCell>
                </TableRow>
                )
            })}  
            {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                </TableRow>
            )}                 
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TablePagination
                    rowsPerPageOptions={[posts.length ,5, 10, 25, { label: 'All', value: -1 }]}
                    colSpan={3}
                    count={posts.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                        inputProps: { 'aria-label': 'rows per page' },
                        native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                    />
                </TableRow>
            </TableFooter>
        </Table>
    </TableContainer>   
    )
}

export default ArticlesTable;