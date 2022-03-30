import React, {useState,useEffect} from 'react';
import { makeStyles} from '@material-ui/core';
import Navbar from './components/admin/navbar/Navbar';
import Sidebar from './components/admin/Sidebar/Sidebar';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  import routes from './routes';
import './admin.css'
import jwt from 'jsonwebtoken';
function Admin(){
    //Revisar si el usuario esta logueado:
    useEffect(()=>{
        const token = localStorage.getItem("token");
        console.log(token);
        if(token){
            const user = jwt.decode(token);
            if(!user){
                localStorage.removeItem("token");
                window.location.href = "/login";
            }else{
                console.log(user);
            }
        }else{
            window.location.href = "/login";
        }
    }, []);
    const sidebarWidth = 240;
    const [navbarMargin, setnavbarMargin] = useState(240)
    const [variant, setVariant] = useState("permanent")
    const [open, setOpen] = useState(false)
    const accionAbrir = () => {
        setOpen(!open);
    }
    function handleResize(){
        if(window.innerWidth < 600){
            setOpen(false);
            setVariant("temporary");
            setnavbarMargin(0);  
        }
        else{
                setOpen(true);
                setVariant("permanent");   
                setnavbarMargin(240);         
        }
    }
    window.addEventListener('resize', handleResize);

    const windowWidth = () => {
        if(window.innerWidth < 600){
            setOpen(false);
            setVariant("temporary");
            setnavbarMargin(0);
        }
    }
    useEffect(() => {
        windowWidth();
    }, [])
    
    const estilos = makeStyles( theme => ({
        root: {
            display: 'block'
        },
        toolbar: theme.mixins.toolbar,
        content:{
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(3)
        },
        contenido: {
            marginLeft: navbarMargin,
        }
    }))
    const classes = estilos();
    return (
            <Router>
            <div className={classes.root}>
                <div className={classes.toolbar}></div>
                <Navbar sidebarWidth={navbarMargin} menuButton={accionAbrir}/>
                <Sidebar
                    id="Sidebar" 
                    width={sidebarWidth}
                    variant={variant}
                    open={open}
                    onClose={accionAbrir}
                />
                    <div className={classes.contenido}>
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
                        <footer>Footer</footer>
                    </div>          
                </div>
            </Router>
    )
}

export default Admin;
