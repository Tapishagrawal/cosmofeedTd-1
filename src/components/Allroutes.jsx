import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './Home'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import GreetingPage from './GreetingPage'
export default function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      } />
      <Route path='/login' element={<Login />} />
      <Route path='/greet' element={
        <PrivateRoute>
          <GreetingPage />
        </PrivateRoute>
      } />
    </Routes>
  )
}
