import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";

import Landing from '../pages/Landing/Landing'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Dashboard from '../pages/Dashboard/Dashboard'
import Contest from '../pages/Contest/Contest';
import Home from '../pages/Home/Home';
import Exam from '../pages/Exam/Exam';

const Router = () => {
    return (
        <Routes>
            <Route path="/" >
                <Route index element={<Home />} />
                <Route path='/landing' element={<Landing />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/contest/:id' element={<Contest />} />
                <Route path='/exam/:id' element={<Exam />} />
            </Route>
        </Routes>
    )
}

export default Router