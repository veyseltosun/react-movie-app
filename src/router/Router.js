import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Main from '../pages/Main'
import Navbar from '../components/Navbar'


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<Main />} />
            </Routes>



        </BrowserRouter>

    )
}

export default AppRouter