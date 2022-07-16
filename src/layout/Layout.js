import React from 'react'
import Router from '../routes/Index'
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