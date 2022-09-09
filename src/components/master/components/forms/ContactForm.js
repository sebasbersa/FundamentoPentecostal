import React from 'react'
import { FormControl, makeStyles, TextField } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    multiline: {
        width: "200px",
        height: "200px"
    }
}));

const ContactForm = () => {
    const classes = useStyles();
  return (
    <div>
    <FormControl>
    <TextField id="nombre" label="Nombre" />
    </FormControl>
    <FormControl>
    <TextField 
        error={false}
        id="email" 
        label="Correo electrónico" 
        type={"email"} />
    </FormControl>
    <FormControl>
    <TextField
          id="message"
          label="Mensaje"
          multiline
          maxRows={4}
          className={classes.multiline}
        />
    </FormControl>
        
    </div>
  )
}

export default ContactForm