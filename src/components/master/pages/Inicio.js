import React from 'react'
import Carousel from '../components/Caousel';
const images=[
    {
        id: '1',
        title: 'primera',
        image: 'https://laopinion.com/wp-content/uploads/sites/3/2020/12/pexels-wendy-van-zyl-1112048.jpg?quality=80&strip=all&w=1200'
    },
    {
        id: '2',
        title: 'segunda',
        image: 'https://dg.imgix.net/the-most-repeated-verse-in-the-bible-wfq9puhm-en/landscape/the-most-repeated-verse-in-the-bible-wfq9puhm-2c238cf97d4c72a4be85c9d86448d20e.jpg?ts=1538421135&ixlib=rails-4.2.0&auto=format%2Ccompress&fit=min&w=700&h=394&dpr=2&ch=Width%2CDPR'
    }
]

function Inicio() {
    return (
        <div>
            <Carousel images={images}/>
            Este es el inicio
        </div>
    )
}

export default Inicio
