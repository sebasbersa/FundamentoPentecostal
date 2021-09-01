import React from 'react'

function Caousel(props){
    const images = props.images;
    return (
        <div>
        {
            images.map( (image) => {
            return (
                <div className="slider_item" key={image.id}>
                <img src={image.image} alt={image.title} className="slider_item_image" />
                <p className="slider_description">{image.title}</p>
                </div>
                )
            })
        }
        </div>
    )
}

export default Caousel
