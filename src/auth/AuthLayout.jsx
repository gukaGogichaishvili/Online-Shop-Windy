import React from 'react'
import LoginForm from './forms/LoginForm'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <Outlet /> 
  )
}

export default AuthLayout