import React from 'react'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';


const Signout = () => {
  const navigate=useNavigate();
  async function loggingout() {

    const options = {
      method: "POST",
      url: "http://localhost:3000/api/auth/logout",
      withCredentials: true, 
      credentials :"include",
  };
    try {
      const res = await axios(options);
      console.log(res)
      if (res.data.success === true){
        alert("You are successfully logged out")
        navigate("/Login");
      }else {
        alert("Logout Unsuccessful")
      }
    } catch (e) {
      console.log(e.message)
    }
  }

  return (
    <div className="flex justify-center p-2">
            <button 
            onClick={loggingout} 
            className="w-36 my-8 px-4 py-2 text-white bg-black hover:bg-amber-400 hover:text-black rounded shadow-xl">SIGN OUT</button>
        </div>
  )
}

export default Signout