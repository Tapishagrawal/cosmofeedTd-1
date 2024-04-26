import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContextProvider'

export default function Navbar() {
  const { akashAuth, vikashAuth, handleLogout } = useContext(AuthContext);
  return (
    <div>
      <Link to={"/"}>Home</Link>
      {
        akashAuth || vikashAuth ?
          <Link onClick={handleLogout}>Logout</Link>
          :
          <Link to={"/login"}>Login</Link>
      }
    </div>
  )
}
