import React, {useState, useEffect} from 'react';
import ArticlesTable from "./ArticlesTable";
import basePath from '../../../../config/serverConfig'


function ArticlesList() {
    const [posts, setposts] = useState([]);
    useEffect(() => {
        consumeApiPosts();
    }, []);
    const consumeApiPosts = async() => {
        await fetch(basePath + "/posts-all", {method: "POST"}).then(async ( res, err) => {
                setposts(await res.json());
        }).catch(()=>{
            console.log("not conected");
        });
    };
    const habilitarHandler = (event) => {
        //event.preventDefault();
        const id = event.target.name;
        const habilitado = event.target.checked;
        const cuerpo = {
            id: id,
            habilitado: habilitado
        }
        enableDisablePost(cuerpo);
    }

    const eliminarHandler = (event) => {
        event.preventDefault();
        const id = event.target.id;
        const cuerpo = {
            id: id
        }
        deletePost(cuerpo);
    }

    const DestacarHandler = (event) => {
        //event.preventDefault();
        const id = event.target.name;
        const destacado = event.target.checked;
        const cuerpo = {
            id: id,
            destacado: destacado
        };
        destacarPost(cuerpo);
    }
    const enableDisablePost = async(cuerpo) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cuerpo)
        };
        await fetch(basePath + "/enableDisablePost", requestOptions);
        consumeApiPosts();
        
    };
    const destacarPost = async(cuerpo) =>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cuerpo)
        };
        await fetch(basePath + "/destacarPost", requestOptions);
        consumeApiPosts();
        
    }
    const deletePost = async(cuerpo) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cuerpo)
        };
        await fetch(basePath + "/deletePost", requestOptions);
        consumeApiPosts();
    }
    return (
        <ArticlesTable rows={posts} habilitar={habilitarHandler} destacar={DestacarHandler} eliminar={eliminarHandler} />
    )
}

export default ArticlesList
