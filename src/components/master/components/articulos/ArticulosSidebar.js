import React,{useState, useEffect} from 'react';
import './articulosidebar.css'
import basePath from '../../../../config/serverConfig';

function ArticulosSidebar(){
    const [posts, setposts] = useState([]);
    useEffect(() => {
        consumeApiPosts();
    }, [])
    const consumeApiPosts = async() => {
        const response = await fetch(basePath + "/posts", {method: "POST"})
        const responseJson = await response.json();
        console.log(responseJson);
        setposts(responseJson)
    };
    return (
        <div className="artsid_div">
            <h3 className="artsid_h3">Otros articulos</h3>
            <hr />
            {posts.map((art) => {
                return(
                    <a href={art.path}>
                        <p>{art.titulo}</p>
                    </a>
                )
            })}
            <a href="/articulos">
                <p>Ver todos</p>
            </a>
        </div>
    )
}
export default ArticulosSidebar;