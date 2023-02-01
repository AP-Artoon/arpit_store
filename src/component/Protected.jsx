import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const Protected = () => {

    let auth = localStorage.getItem('current-user-data')
    // console.log(auth);
    return (
        auth ? <Outlet /> : <Navigate to="/login" />
    )
}

export default Protected
