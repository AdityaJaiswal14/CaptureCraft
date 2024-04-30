import React, {useState} from 'react'
import logo from '../assets/logo.svg'
import close from '../assets/close.svg'
import menu from '../assets/menu.png'
import { GiHamburgerMenu } from "react-icons/gi"
import { Link } from 'react-router-dom'
const Navbar = () => {

  const [toggle,setToggle]= useState(false)
  function handleClick() {
    setToggle(toggle => !toggle)
  }
  return (
    <div className='h-20 w-full border-2'>
      <div className='md:max-w-[1480px] max-w-[600px]  m-auto w-full h-full flex justify-between items-center overflow-y-clip'>
        <img src={logo} className='w-full h-[150px] max-w-[200px]  ' />

        <div className='hidden md:flex items-center'>
            <ul className='flex gap-6 text-lg font-semibold'>
              <li className='hover:text-amber-400 hover:font-bold hover:cursor-pointer'><Link to="/">Home</Link></li>
              <li className='hover:text-amber-400 hover:font-bold hover:cursor-pointer'>Features</li>
              <li className='hover:text-amber-400 hover:font-bold hover:cursor-pointer'>Contact</li>
              <li className='hover:text-amber-400 hover:font-bold hover:cursor-pointer'><Link to="/Explore">Explore</Link></li>
              <li className='hover:text-amber-400 hover:font-bold hover:cursor-pointer'><Link to="/Login">Login</Link></li>
              <li className='hover:text-amber-400 hover:font-bold hover:cursor-pointer'><Link to="/FormInput">Signup</Link></li>
            </ul>
        </div>
        <div className='md:hidden' onClick={handleClick}>
          <GiHamburgerMenu className='max-w-[35px] max-h-[35px] hover:cursor-pointer'/>
        </div>
        
      </div>
      <div className={toggle ? 'absolute z-10 p-4 w-full font-semibold bg-white px-20 md:hidden' : 'hidden'}>
        <ul>
            <li className='p-4 hover:bg-gray-200'><Link to="/">Home</Link></li>
            <li className='p-4 hover:bg-gray-200'>Features</li>
            <li className='p-4 hover:bg-gray-200'>Contact</li>
            <li className='p-4 hover:bg-gray-200'><Link to="/Explore">Explore</Link></li>
            <li className='p-4 hover:bg-gray-200'><Link to="/Login">Login</Link></li>
            <li className='p-4 hover:bg-gray-200'><Link to="/FormInput">Signup</Link></li>
          </ul>
      </div>
    </div>
  )
}

export default Navbar