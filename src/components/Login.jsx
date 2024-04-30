import React from 'react';
import { useState } from 'react';
import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

const Login = () => {

  const [loginData, setLoginData] = useState({
     email:'',
     password:''
    
  })
  const navigate=useNavigate();
  const handleForm =(e)=> {
    const {name , value }=e.target;
    setLoginData({
      ...loginData , [name]:value
    })
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    
    // const response = await fetch('http://localhost:3000/login',{
    //   method:'POST',
    //   body:JSON.stringify(loginData),
    //   withCredentials: true,
    //     credentials: 'include',
    //   headers:{
    //     'Content-Type':'application/json'
    //   }
    // })
    // const data = await response.json()

    const options = {
      method:"POST",
      url:"http://localhost:3000/api/auth/login",
      withCredentials: true,
      credentials: 'include',
      data:{
        email: loginData.email,
        password: loginData.password
      },
      // headers:{
      //   'Content-Type':'application/json'
      // }
    }
    const res = await axios.request(options)
    const check = res.data
    
    try {
      if (check === "Success"){
        alert("You are logged in")
        navigate("/MyDashboard");
      }else {
        alert("Not logged in")
      }
    } catch (error) {
      console.log(error)
      
    }
    
  
  }
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
            className="mx-auto h-40 w-auto py-0"
            src="/src/assets/logo.svg"
            alt="Your Company"
          /> */}
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  onChange={handleForm}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-amber-400 hover:text-black">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  onChange={handleForm}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:text-black hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-base text-gray-950">
            Not a member?{' '}
           <Link to="/FormInput" className='font-semibold leading-6 text-amber-400 hover:text-black'>
              SIGNUP NOW
            </Link>
          </p>
        </div>
      </div>
    </>
    // <form onSubmit={handleSubmit} >
    //   <label for="email" class="mb-2 text-sm text-start text-grey-900">Email*</label>
    //   <div className='p-2'>
    //     <input className='border-2 border-black p-2'
    //       type='text' 
    //       name='email' 
    //       placeholder='Email' 
    //       onChange={handleForm}>
    //     </input>
    //   </div>
    //   <div className='p-2'>
    //     <input className='border-2 border-black p-2'
    //       type='text' 
    //       name='password' 
    //       placeholder='Password'
    //       onChange={handleForm}>
    //     </input>
    //   </div>
    //   <div className='p-2'>
    //     <input type='submit'></input>
    //   </div>
    // </form>
  )
}

export default Login