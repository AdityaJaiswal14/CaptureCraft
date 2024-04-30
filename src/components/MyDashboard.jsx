import React ,{ useState,useEffect }from 'react'
import { FiHeart } from "react-icons/fi";
//import { FaHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { FiBookmark } from "react-icons/fi";
import axios from 'axios';
import Abcd from './Abcd';
import Signout from './Signout';

const MyDashboard = () => {

    const [data,setData]=useState([]);
    const [trigger,setTrigger]=useState(0)
    async function fetchAllPosts() {
        const options = {
            method: "GET",
            url: "http://localhost:3000/api/auth/mypost",
            withCredentials: true, 
            credentials :"include",
        };
    try {
      const res = await axios(options);
      
      setData(res.data.check)
      
    } catch (e) {
      console.log(e.message)
    }
  }
  useEffect(() => {
    fetchAllPosts()
  },[trigger])
//     const cards = [
//     {
//         title: "Username 1",
//         img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
//         content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
//     },
//     {
//         title: "Username 2",
//         img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
//         content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
//     },
//     {
//         title: "Username 3",
//         img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
//         content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
//     },
//     {
//         title: "Username 4",
//         img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
//         content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
//     },
//     {
//       title: "Username 5",
//       img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
//       content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
//     },
//     {
//       title: "Username 6",
//       img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
//       content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
//     },
//     {
//       title: "Username 7",
//       img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
//       content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
//     },
//     {
//       title: "Username 8",
//       img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
//       content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
//     },

// ];


  return (
    <>
            <div className='grid lg:grid-cols-[75%_25%]'>
            
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
            <div>
              <Abcd setTrigger={setTrigger}/>
              <Signout/>
              </div> 
            </div>
        </>
        
  );
}

export default MyDashboard