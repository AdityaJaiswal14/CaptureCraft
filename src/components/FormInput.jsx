import React from 'react'
import { useState } from 'react';

const FormInput = () => {

  const [formData, setFormData] = useState({
    username:'',
    dateofbirth:'',
    role:'',
    gender:'',
    email:'',
    password:'',
    confirmpassword:''
  })

  const[errors, setErrors] = useState({})
 
  const handleForm =(e)=> {
    const {name , value }=e.target;
    setFormData({
      ...formData , [name]:value
    })
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    
    const response = await fetch('http://localhost:3000/api/auth/register',{
      method:'POST',
      body:JSON.stringify(formData),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const data = await response.json()
    const validationErrors = {}
    if(!formData.username.trim()) {
        validationErrors.username = "username is required"
    }

    if(!formData.email.trim()) {
        validationErrors.email = "email is required"
    } else if(!/\S+@\S+\.\S+/.test(formData.email)){
        validationErrors.email = "email is not valid"
    }

    if(!formData.password.trim()) {
        validationErrors.password = "password is required"
    } else if(formData.password.length < 6){
        validationErrors.password = "password should be at least 6 char"
    }

    if(formData.confirmpassword !== formData.password) {
        validationErrors.confirmPassword = "password not matched"
    }

    setErrors(validationErrors)

    if(Object.keys(validationErrors).length === 0) {
        alert("Sign Up Successfull")
        
        /*console.log(formData)*/
        console.log(data)
        
    }


  }

  return (
    <form onSubmit={handleSubmit} >
      <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                    <a href="/">
                        <h3 className="text-4xl font-bold text-black">
                            Register Now
                        </h3>
                    </a>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                        <div>
                            <label
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Username
                            </label>
                            <div className="flex flex-col items-start">
                                <input 
                                    type="text"
                                    name="username"
                                    onChange={handleForm}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-3"
                                />
                            </div>
                            {errors.username && <span>{errors.username}</span>}
                        </div>
                        <div className="mt-4">
                            <label
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="email"
                                    name="email" 
                                    onChange={handleForm}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-3"
                                />
                            </div>
                            {errors.email && <span>{errors.email}</span>}
                        </div>
                        <div className="mt-4">
                            <label
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Date Of Birth
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="email"
                                    name="dateofbirth" 
                                    onChange={handleForm}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-3"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Role
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="email"
                                    name="role" 
                                    onChange={handleForm}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-3"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Gender
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="email"
                                    name="gender" 
                                    onChange={handleForm}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-3"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleForm}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-3"
                                />
                            </div>
                            {errors.password && <span>{errors.password}</span>}
                        </div>
                        <div className="mt-4">
                            <label
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Confirm Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="confirmpassword"
                                    onChange={handleForm}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-3"
                                />
                            </div>
                            {errors.confirmPassword && <span>{errors.confirmPassword}</span>} 
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            <a
                                className="text-sm text-amber-400 underline hover:text-gray-900"
                                href="http://localhost:5173/Login"
                            >
                                Already registered?
                            </a>
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-black hover:text-black hover:bg-amber-400 border border-transparent rounded-md active:bg-gray-900 false"
                            >
                                Register
                            </button>
                        </div>
                </div>
            </div>
        </div>
    </form>    
  ) 
}

export default FormInput

