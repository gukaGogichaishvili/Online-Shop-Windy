import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct'
import AuthLayout from './auth/AuthLayout'
import LoginForm from './auth/forms/LoginForm'
import Register from './auth/forms/SigninFrom'
import { Cart, Profile } from './components'

function App() {

  useEffect(() => {
    fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(console.log);
  }, [])
  

  return (
    <>
    <main>
      <Routes>
   
        <Route path='/' element={<Home />}/>
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<SingleProduct />} />
        <Route path='/' element={<AuthLayout />}> 
        <Route path='login' element={<LoginForm />} />
        <Route path='register' element={<Register />} />
        <Route path='/cart' element={<Cart />}/>
        <Route path='/profile' element={<Profile />}/>
        
        </Route>
      </Routes>
    </main>
    </>
  )
}

export default App;