import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext()
export default function AuthContextProvider({ children }) {
    const navigate = useNavigate()
    const [akashAuth, setAkashAuth] = useState(false);
    const [vikashAuth, setVikashAuth] = useState(false);
    const [user, setUser] = useState({})

    const handleLogin = (userCredential) => {
        if (userCredential.username === "akash" && userCredential.password === "123") {
            setAkashAuth(true)
            setUser(userCredential)
            navigate("/")
        }
        else if (userCredential.username === "vikash" && userCredential.password === "123") {
            setVikashAuth(true)
            setUser(userCredential)
            navigate("/")
        } else {
            alert("Wrong credentials!")
        }
    }

    const handleLogout = () => {
        setAkashAuth(false)
        setVikashAuth(false)
    }

    return (
        <AuthContext.Provider value={{ akashAuth, vikashAuth, handleLogin, handleLogout, user }}>
            {children}
        </AuthContext.Provider>
    )
}
