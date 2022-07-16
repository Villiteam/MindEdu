import React from 'react'
import Router from '../routes'
import {
    BrowserRouter
} from "react-router-dom";

const Layout = () => {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    )
}

export default Layout