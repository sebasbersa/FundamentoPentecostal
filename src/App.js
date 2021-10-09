import React from 'react';
import './styles/app.css';
import {  ThemeProvider } from '@material-ui/core';
import Master from './components/master/Master';
import theme from './config/themeConfig';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";


function App(){
    return( 
        <ThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Route path="/admin" exact={false}>HELLO WORLD</Route>
                    <Route path="/" exact={false}><Master/></Route>
                </Switch>
            </Router>
        </ThemeProvider>
    )
}
export default App;