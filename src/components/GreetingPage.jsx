import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContextProvider';

export default function GreetingPage() {
    const { akashAuth,user } = useContext(AuthContext);

    useEffect(()=>{
        
    },[])

    return (
        <h1>{akashAuth ? "Welcome" : "Thank you"} {user?.username[0].toUpperCase()+user?.username.slice(1)}</h1>
    )
}
