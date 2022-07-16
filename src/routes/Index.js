import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";

import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Dashboard from '../pages/Dashboard/Dashboard'

const Router = () => {
    return (
        <Routes>
            <Route path="/" >
                <Route index element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/dashboard' element={<Dashboard />} />
            </Route>
        </Routes>
    )
}

export default Router