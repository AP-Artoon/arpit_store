import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Public = () => {

    let auth = localStorage.getItem('current-user-data')

    return (
        auth ? <Navigate to="/home" /> : <Outlet />
    )
}

export default Public