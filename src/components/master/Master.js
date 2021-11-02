import React, {useState} from 'react';
import { makeStyles} from '@material-ui/core';
import NavbarComponent from './components/NavbarComponent';
import Cajon from './components/Cajon';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import './master.css';
import routes from './routes';

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
    const year = new Date();
    const classes = estilos();
    const [abrir, setAbrir] = useState(false);
    const accionAbrir = ()=>{
        setAbrir(!abrir);
    }
    function handleResize(){
        if(window.innerWidth >= 960){
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
                        {
                            routes.map((ruta, index) => (
                                (
                                    <Route 
                                    key={index}
                                    path={ruta.path} 
                                    exact={ruta.exact} 
                                    render={(props) => <ruta.component/>}
                                    />
                                )
                            ))
                        }
                    </Switch>
                    <footer>
                        este es el footer
                    </footer>
                    <div className="pie">Copyright {year.getFullYear()}</div>
            </div>
        </Router>
    )
}

export default Master;
