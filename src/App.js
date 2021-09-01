import React from 'react';
import './styles/app.css';
import {  ThemeProvider } from '@material-ui/core';
import Master from './components/master/Master';
import theme from './config/themeConfig';


function App(){
    return( 
        <ThemeProvider theme={theme}>
            <Master/>
        </ThemeProvider>
    )
}
export default App;