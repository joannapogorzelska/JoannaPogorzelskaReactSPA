import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

const permission = false

function Admin() {
    return (
        <Routes>
            <Route path="*"
                element={permission ? (<h3>Panel adimina</h3>) : (<Navigate to="/login" />)} />
        </Routes>
    )
}
export default Admin