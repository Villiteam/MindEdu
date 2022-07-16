import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";

import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Dashboard from '../pages/Dashboard/Dashboard'
import Contest from '../pages/Contest/Contest';
import Aim from '../pages/Aim/Aim';
const Router = () => {
    return (
        <Routes>
            <Route path="/" >
                <Route index element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/contest/:id' element={<Contest />} />
                <Route path='/aim' element={<Aim />} > </Route>
            </Route>
        </Routes>
    )
}

export default Router