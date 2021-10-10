import React from 'react'
import articulos from '../../../utilities/articulos';
import Error404 from './Error404';
import ArticuloComponent from '../components/ArticuloComponent';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

function Articulo(props) {
    return (
        <div>
            <Router>
                <Switch>
                    {articulos.map((art, index) => {
                        return (
                        <Route 
                            key={index}
                            path={art.path}
                            exact={true} 
                            render={() => <ArticuloComponent 
                                            titulo={art.titulo} 
                                            texto={art.texto}
                                            contenido={art.contenido} />}/>
                        )
                    })}
                    <Route path="*" render={() => <Error404/>}/>
                </Switch>
            </Router>
        </div>
    )
}

export default Articulo;
