import React, {useState, useEffect} from 'react';
import ArticlesTable from "./ArticlesTable";
function ArticlesList() {
    const [posts, setposts] = useState([]);
    useEffect(() => {
        consumeApiPosts();
    }, [])
    const consumeApiPosts = async() => {
        const response = await fetch("http://localhost:3500/posts-all", {method: "POST"})
        const responseJson = await response.json();
        setposts(responseJson)
    };

    const habilitarHandler = (event) => {
        event.preventDefault();
        const id = event.target.name;
        const habilitado = event.target.checked;
        const cuerpo = {
            id: id,
            habilitado:habilitado
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

    const enableDisablePost = async(cuerpo) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cuerpo)
        };
        const response = await fetch("http://localhost:3500/enableDisablePost", requestOptions);
        consumeApiPosts();
    };

    const deletePost = async(cuerpo) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cuerpo)
        };
        const response = await fetch("http://localhost:3500/deletePost", requestOptions);
        consumeApiPosts();
    }
    return (
        <ArticlesTable rows={posts} habilitar={habilitarHandler} eliminar={eliminarHandler} />
    )
}

export default ArticlesList
