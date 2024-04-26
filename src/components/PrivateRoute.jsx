import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContextProvider'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({children}) {
    const {akashAuth, vikashAuth} = useContext(AuthContext)

    if(akashAuth || vikashAuth){
        return children
    }
    return <Navigate to="/login"/>
}
