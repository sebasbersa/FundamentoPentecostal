import React from 'react'
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { capitalize } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      boxShadow: "2px 2px 8px rgba(0,0,0,0.3)",
      margin: "10px"
    },
    media: {
      height: 140,
      objectFit:"cover",
    },
    link: {
      '&:hover': {
        color: "inherit",
     },
    }
  });

function Tarjeta(props){
    const classes = useStyles();
    return (
        <Card id={props.id} className={classes.root} >
          <CardActionArea className={classes.link} href={props.path} >
            <CardMedia
              className={classes.media}
              image={props.imagen}
              title={props.imageTitle}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {capitalize(props.titulo.length >= 23 ? props.titulo.slice(0,20) + "..." : props.titulo)}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {capitalize(props.descripcion)}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {/* <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button> */}
          </CardActions>
      </Card>
    )
}

export default Tarjeta
