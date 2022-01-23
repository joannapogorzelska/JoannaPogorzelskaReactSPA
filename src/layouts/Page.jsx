import React from 'react'
import {Route, Routes} from "react-router-dom"

import About from "../Pages/About"
import Admin from "../Pages/Admin"
import Articles from "../Pages/Articles"
import Contact from "../Pages/Contact"
import ErrorPage from '../Pages/ErrorPage'
import Home from "../Pages/Home"
import News from "../Pages/News"
import Login from "../Pages/Login"

function Page() {
    return (
        <Routes>
            
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact'  element={<Contact/>} />
            <Route path='/news'  element={<Articles/>} />
            <Route path='/article/:id' element={<News/>} />
            <Route path='/admin'  element={<Admin/>} />
            <Route path='/login'  element={<Login/>} />
            <Route path=''  element={<ErrorPage/>} />
        </Routes>)
}
export default Page