import React from 'react'
import CarouselItem from './CarouselItem';
import CarouselButton from './CarouselButton';
import './carousel.css';

function Caousel(props){
    const images = props.images;
    return (
        <div>
        <div id={props.id} className="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                {
                    images.map( (image) => {
                        if(image.id === "1"){
                           return( <CarouselButton id={props.id} to={image.id-1} active={true} label={image.title} />)
                        }else{
                            return(<CarouselButton id={props.id} to={image.id-1} active={false} label={image.title} />)
                        }
                    })
                }             
                
            </div>
            <div className="carousel-inner">
            {
                    images.map( (image) => {
                        if(image.id === "1"){
                           return( <CarouselItem headline={image.title}
                        text={image.text} 
                        buttonText={image.buttonText}
                        classes="carousel-item active"
                        imageUrl={image.image}
                        side={image.side}   
                        light={image.light}              
                        />)
                        }else{
                            return(<CarouselItem headline={image.title}
                        text={image.text} 
                        buttonText={image.buttonText}
                        classes="carousel-item" 
                        imageUrl={image.image}
                        side={image.side}  
                        light={image.light} 
                        />)
                        }
                    })
                }             
            
            
            </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselInicio" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselInicio" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Caousel
