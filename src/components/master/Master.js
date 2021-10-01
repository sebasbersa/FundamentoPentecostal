import React, {useState} from 'react';
import {Hidden, makeStyles} from '@material-ui/core';
import NavbarComponent from './components/NavbarComponent';
import Cajon from './components/Cajon';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Articulos from './pages/Articulos';

const estilos = makeStyles( theme => ({
    root: {
        display: 'block'
    },
    // toolbar: 0,
    toolbar: theme.mixins.toolbar,
    content:{
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3)
    }
}))

function Master(){
    const classes = estilos();
    const [abrir, setAbrir] = useState(false);
    const accionAbrir = ()=>{
        setAbrir(!abrir);
    }
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    function handleResize(){
        setWindowWidth(window.innerWidth);
        if(windowWidth >= 960){
            setAbrir(false);
        }
    }
    window.addEventListener('resize', handleResize);


    return (
        <Router>
            <div className={classes.root}>
                <NavbarComponent menuButton={accionAbrir} />
                <Cajon
                    variant="temporary"
                    open={abrir}
                    onClose={accionAbrir}
                    clickLink={accionAbrir}
                />
                <div className={classes.toolbar}></div>
                    <Switch>
                        <Route path="/" exact>
                            <Inicio/>
                        </Route>
                        <Route path="/nosotros" exact>
                            <Nosotros/>
                        </Route>
                        <Route path="/articulos" exact>
                            <Articulos/>
                        </Route>
                    </Switch>
            </div>
        </Router>
    )
}

export default Master;
