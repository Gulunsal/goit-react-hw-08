import React from 'react'
import { NavLink } from 'react-router'

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </div>
  )
}
