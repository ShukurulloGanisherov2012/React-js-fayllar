import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
export default function Login() {
  return (
    <>
      <div className="container w-50 d-flex flex-column align-items-center gap-3 my-5">
        <h1>Login</h1>
        <input type="text" className='w-75' placeholder='Enter your name' />
        <input type="email" className='w-75' placeholder='Enter your email' />
        <input type="password" className='w-75' placeholder='Enter your password' />
        <Link to="/" className='w-100 d-flex justify-content-center text-decoration-none'><button className="btn btn-outline-success border-2 w-75 fs-5 fw-bold">Login</button></Link>
        <h4 className='d-flex gap-4'><p>Don't have an account</p>  <Link to='/register' className='text-primary'>Sign up</Link></h4>
      </div>
    </>
  )
}
