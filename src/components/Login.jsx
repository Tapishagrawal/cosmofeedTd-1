import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContextProvider';

export default function Login() {
    const [inputValue, setInputValue] = useState({username:"", password:""})
    const {handleLogin} = useContext(AuthContext)
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setInputValue(pre=>{
            return {...pre, [name]:value};
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(inputValue)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" name="username" value={inputValue.username} />
            <input onChange={handleChange} type="password" name="password" value={inputValue.password} />
            <button type='submit'> Login</button>
        </form>
    )
}
