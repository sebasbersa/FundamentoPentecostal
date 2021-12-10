import React, {useState, useEffect} from 'react'
import Error404 from './Error404';
import ArticuloComponent from '../components/articulos/ArticuloComponent';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import basePath from '../../../config/serverConfig';

function Articulo(props) {
    const [posts, setposts] = useState([]);
    useEffect(() => {
        consumeApiPosts();
    }, []);
    const consumeApiPosts = async() => {
        await fetch(basePath + "/posts", {method: "POST"}).then(async ( res, err) => {
                setposts(await res.json());
        }).catch(()=>{
            console.log("not conected");
        });
    };
    return (
        <div>
            <Router>
                <Switch>
                    {posts.map((art, index) => {
                        return (
                        <Route 
                            key={index}
                            path={art.path}
                            exact={true} 
                            render={() => <ArticuloComponent 
                                            img={art.imagen}
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
