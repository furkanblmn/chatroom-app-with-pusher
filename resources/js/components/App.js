import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Route, Switch, Redirect } from "react-router-dom";
import UserContextProvider from '../contexts/UserContext'
import HomePage from './HomePage';


export default function App() {

    /* const [loginInfo] = useState(JSON.parse(localStorage.getItem("user-information"))) */
    return (
        <UserContextProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                </Switch>
            </BrowserRouter>
        </UserContextProvider>
    )
}
if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}