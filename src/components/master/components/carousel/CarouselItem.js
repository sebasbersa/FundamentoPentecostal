import React from 'react'
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';



function CarouselItem(props) {
    
    return (
        <div className={props.classes} style={{backgroundImage: `url(${props.imageUrl})`}}>
            <div className={`carousel-caption carousel-item__background carousel-${props.side} carousel-${props.light} `}>
                <h1>{props.headline}</h1>
                <p>{props.text}</p>
                {props.buttonText ? <Button variant="contained" color={props.light ? 'primary' : 'default'}>{props.buttonText}</Button> : null}
                
            </div>
        </div>
    )
}

export default CarouselItem;
