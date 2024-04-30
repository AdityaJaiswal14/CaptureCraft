import React, { useState,useEffect } from 'react'
import { FiHeart } from "react-icons/fi";
//import { FaHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { FiBookmark } from "react-icons/fi";
import axios from 'axios';

const Explore = () => {
    
  const [data,setData]=useState([]);
  async function fetchAllPosts() {
    try {
      const res = await axios.get("http://localhost:3000/api/auth/postRetrieveAll");
      setData(res.data.post)
    } catch (e) {
      console.log(e.message)
    }
  }
  useEffect(() => {
    fetchAllPosts()
  },[])


  return (
    <>
            <div className="grid gap-10 py-10 px-12 lg:grid-cols-4">
                {data.map((items, key) => (
                    <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={key}>
                        <img
                            className="object-cover w-full h-96"
                            src={items.link}
                            alt="image"
                        />
                        <div className="p-4">
                            <h4 className="text-xl font-semibold text-amber-400">
                                
                                {items.name}
                            </h4>
                            <p className="mb-2 leading-normal">
                            {items.caption}
                            </p>
                            <div className='grid grid-cols-4 '>
                            
                            <FiHeart/>                                                
                            <FaRegComment/>
                            <FiSend/>
                            <FiBookmark/>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </>
  );
}

export default Explore