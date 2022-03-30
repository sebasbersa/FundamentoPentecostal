import React, { useState, useEffect } from 'react'
import {Button, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import basePath from '../../config/serverConfig';
import ReCAPTCHA from "react-google-recaptcha";
import google from '../../config/recaptcha';

const useStyles = makeStyles((theme) => ({
    bodyBack: {
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,255,0.2)"
    },
    formClass: {
        position: "absolute",
        background: "white",
        top: "50vh",
        left: "50vw",
        transform: "translate(-50%, -50%)",
        minWidth: "350px",
        minHeight: "350px",
        boxShadow: "0 0 20px #00000055",
        borderRadius: "8px",
        padding: "40px",
        textAlign: "center"
    },
    br: {
        marginBottom: "20px"
    },
    wrong: {
        marginBottom: "20px",
        background: "rgba(255, 0 0, 0.1)"
    },
    marginButton: {
        marginRight: "10px"
    }
}));

const Login = () => {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
    const [debug, setDebug] = useState(false);

    useEffect(() => {
        let listaPath = window.location.href.split('/');
        let page = listaPath[2].split(':')[0];
        if(page === 'localhost'){
            setDebug(true);
        }
    }, [])
    

    const emailHandler = (e)=>{
        setEmail(e.target.value);
    }
    const passwordHandler = (e)=>{
        setPassword(e.target.value);
    }
    const evaluarCorreo = (correo) => {
        let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        //Se muestra un texto a modo de ejemplo, luego va a ser un icono
        if (emailRegex.test(correo)) {
            setEmailError(false);
            return true;
        } else {
            setEmailError(true);
            return false;
        }
    }
    function captchaChange(value) {
        setIsVerified(true);
      }
    const submitHandler = async () => {
        //Evaluar correo
        const valido = evaluarCorreo(email);
        if(!isVerified && !debug){
            alert("Debe validar el captcha");
        }
        else if(valido)
        {
            const usuario = {
                email: email,
                password: password
            }; 
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(usuario)
              }
            const response = await fetch(basePath + "/login", requestOptions);
            const data = await response.json();
            if(data.token){
                setPasswordError(false);
                localStorage.setItem('token', data.token);
                window.location.href = "/admin/"
            }else{
                alert("Usuario o contraseña erróneo");
                setPasswordError(true);
            }

        }   
    }
  return (
    <div className={classes.bodyBack}>
        <form className={classes.formClass}>
            <TextField id="email" 
            error={emailError}
            className={classes.br} 
            label="Correo electrónico"
            onChange={emailHandler}
            helperText={emailError ? "Correo inválido" : ""} />
            <br/>
            <TextField id="password" 
            error={passwordError}
            className={classes.br}
            label="Contraseña"
            type="password"
            autoComplete="current-password"
            onChange={passwordHandler} 
            helperText={passwordError ? "Contraseña errónea" : ""}
            />
            <br/>
            {
                !debug ? <ReCAPTCHA
                    sitekey={google.claveSitio}
                    onChange={captchaChange}
                /> : null
            }
            
            <br/>
            <Button className={classes.marginButton} variant="contained" color="secondary" onClick={() => {window.location.href = "/"}}>Volver</Button>
            <Button variant="contained" color="primary" onClick={submitHandler}>Entrar</Button>
        </form>
    </div>
  )
}

export default Login