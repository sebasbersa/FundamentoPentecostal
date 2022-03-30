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
import Admin from './components/admin/Admin';
import Login from './components/seguridad/Login';


function App(){
    return( 
        <ThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Route path="/login" exact={false}><Login/></Route>
                    <Route path="/admin" exact={false}><Admin/></Route>
                    <Route path="/" exact={false}><Master/></Route>
                </Switch>
            </Router>
        </ThemeProvider>
    )
}
export default App;